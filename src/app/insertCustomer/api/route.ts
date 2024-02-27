import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
import { clerkClient } from "@clerk/nextjs";

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
  source: string;
  customerNotes: string;
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
  source: string;
  customerNotes: string;
};

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const user = await currentUser();

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  const userId = user.id;
  const userPrivateMetadata = (await clerkClient.users.getUser(userId))
    .privateMetadata;

  const customerCount = await prisma.customer.count({
    where: {
      ownerID: userId,
    },
  });

  const canCreateCustomers =
    !userPrivateMetadata.is_test_account ||
    (userPrivateMetadata.is_test_account === true && customerCount <= 5);

  return new Response(
    JSON.stringify({ can_create_customers: canCreateCustomers }),
  );
}
export async function POST(request: Request) {
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
      source: body.source,
      customerNotes: "",
    },
  })) as Customer;

  return Response.json(customer);
}
