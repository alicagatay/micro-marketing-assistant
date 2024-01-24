import { clerkClient, currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { city: string } },
) {
  const prisma = new PrismaClient();
  const user = await currentUser();
  const city = params.city;

  const userCustomersFilteredByCity = await prisma.customer.findMany({
    where: {
      AND: [
        {
          ownerID: user?.id,
        },
        {
          city: city,
        },
      ],
    },
  });

  return new Response(JSON.stringify(userCustomersFilteredByCity));
}
