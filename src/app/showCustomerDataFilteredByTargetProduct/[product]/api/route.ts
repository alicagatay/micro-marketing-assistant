import { clerkClient, currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { product: string } },
) {
  const prisma = new PrismaClient();
  const user = await currentUser();
  let searchedProduct = params.product;
  searchedProduct = searchedProduct.split("+").join(" ");

  const userCustomersFilteredByProduct = await prisma.customer.findMany({
    where: {
      AND: [
        {
          ownerID: user?.id,
        },
        {
          targetProduct: searchedProduct,
        },
      ],
    },
  });

  return new Response(JSON.stringify(userCustomersFilteredByProduct));
}
