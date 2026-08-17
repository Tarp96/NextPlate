"use client";

type FilterButtonProps = {
  label: string;
  variant?: "filter" | "badge";
  onClickAction?: () => void;
  active?: boolean;
};

export default function FilterButton({
  label,
  variant = "filter",
  onClickAction,
  active = false,
}: FilterButtonProps) {
  const isFilter = variant === "filter";

  return (
    <button
      type="button"
      onClick={isFilter ? onClickAction : undefined}
      aria-pressed={isFilter ? active : undefined}
      disabled={!isFilter}
      className={`first-letter:uppercase rounded-full border px-4 py-2 text-sm font-medium shadow-sm ${
        isFilter
          ? `cursor-pointer transition ${
              active
                ? "border-green-600 bg-green-600 text-white"
                : "border-zinc-300 bg-white text-zinc-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700"
            }`
          : "cursor-default border-green-200 bg-green-50 text-green-700"
      }`}
    >
      {label}
    </button>
  );
}
