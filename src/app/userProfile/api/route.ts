import { currentUser } from "@clerk/nextjs";

export async function GET() {
  const user = await currentUser();

  return new Response(JSON.stringify(user));
}
