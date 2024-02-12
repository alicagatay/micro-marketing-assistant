"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import Link from "next/link";

async function sendRequest(url: string, { arg }: { arg: object }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
}

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
  source: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page({ params }: { params: { customerID: number } }) {
  const { trigger } = useSWRMutation("/editCustomerInfo/api", sendRequest);
  const { data, error, isLoading } = useSWR(
    `/filterUsers/api?customerID=${params.customerID}`,
    fetcher,
  ) as {
    data: Customer;
    error: boolean;
    isLoading: boolean;
  };

  async function submitData() {
    console.log("Button Clicked");

    await trigger({
      id: params.customerID,
      name: (document.getElementById("fullName") as HTMLInputElement).value,
      email: (document.getElementById("emailAddress") as HTMLInputElement)
        .value,
      mobileNumber: (
        document.getElementById("mobileNumber") as HTMLInputElement
      ).value,
      country: (document.getElementById("country") as HTMLInputElement).value,
      city: (document.getElementById("city") as HTMLInputElement).value,
      company: (document.getElementById("company") as HTMLInputElement).value,
      jobTitle: (document.getElementById("jobTitle") as HTMLInputElement).value,
      targetProduct: (
        document.getElementById("targetProduct") as HTMLInputElement
      ).value,
      source: (document.getElementById("customerSource") as HTMLInputElement)
        .value,
    });
  }

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerMobileNumber, setCustomerMobileNumber] = useState("");
  const [customerCountry, setCustomerCountry] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerCompany, setCustomerCompany] = useState("");
  const [customerJobTitle, setCustomerJobTitle] = useState("");
  const [customerTargetProduct, setCustomerTargetProduct] = useState("");
  const [customerSource, setCustomerSource] = useState("");

  useEffect(() => {
    if (data) {
      setCustomerName(data.name);
      setCustomerEmail(data.email);
      setCustomerMobileNumber(data.mobileNumber);
      setCustomerCountry(data.country);
      setCustomerCity(data.city);
      setCustomerCompany(data.company);
      setCustomerJobTitle(data.jobTitle);
      setCustomerTargetProduct(data.targetProduct);
      setCustomerSource(data.source);
    }
  }, [data]);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    return (
      <div className="mb-8 mt-6 flex w-full justify-center">
        <div className="flex w-6/12 flex-col space-y-12">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Edit Customer
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Edit the details of your customer.
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
                value={customerTargetProduct}
                onChange={(e) => {
                  setCustomerTargetProduct(e.target.value);
                }}
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
                value={customerCompany}
                onChange={(e) => {
                  setCustomerCompany(e.target.value);
                }}
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
                value={customerCountry}
                onChange={(e) => {
                  setCustomerCountry(e.target.value);
                }}
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
                value={customerCity}
                onChange={(e) => {
                  setCustomerCity(e.target.value);
                }}
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
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                }}
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
                value={customerEmail}
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
                }}
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
                value={customerMobileNumber}
                onChange={(e) => {
                  setCustomerMobileNumber(e.target.value);
                }}
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
                value={customerJobTitle}
                onChange={(e) => {
                  setCustomerJobTitle(e.target.value);
                }}
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
                value={customerSource}
                onChange={(e) => {
                  setCustomerSource(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row space-x-32">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={submitData}
            >
              Edit Customer Information
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
