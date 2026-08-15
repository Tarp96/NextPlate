"use client";

type FilterButtonProps = {
  label: string;
  onClickAction: () => void;
};

export default function FilterButton({
  label,
  onClickAction,
}: FilterButtonProps) {
  return <button onClick={onClickAction}>{label}</button>;
}
