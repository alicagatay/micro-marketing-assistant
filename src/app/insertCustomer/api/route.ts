import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

type Customer = {
  name: string;
  email: string;
  mobileNumber: string;
  country: string;
  city: string;
  company: string;
  jobTitle: string;
  targetProduct: string;
  ownerID: string;
};

type requestBody = {
  name: string;
  email: string;
  mobileNumber: string;
  country: string;
  city: string;
  company: string;
  jobTitle: string;
  targetProduct: string;
  ownerID: string;
};

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const user = await currentUser();

  const body: requestBody = (await request.json()) as requestBody;

  if (user) {
    body.ownerID = user.id;
  }

  const customer: Customer = (await prisma.customer.create({
    data: {
      name: body.name,
      email: body.email,
      mobileNumber: body.mobileNumber,
      country: body.country,
      city: body.city,
      company: body.company,
      jobTitle: body.jobTitle,
      targetProduct: body.targetProduct,
      ownerID: body.ownerID,
    },
  })) as Customer;

  return Response.json(customer);
}
