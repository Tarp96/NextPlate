import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
};

export default function HeaderNavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
    >
      {label}
    </Link>
  );
}
