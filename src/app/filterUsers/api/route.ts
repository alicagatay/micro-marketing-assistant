import { type NextRequest } from "next/server";
import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

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
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && country !== null && company !== null) {
    company = company.split("+").join(" ");
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && country !== null && targetProduct !== null) {
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && company !== null && targetProduct !== null) {
    company = company.split("+").join(" ");
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (country !== null && company !== null && targetProduct !== null) {
    company = company.split("+").join(" ");
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && country !== null) {
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && company !== null) {
    company = company.split("+").join(" ");
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null && targetProduct !== null) {
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (country !== null && company !== null) {
    company = company.split("+").join(" ");
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (country !== null && targetProduct !== null) {
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (company !== null && targetProduct !== null) {
    company = company.split("+").join(" ");
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFiltered = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFiltered));
  } else if (city !== null) {
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
  } else if (country !== null) {
    const userCustomersFilteredByCountry = await prisma.customer.findMany({
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
    });
    return new Response(JSON.stringify(userCustomersFilteredByCountry));
  } else if (company !== null) {
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
  } else if (targetProduct !== null) {
    targetProduct = targetProduct.split("+").join(" ");
    const userCustomersFilteredByTargetProduct = await prisma.customer.findMany(
      {
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
      },
    );
    return new Response(JSON.stringify(userCustomersFilteredByTargetProduct));
  } else {
    const userCustomers = await prisma.customer.findMany({
      where: {
        ownerID: user?.id,
      },
    });
    return new Response(JSON.stringify(userCustomers));
  }
}
