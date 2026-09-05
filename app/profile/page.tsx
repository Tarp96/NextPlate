import { getAuthSession } from "@/lib/auth";
import { getFavorites } from "@/lib/actions/favorites";
import Link from "next/link";
import { redirect } from "next/navigation";
import FavoritesGrid from "@/components/profile/FavoritesGrid";

export default async function ProfilePage() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/login");
  }

  const { favorites = [], error } = await getFavorites();

  const userName = session.user.name ?? "there";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <main className="min-h-[calc(100svh-73px)] bg-gradient-to-br from-green-50 via-white to-emerald-50 px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <section className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div
              aria-hidden="true"
              className="flex size-20 shrink-0 items-center justify-center rounded-full bg-green-700 text-3xl font-bold text-white shadow-md shadow-green-700/20"
            >
              {userInitial}
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                Your profile
              </p>

              <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Welcome, {userName}
              </h1>

              <p className="mt-2 text-sm leading-6 text-zinc-600 sm:text-base">
                Your saved recipes are collected here for easy access.
              </p>

              {session.user.email && (
                <p className="mt-2 break-all text-sm text-zinc-500">
                  {session.user.email}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                Your collection
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Favorite recipes
              </h2>
            </div>

            {!error && favorites.length > 0 && (
              <p className="shrink-0 text-sm font-medium text-zinc-500">
                {favorites.length}{" "}
                {favorites.length === 1 ? "recipe" : "recipes"}
              </p>
            )}
          </div>

          {error ? (
            <div
              role="alert"
              className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700"
            >
              {error}
            </div>
          ) : favorites.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-green-200 bg-white/70 px-6 py-14 text-center">
              <div
                aria-hidden="true"
                className="mx-auto flex size-14 items-center justify-center rounded-full bg-green-100 text-green-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                No favorites yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600">
                Recipes you save will appear here, ready for your next meal.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              >
                Explore recipes
              </Link>
            </div>
          ) : (
            <FavoritesGrid recipeList={favorites} />
          )}
        </section>
      </div>
    </main>
  );
}
