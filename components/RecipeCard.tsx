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
  id,
  title,
  imageSrc,
  readyInMinutes,
  vegetarian,
  vegan,
}: RecipeCardProps) {
  return (
    <>
      <Image src={imageSrc} alt={title} fill />
      <h2>{title}</h2>
      <p>{readyInMinutes}</p>
      {vegetarian ? <p>Vegetarian</p> : ""}
      {vegan ? <p>Vegan</p> : ""}
    </>
  );
}
