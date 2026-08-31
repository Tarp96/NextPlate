import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/login");
  }

  const userName = session.user.name ?? "there";

  return (
    <>
      <h1>Welcome {userName}</h1>
    </>
  );
}
