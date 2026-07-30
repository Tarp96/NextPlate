import Image from "next/image";

type RecipeCardProps = {
  id: number;
  title: string;
  imageSrc: string;
  readyInMinutes: number;
  vegetarian: boolean;
  vegan: boolean;
};

export default function RecipeCard({
  title,
  imageSrc,
  readyInMinutes,
  vegetarian,
  vegan,
}: RecipeCardProps) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <div className="space-y-3 p-4">
        <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>

        <p className="text-sm text-gray-500">⏱ {readyInMinutes} min</p>

        <div className="flex gap-2">
          {vegetarian && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Vegetarian
            </span>
          )}

          {vegan && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              Vegan
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
