import { type NextRequest } from "next/server";
import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

type Customer = {
  id: number;
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
};

type FilteredCustomerList = Customer[];

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();
  const user = await currentUser();
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get("city");
  const country = searchParams.get("country");
  let company = searchParams.get("company");
  let targetProduct = searchParams.get("targetProduct");

  if (
    city !== null &&
    country !== null &&
    company !== null &&
    targetProduct !== null
  ) {
    company = company.split("+").join(" ");
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              city: city,
            },
            {
              country: country,
            },
            {
              company: company,
            },
            {
              targetProduct: targetProduct,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && country !== null && company !== null) {
    company = company.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              city: city,
            },
            {
              country: country,
            },
            {
              company: company,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && country !== null && targetProduct !== null) {
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              city: city,
            },
            {
              country: country,
            },
            {
              targetProduct: targetProduct,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && company !== null && targetProduct !== null) {
    company = company.split("+").join(" ");
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              city: city,
            },
            {
              company: company,
            },
            {
              targetProduct: targetProduct,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (country !== null && company !== null && targetProduct !== null) {
    company = company.split("+").join(" ");
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              country: country,
            },
            {
              company: company,
            },
            {
              targetProduct: targetProduct,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && country !== null) {
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              city: city,
            },
            {
              country: country,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && company !== null) {
    company = company.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              city: city,
            },
            {
              company: company,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && targetProduct !== null) {
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              city: city,
            },
            {
              targetProduct: targetProduct,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (country !== null && company !== null) {
    company = company.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              country: country,
            },
            {
              company: company,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (country !== null && targetProduct !== null) {
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              country: country,
            },
            {
              targetProduct: targetProduct,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (company !== null && targetProduct !== null) {
    company = company.split("+").join(" ");
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              company: company,
            },
            {
              targetProduct: targetProduct,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null) {
    const userCustomersFilteredByCity: FilteredCustomerList =
      (await prisma.customer.findMany({
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
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFilteredByCity));
  } else if (country !== null) {
    const userCustomersFilteredByCountry: FilteredCustomerList =
      (await prisma.customer.findMany({
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
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFilteredByCountry));
  } else if (company !== null) {
    company = company.split("+").join(" ");
    const userCustomersFilteredByCompany: FilteredCustomerList =
      (await prisma.customer.findMany({
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
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFilteredByCompany));
  } else if (targetProduct !== null) {
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFilteredByTargetProduct: FilteredCustomerList =
      (await prisma.customer.findMany({
        where: {
          AND: [
            {
              ownerID: user?.id,
            },
            {
              targetProduct: targetProduct,
            },
          ],
        },
      })) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomersFilteredByTargetProduct));
  } else {
    const userCustomers: FilteredCustomerList = (await prisma.customer.findMany(
      {
        where: {
          ownerID: user?.id,
        },
      },
    )) as FilteredCustomerList;
    return new Response(JSON.stringify(userCustomers));
  }
}
