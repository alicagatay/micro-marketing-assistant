"use client";
import Link from "next/link";
import useSWRMutation from "swr/mutation";

async function sendRequest(url: string, { arg }: { arg: object }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
}

export default function Page() {
  const { trigger } = useSWRMutation("/insertCustomer/api", sendRequest);

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
    await trigger({
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      country: country,
      city: city,
      company: company,
      jobTitle: jobTitle,
      targetProduct: targetProduct,
    });
  }
  return (
    <div className="mb-8 mt-6 flex w-full justify-center">
      <div className="flex w-6/12 flex-col space-y-12">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Insert Customer
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Add the details of the customer you want to insert into the system.
          </p>
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
