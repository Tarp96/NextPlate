import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/login");
  }

  const userName = session.user.name ?? "there";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <main className="flex min-h-[calc(100svh-73px)] items-center justify-center bg-gradient-to-br from-green-50 via-zinc-50 to-emerald-100 px-6 py-12">
      <section className="w-full max-w-lg rounded-3xl border border-green-100 bg-white p-8 shadow-xl shadow-green-900/5 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <div
            aria-hidden="true"
            className="flex size-20 items-center justify-center rounded-full bg-green-700 text-3xl font-bold text-white shadow-md shadow-green-700/20"
          >
            {userInitial}
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-green-700">
            Your profile
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Welcome, {userName}
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600 sm:text-base">
            You&apos;re signed in and ready to discover your next favourite
            recipe.
          </p>
        </div>

        {session.user.email && (
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Email address
            </p>
            <p className="mt-1 break-all font-medium text-zinc-800">
              {session.user.email}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
