"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";

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

  async function submitData() {
    console.log("Button Clicked");

    await trigger({
      customerID: params.customerID,
      customerNotes: (
        document.getElementById("customerNotes") as HTMLTextAreaElement
      ).value,
    });
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
      <div className="flex h-full min-h-screen flex-col items-center justify-center">
        <textarea
          id="customerNotes"
          className="h-[400px] w-[800px] rounded-md border-gray-300 bg-gray-600 p-4 text-base text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={customerNotes}
          onChange={(e) => {
            setCustomerNotes(e.target.value);
          }}
        />
        <button
          type="submit"
          className="mt-4 h-[80px] w-[150px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={submitData}
        >
          Edit Customer Note
        </button>
      </div>
    );
  }
}
