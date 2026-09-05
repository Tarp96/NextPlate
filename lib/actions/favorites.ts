"use server";
import { getAuthSession } from "../auth";
import { createSupabase } from "../supabase/server";
import type { Favorite, NewFavorite } from "../types";

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
    return { error: error.message };
  }

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
