"use server";
import { getAuthSession } from "../auth";
import { createSupabase } from "../supabase/server";
import type { Favorite, NewFavorite } from "../types";
import { revalidatePath } from "next/cache";

export async function addFavorites(recipe: NewFavorite) {
  const session = await getAuthSession();

  if (!session?.user.id) {
    return { error: "You must be logged in" };
  }

  const supabase = createSupabase();

  const { error } = await supabase.from("favorites").insert({
    user_id: session.user.id,
    recipe_id: recipe.id,
    title: recipe.title,
    image: recipe.image,
  });

  if (error) {
    if (error.code === "23505") {
      return { error: "This recipe is already in your favorites" };
    }
    return { error: error.message };
  }
  revalidatePath("/profile");
  return { success: true };
}

export async function deleteFavorite(recipeId: number) {
  const session = await getAuthSession();

  if (!session?.user.id) {
    return { error: "You must be logged in" };
  }

  const supabase = createSupabase();

  const { error } = await supabase
    .from("favorites")
    .delete()
    .eq("recipe_id", recipeId);
  if (error) {
    return { error: error.message };
  }

  revalidatePath("/profile");
  return { success: true };
}

export async function getFavorites(): Promise<{
  favorites: Favorite[];
  error: string | null;
}> {
  const session = await getAuthSession();

  if (!session?.user.id) {
    return { favorites: [], error: "You must be logged in" };
  }

  const supabase = createSupabase();

  const { data, error } = await supabase
    .from("favorites")
    .select("id, recipe_id, title, image, created_at")
    .eq("user_id", session.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return { favorites: [], error: error.message };
  }

  return { favorites: (data as Favorite[]) ?? [], error: null };
}

export async function checkIfExists(recipeId: number) {
  const session = await getAuthSession();

  if (!session?.user.id) {
    return { exists: false, error: "You must be logged in" };
  }

  const supabase = createSupabase();

  const { data, error } = await supabase
    .from("favorites")
    .select("id")
    .eq("user_id", session.user.id)
    .eq("recipe_id", recipeId)
    .limit(1);

  if (error) {
    return { exists: false, error: error.message };
  }

  return { exists: (data?.length ?? 0) > 0, error: null };
}
