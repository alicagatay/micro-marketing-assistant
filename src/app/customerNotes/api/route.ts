import { PrismaClient } from "@prisma/client";

type requestBody = {
  customerID: string;
  customerNotes: string;
};

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  const body: requestBody = (await request.json()) as requestBody;

  const updatedNote = await prisma.customer.update({
    where: {
      id: parseInt(body.customerID),
    },
    data: {
      customerNotes: body.customerNotes,
    },
  });

  return Response.json(updatedNote);
}
