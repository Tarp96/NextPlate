import type { LucideIcon } from "lucide-react";

type RecipeStatProps = {
  icon: LucideIcon;
  label?: string;
  value: string | number;
};

export default function RecipeStat({
  icon: Icon,
  label,
  value,
}: RecipeStatProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">
      <Icon className="h-5 w-5 text-slate-600" />

      <div>
        {label && (
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {label}
          </p>
        )}

        <p className="font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}
