import { type NextRequest } from "next/server";
import { clerkClient, currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();
  const user = await currentUser();
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get("city");
  const country = searchParams.get("country");
  const company = searchParams.get("company");
  const targetProduct = searchParams.get("targetProduct");
  return new Response(
    JSON.stringify({ city, country, company, targetProduct }),
  );
}
