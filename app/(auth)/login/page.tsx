"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="flex min-h-[calc(100svh-73px)] items-center justify-center bg-gradient-to-br from-green-50 via-zinc-50 to-emerald-100 px-6 py-12">
      <section className="w-full max-w-md rounded-3xl border border-green-100 bg-white p-8 text-center shadow-xl shadow-green-900/5 sm:p-10">
        <div
          aria-hidden="true"
          className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-green-700 text-2xl font-bold text-white shadow-md shadow-green-700/20"
        >
          N
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Welcome to NextPlate
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
          Sign in to save recipes and manage your profile.
        </p>

        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:translate-y-px"
        >
          <span
            aria-hidden="true"
            className="flex size-6 items-center justify-center rounded-full bg-white text-sm font-bold text-green-700"
          >
            G
          </span>
          Continue with Google
        </button>

        <p className="mt-6 text-xs leading-5 text-zinc-500">
          Google securely handles your sign-in details.
        </p>
      </section>
    </main>
  );
}
