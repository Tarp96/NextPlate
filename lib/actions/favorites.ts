"use server";
import { getAuthSession } from "../auth";
import { createSupabase } from "../supabase/server";

export async function addFavorites(recipe: {
  id: number;
  title: string;
  image: string;
}) {
  const session = await getAuthSession();
}
