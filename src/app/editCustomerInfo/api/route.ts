import { PrismaClient } from "@prisma/client";

type Customer = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  mobileNumber: string;
  country: string;
  city: string;
  company: string;
  jobTitle: string;
  targetProduct: string;
  ownerID: string;
  source: string;
};

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  const body = (await request.json()) as Customer;

  const updatedCustomer = await prisma.customer.update({
    where: {
      id: parseInt(body.id),
    },
    data: {
      name: body.name,
      email: body.email,
      mobileNumber: body.mobileNumber,
      country: body.country,
      city: body.city,
      company: body.company,
      jobTitle: body.jobTitle,
      targetProduct: body.targetProduct,
      source: body.source,
    },
  });

  return Response.json(updatedCustomer);
}
