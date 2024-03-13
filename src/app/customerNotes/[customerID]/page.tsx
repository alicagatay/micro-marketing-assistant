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
  customerNotes: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page({ params }: { params: { customerID: number } }) {
  const { trigger } = useSWRMutation("/customerNotes/api", sendRequest);
  const { data, error, isLoading } = useSWR(
    `/filterUsers/api?customerID=${params.customerID}`,
    fetcher,
  ) as {
    data: Customer;
    error: boolean;
    isLoading: boolean;
  };

  function validateNote() {
    const note = (
      document.getElementById("customerNotes") as HTMLTextAreaElement
    ).value;
    if (note.length > 2048) {
      alert("Note size is too large");
      return false;
    }
    return true;
  }

  async function submitData() {
    if (validateNote()) {
      await trigger({
        customerID: params.customerID,
        customerNotes: (
          document.getElementById("customerNotes") as HTMLTextAreaElement
        ).value,
      });
    }
  }

  const [customerNotes, setCustomerNotes] = useState("");

  useEffect(() => {
    if (data) {
      setCustomerNotes(data.customerNotes);
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
      <div className="flex h-full min-h-screen flex-col items-center justify-center space-y-12">
        <textarea
          id="customerNotes"
          className="h-[400px] w-[800px] rounded-md border-gray-600 bg-gray-600 p-4 text-base text-xl text-white shadow-sm focus:border-gray-600 focus:ring-gray-600"
          value={customerNotes}
          onChange={(e) => {
            setCustomerNotes(e.target.value);
          }}
        />
        <div className="flex flex-row space-x-24">
          <button
            type="submit"
            className="mt-4 h-[80px] w-[150px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={submitData}
          >
            Edit Customer Note
          </button>

          <Link href="/">
            <button
              type="button"
              className="mt-4 h-[80px] w-[150px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go Back
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
