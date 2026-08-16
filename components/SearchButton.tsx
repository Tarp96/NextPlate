"use client";
import { LoaderCircle, Search } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-label="Search"
      disabled={pending}
      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-md p-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-green-600 disabled:cursor-not-allowed dark:hover:bg-zinc-800"
    >
      {pending ? (
        <LoaderCircle className="h-5 w-5 animate-spin" />
      ) : (
        <Search className="h-5 w-5" />
      )}
    </button>
  );
}
