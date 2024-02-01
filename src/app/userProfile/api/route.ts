import { clerkClient, currentUser } from "@clerk/nextjs";

export async function GET(request: Request) {
  const user = await currentUser();

  return new Response(JSON.stringify(user));
}
