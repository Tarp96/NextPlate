"use client";

type TagProps = {
  label: string;
  variant?: "filter" | "badge";
  onClickAction: () => void;
  active?: boolean;
};

export default function Tag({}: TagProps) {}
