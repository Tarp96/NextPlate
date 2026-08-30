import {SelectedSortOption } from "@/lib/types";

type SortButtonProps = {
  label: string;
  option: SelectedSortOption;
  selectedOption: SelectedSortOption;
  onSelect: (option: SelectedSortOption) => void;
};

export default function SortButton({
  label,
  option,
  selectedOption,
  onSelect,
}: SortButtonProps) {
  const isSelected = option === selectedOption;

  return (
    <button
      type="button"
      role="menuitem"
      onClick={() => onSelect(option)}
      className={`
        flex w-full cursor-pointer items-center justify-between
        px-4 py-2.5 text-left text-sm transition
        ${
          isSelected
            ? "bg-green-50 font-medium text-green-700"
            : "text-zinc-700 hover:bg-green-50 hover:text-green-700"
        }
      `}
    >
      {label}

      {isSelected && (
        <span aria-hidden="true" className="text-green-600">
          ✓
        </span>
      )}
    </button>
  );
}
