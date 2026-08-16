export default async function RecipeDetailsPage({ params }) {
  const { id } = await params;

  console.log(id);
  return <h1>{`Your id ${id}`}</h1>;
}
