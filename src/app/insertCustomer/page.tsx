"use client";
import Link from "next/link";
import useSWRMutation from "swr/mutation";
import { currentUser } from "@clerk/nextjs";
import useSWR from "swr";

async function sendRequest(url: string, { arg }: { arg: object }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
}

function validateForm() {
  const name = (document.getElementById("fullName") as HTMLInputElement).value;
  const email = (document.getElementById("emailAddress") as HTMLInputElement)
    .value;
  const mobileNumber = (
    document.getElementById("mobileNumber") as HTMLInputElement
  ).value;
  const country = (document.getElementById("country") as HTMLInputElement)
    .value;
  const city = (document.getElementById("city") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement)
    .value;
  const targetProduct = (
    document.getElementById("targetProduct") as HTMLInputElement
  ).value;
  const customerSource = (
    document.getElementById("customerSource") as HTMLInputElement
  ).value;

  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  if (name.length > 256) {
    alert("Name must be less than 256 characters");
    return false;
  }

  if (email === "") {
    alert("Email must be filled out");
    return false;
  }

  if (email.length > 256) {
    alert("Email must be less than 256 characters");
    return false;
  }

  if (email.includes("@") === false || email.includes(".") === false) {
    alert("Email must be a valid email address");
    return false;
  }

  if (mobileNumber === "") {
    alert("Mobile Number must be filled out");
    return false;
  }

  if (mobileNumber.length > 256) {
    alert("Mobile Number must be less than 256 characters");
    return false;
  }

  if (country === "") {
    alert("Country must be filled out");
    return false;
  }

  if (country.length > 256) {
    alert("Country must be less than 256 characters");
    return false;
  }

  if (city === "") {
    alert("City must be filled out");
    return false;
  }

  if (city.length > 256) {
    alert("City must be less than 256 characters");
    return false;
  }

  if (company === "") {
    alert("Company must be filled out");
    return false;
  }

  if (company.length > 256) {
    alert("Company must be less than 256 characters");
    return false;
  }

  if (jobTitle === "") {
    alert("Job Title must be filled out");
    return false;
  }

  if (jobTitle.length > 256) {
    alert("Job Title must be less than 256 characters");
    return false;
  }

  if (targetProduct === "") {
    alert("Target Product must be filled out");
    return false;
  }

  if (targetProduct.length > 256) {
    alert("Target Product must be less than 256 characters");
    return false;
  }

  if (customerSource === "") {
    alert("Customer Source must be filled out");
    return false;
  }

  if (customerSource.length > 512) {
    alert("Customer Source must be less than 512 characters");
    return false;
  }

  return true;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const { trigger } = useSWRMutation("/insertCustomer/api", sendRequest);
  const { data, error, isLoading } = useSWR("/insertCustomer/api", fetcher) as {
    data: {
      can_create_customers: boolean;
    };
    error: boolean;
    isLoading: boolean;
  };

  async function submitData() {
    const name = (document.getElementById("fullName") as HTMLInputElement)
      .value;
    const email = (document.getElementById("emailAddress") as HTMLInputElement)
      .value;
    const mobileNumber = (
      document.getElementById("mobileNumber") as HTMLInputElement
    ).value;
    const country = (document.getElementById("country") as HTMLInputElement)
      .value;
    const city = (document.getElementById("city") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement)
      .value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement)
      .value;
    const targetProduct = (
      document.getElementById("targetProduct") as HTMLInputElement
    ).value;
    const customerSource = (
      document.getElementById("customerSource") as HTMLInputElement
    ).value;
    const customerNotes = "";

    if (validateForm()) {
      await trigger({
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        country: country,
        city: city,
        company: company,
        jobTitle: jobTitle,
        targetProduct: targetProduct,
        source: customerSource,
        customerNotes: customerNotes,
      });
      (document.getElementById("fullName") as HTMLInputElement).value = "";
      (document.getElementById("emailAddress") as HTMLInputElement).value = "";
      (document.getElementById("mobileNumber") as HTMLInputElement).value = "";
      (document.getElementById("country") as HTMLInputElement).value = "";
      (document.getElementById("city") as HTMLInputElement).value = "";
      (document.getElementById("company") as HTMLInputElement).value = "";
      (document.getElementById("jobTitle") as HTMLInputElement).value = "";
      (document.getElementById("targetProduct") as HTMLInputElement).value = "";
      (document.getElementById("customerSource") as HTMLInputElement).value =
        "";
    }
  }
  if (isLoading) return <div>loading...</div>;

  if (error) return <div>failed to load</div>;

  if (data.can_create_customers === false) {
    return (
      <div>
        <p>
          You are not authorized to view this page as you have exceeded your
          customer limit. Contact aliccagatay@gmail.com to increase your limit.
        </p>
      </div>
    );
  } else {
    return (
      <div className="mb-8 mt-6 flex w-full justify-center">
        <div className="flex w-6/12 flex-col space-y-12">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Insert Customer
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Add the details of the customer you want to insert into the
              system.
            </p>
          </div>

          <div>
            <label
              htmlFor="targetProduct"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Target Product
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="targetProduct"
                id="targetProduct"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the target product you are selling to your customer."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="company"
                id="company"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the company your customer works at."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="country"
                id="country"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the country where your customer is from."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the city where your customer is from."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the full name of your customer."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the email address of your customer."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the mobile number of your customer."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Job Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter the role of your customer."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="customerSource"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Source
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="customerSource"
                id="customerSource"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter where or how did you meet your customer.(Conference, they contacted you, LinkedIn, etc.)"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-32">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={submitData}
            >
              Insert Customer
            </button>
            <Link href="/">
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
