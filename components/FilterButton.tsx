"use client";

import { useState } from "react";

type FilterButtonProps = {
  isVegan: boolean;
  label: string;
};

export default function FilterButton({ isVegan, label }: FilterButtonProps) {
  const [displayVegan, setDisplayVegan] = useState(isVegan);

  function handleClick() {
    setDisplayVegan((prev) => !prev);
    console.log("Click");
  }

  return <button onClick={handleClick}>{label}</button>;
}
