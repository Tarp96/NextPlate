"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main>
      <h1>Welcome to NextPlate</h1>
      <p>Sign in to save recipes and manage your profile.</p>

      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Continue with Google
      </button>
    </main>
  );
}
