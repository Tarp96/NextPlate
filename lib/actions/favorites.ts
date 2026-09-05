"use server";
import { getAuthSession } from "../auth";
import { createSupabase } from "../supabase/server";

export async function addFavorites(recipe: {
  id: number;
  title: string;
  image: string;
}) {
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

export default async function getFavorites() {
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

  return { favorites: data ?? [], error: null };
}
