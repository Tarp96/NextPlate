"use client";

type FilterButtonProps = {
  key: string;
  label: string;
  onClickAction: () => void;
  active: boolean;
};

export default function FilterButton({
  key,
  label,
  onClickAction,
  active,
}: FilterButtonProps) {
  return (
    <button
      key={key}
      type="button"
      onClick={onClickAction}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition ${
        active
          ? "border-green-600 bg-green-600 text-white"
          : "border-zinc-300 bg-white text-zinc-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700"
      }`}
    >
      {label}
    </button>
  );
}
