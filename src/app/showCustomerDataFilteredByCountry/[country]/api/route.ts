import { clerkClient, currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { country: string } },
) {
  const prisma = new PrismaClient();
  const user = await currentUser();
  const country = params.country;

  const userCustomersFilteredByCountry = await prisma.customer.findMany({
    where: {
      AND: [
        {
          ownerID: user?.id,
        },
        {
          country: country,
        },
      ],
    },
  });

  return new Response(JSON.stringify(userCustomersFilteredByCountry));
}
