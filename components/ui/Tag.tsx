"use client";

type TagProps = {
  label: string;
  variant?: "filter" | "badge";
  onClickAction?: () => void;
  active?: boolean;
};

export default function Tag({
  label,
  variant = "filter",
  onClickAction,
  active = false,
}: TagProps) {
  const baseStyles =
    "capitalize inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium";

  if (variant === "badge") {
    return (
      <span
        className={`${baseStyles} border-green-200 bg-green-50 text-green-700`}
      >
        {label}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={onClickAction}
      aria-pressed={active}
      className={`${baseStyles} cursor-pointer transition ${
        active
          ? "border-green-600 bg-green-600 text-white"
          : "border-zinc-300 bg-white text-zinc-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700"
      }`}
    >
      {label}
    </button>
  );
}
