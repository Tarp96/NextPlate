"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NavigationButton() {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="inline-flex shrink-0 items-center justify-center rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
    >
      <ArrowLeft className="h-6 w-6 sm:h-7 sm:w-7" />
    </Link>
  );
}
