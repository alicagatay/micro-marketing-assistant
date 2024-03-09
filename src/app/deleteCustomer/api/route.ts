import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
import { clerkClient } from "@clerk/nextjs";

type RequestBody = {
  id: string;
};

const prisma = new PrismaClient();

export async function DELETE(request: Request, response: Response) {
  const body: RequestBody = (await request.json()) as RequestBody;

  const id = Number(body);
  console.log(body);

  await prisma.customer.delete({
    where: {
      id: id,
    },
  });

  return new Response(JSON.stringify({ success: true }));
}
