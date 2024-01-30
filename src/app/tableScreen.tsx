"use client";
import useSWR from "swr";
import { useState } from "react";

type Person = {
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

function saveFilterData() {
  const countryFilter = document.getElementById(
    "countryFilter",
  ) as HTMLInputElement;
  const cityFilter = document.getElementById("cityFilter") as HTMLInputElement;
  const companyFilter = document.getElementById(
    "companyFilter",
  ) as HTMLInputElement;
  const targetProductFilter = document.getElementById(
    "targetProductFilter",
  ) as HTMLInputElement;

  let API_URL = "/filterUsers/api";

  if (
    countryFilter.value &&
    !cityFilter.value &&
    !companyFilter.value &&
    !targetProductFilter.value
  ) {
    API_URL += `?country=${countryFilter.value}`;
  }

  if (
    !countryFilter.value &&
    cityFilter.value &&
    !companyFilter.value &&
    !targetProductFilter.value
  ) {
    API_URL += `?city=${cityFilter.value}`;
  }

  if (
    !countryFilter.value &&
    !cityFilter.value &&
    companyFilter.value &&
    !targetProductFilter.value
  ) {
    let value = companyFilter.value;
    value = value.split(" ").join("+");
    API_URL += `?company=${value}`;
  }

  if (
    !countryFilter.value &&
    !cityFilter.value &&
    !companyFilter.value &&
    targetProductFilter.value
  ) {
    let value = targetProductFilter.value;
    value = value.split(" ").join("+");
    API_URL += `?targetProduct=${value}`;
  }

  if (
    countryFilter.value &&
    cityFilter.value &&
    !companyFilter.value &&
    !targetProductFilter.value
  ) {
    API_URL += `?country=${countryFilter.value}&city=${cityFilter.value}`;
  }

  if (
    countryFilter.value &&
    !cityFilter.value &&
    companyFilter.value &&
    !targetProductFilter.value
  ) {
    let value = companyFilter.value;
    value = value.split(" ").join("+");
    API_URL += `?country=${countryFilter.value}&company=${value}`;
  }

  if (
    countryFilter.value &&
    !cityFilter.value &&
    !companyFilter.value &&
    targetProductFilter.value
  ) {
    let value = targetProductFilter.value;
    value = value.split(" ").join("+");
    API_URL += `?country=${countryFilter.value}&targetProduct=${value}`;
  }

  if (
    !countryFilter.value &&
    cityFilter.value &&
    companyFilter.value &&
    !targetProductFilter.value
  ) {
    let value = companyFilter.value;
    value = value.split(" ").join("+");
    API_URL += `?city=${cityFilter.value}&company=${value}`;
  }

  if (
    !countryFilter.value &&
    cityFilter.value &&
    !companyFilter.value &&
    targetProductFilter.value
  ) {
    let value = targetProductFilter.value;
    value = value.split(" ").join("+");
    API_URL += `?city=${cityFilter.value}&targetProduct=${value}`;
  }

  if (
    !countryFilter.value &&
    !cityFilter.value &&
    companyFilter.value &&
    targetProductFilter.value
  ) {
    let value1 = companyFilter.value;
    value1 = value1.split(" ").join("+");

    let value2 = targetProductFilter.value;
    value2 = value2.split(" ").join("+");
    API_URL += `?company=${value1}&targetProduct=${value2}`;
  }

  if (
    countryFilter.value &&
    cityFilter.value &&
    companyFilter.value &&
    !targetProductFilter.value
  ) {
    let value = companyFilter.value;
    value = value.split(" ").join("+");
    API_URL += `?country=${countryFilter.value}&city=${cityFilter.value}&company=${value}`;
  }

  if (
    countryFilter.value &&
    cityFilter.value &&
    !companyFilter.value &&
    targetProductFilter.value
  ) {
    let value = targetProductFilter.value;
    value = value.split(" ").join("+");
    API_URL += `?country=${countryFilter.value}&city=${cityFilter.value}&targetProduct=${value}`;
  }

  if (
    countryFilter.value &&
    !cityFilter.value &&
    companyFilter.value &&
    targetProductFilter.value
  ) {
    let value1 = companyFilter.value;
    value1 = value1.split(" ").join("+");

    let value2 = targetProductFilter.value;
    value2 = value2.split(" ").join("+");
    API_URL += `?country=${countryFilter.value}&company=${value1}&targetProduct=${value2}`;
  }

  if (
    !countryFilter.value &&
    cityFilter.value &&
    companyFilter.value &&
    targetProductFilter.value
  ) {
    let value1 = companyFilter.value;
    value1 = value1.split(" ").join("+");

    let value2 = targetProductFilter.value;
    value2 = value2.split(" ").join("+");
    API_URL += `?city=${cityFilter.value}&company=${value1}&targetProduct=${value2}`;
  }

  if (
    countryFilter.value &&
    cityFilter.value &&
    companyFilter.value &&
    targetProductFilter.value
  ) {
    let value1 = companyFilter.value;
    value1 = value1.split(" ").join("+");

    let value2 = targetProductFilter.value;
    value2 = value2.split(" ").join("+");
    API_URL += `?country=${countryFilter.value}&city=${cityFilter.value}&company=${value1}&targetProduct=${value2}`;
  }

  const filterData = API_URL;

  return filterData;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TableScreen() {
  const [filterData, setFilterData] = useState("/filterUsers/api");
  const { data, error, isLoading } = useSWR(filterData, fetcher) as {
    data: Person[];
    error: boolean;
    isLoading: boolean;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-1/6 flex-row place-content-evenly">
        <input
          className="h-1/2 w-1/5 place-self-center border-2 border-black text-center text-[20px]"
          type="text"
          placeholder="Country"
          id="countryFilter"
        />

        <input
          className="h-1/2 w-1/5 place-self-center border-2 border-black text-center text-[20px]"
          type="text"
          placeholder="City"
          id="cityFilter"
        />

        <input
          className="h-1/2 w-1/5 place-self-center border-2 border-black text-center text-[20px]"
          type="text"
          placeholder="Company"
          id="companyFilter"
        />

        <input
          className="h-1/2 w-1/5 place-self-center border-2 border-black text-center text-[20px]"
          type="text"
          placeholder="Target Product"
          id="targetProductFilter"
        />
      </div>

      <div className="flex flex-row place-content-evenly">
        <input
          className="h-[40px] w-[180px] place-self-center border-2 border-black text-center text-[20px]"
          type="button"
          value="Filter Customers"
          onClick={() => {
            const filterData = saveFilterData();
            setFilterData(filterData);
          }}
        />
        <input
          className="h-[40px] w-[160px] place-self-center border-2 border-black text-center text-[20px]"
          type="button"
          value="Add Customer"
          onClick={() => {
            console.log("Add customer button pressed.");
          }}
        />
      </div>

      <div className="h-5/6 overflow-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Mobile Number
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Job Title
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Target Product
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((person, personIdx) => (
                    <tr key={person.id}>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8",
                        )}
                      >
                        {person.name}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell",
                        )}
                      >
                        {person.email}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell",
                        )}
                      >
                        {person.mobileNumber}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                        )}
                      >
                        {person.country}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                        )}
                      >
                        {person.city}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                        )}
                      >
                        {person.company}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                        )}
                      >
                        {person.jobTitle}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                        )}
                      >
                        {person.targetProduct}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
