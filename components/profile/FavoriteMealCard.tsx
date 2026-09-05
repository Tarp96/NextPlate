import Link from "next/link";

type FavoriteMealCardProps = {
  recipe_id: string;
  image: string;
  title: string;
};

export default function FavoriteMealCard({
  recipe_id,
  image,
  title,
}: FavoriteMealCardProps) {
  return (
    <Link
      href={`/recipe/${recipe_id}`}
      className="group block h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
    >
      <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-400">
            No recipe image
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 p-5">
        <h3 className="font-semibold leading-6 text-zinc-900 transition-colors group-hover:text-green-700">
          {title ?? "Untitled recipe"}
        </h3>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mt-0.5 size-5 shrink-0 text-green-700"
        >
          <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08A6.02 6.02 0 0 1 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" />
        </svg>
      </div>
    </Link>
  );
}
