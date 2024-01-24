import { clerkClient, currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { company: string } },
) {
  const prisma = new PrismaClient();
  const user = await currentUser();
  let company = params.company;
  company = company.split("+").join(" ");

  const userCustomersFilteredByCompany = await prisma.customer.findMany({
    where: {
      AND: [
        {
          ownerID: user?.id,
        },
        {
          company: company,
        },
      ],
    },
  });

  return new Response(JSON.stringify(userCustomersFilteredByCompany));
}
