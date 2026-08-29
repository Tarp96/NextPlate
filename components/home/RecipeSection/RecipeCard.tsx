import Image from "next/image";
import Link from "next/link";

type RecipeCardProps = {
  id: number;
  title: string;
  imageSrc: string;
  readyInMinutes: number;
  vegetarian: boolean;
  vegan: boolean;
};

export default function RecipeCard({
  id,
  title,
  imageSrc,
  readyInMinutes,
  vegetarian,
  vegan,
}: RecipeCardProps) {
  return (
    <Link href={`/recipeDetails/${id}`} className="block h-full">
      <article className="h-full overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[4/3]">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>

        <div className="space-y-3 p-4">
          <h2 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold">
            {title}
          </h2>

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
    </Link>
  );
}
