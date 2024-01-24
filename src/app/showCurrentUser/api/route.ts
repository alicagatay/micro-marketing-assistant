import { clerkClient, currentUser } from "@clerk/nextjs";

export async function GET(request: Request) {
  const user = await currentUser();
  const users = await clerkClient.users.getUserList();

  return new Response(JSON.stringify(user));
}
