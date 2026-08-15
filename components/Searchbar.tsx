"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import Form from "next/form";
import { useRouter } from "next/navigation";

type SearchbarProps = {
  query?: string;
};

export default function Searchbar({ query }: SearchbarProps) {
  const [value, setValue] = useState(query ?? "");
  const router = useRouter();

  function handleClear() {
    setValue("");
    router.replace("/");
  }

  return (
    <Form action="/" className="relative mb-8 w-full max-w-md">
      <input
        type="text"
        name="query"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for recipes..."
        autoComplete="off"
        className="w-full rounded-xl border border-zinc-300 bg-white py-3 pl-4 pr-20 text-zinc-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 "
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute right-12 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-red-500 dark:hover:bg-zinc-800"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      <button
        type="submit"
        aria-label="Search"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-green-600 dark:hover:bg-zinc-800"
      >
        <Search className="h-5 w-5" />
      </button>
    </Form>
  );
}
