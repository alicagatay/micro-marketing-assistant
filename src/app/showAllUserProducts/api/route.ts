import { clerkClient, currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  const user = await currentUser();

  const allUserProducts = await prisma.product.findMany({
    where: {
      ownerID: user?.id,
    },
  });

  return new Response(JSON.stringify(allUserProducts));
}
