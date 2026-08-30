import Link from "next/link";

export default function Header() {
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
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            Home
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
