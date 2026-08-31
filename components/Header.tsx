import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import HeaderNavLink from "./ui/HeaderNavLink";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="rounded-md text-2xl font-bold tracking-tight text-green-700 transition-colors hover:text-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-4"
        >
          NextPlate
        </Link>

        <nav aria-label="Main navigation">
          <HeaderNavLink href="/" label="Home" />

          {session?.user ? (
            <HeaderNavLink href="/profile" label="Profile" />
          ) : (
            <HeaderNavLink href="/login" label="Login" />
          )}
        </nav>
      </div>
    </header>
  );
}
