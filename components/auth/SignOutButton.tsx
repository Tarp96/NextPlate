"use client";

import { signOut } from "next-auth/react";

export default function SignoutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
    >
      Sign out
    </button>
  );
}
