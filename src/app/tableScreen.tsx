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
const peopleList: Person[] = [
  {
    id: 1,
    createdAt: "2024-01-24T18:26:02.039Z",
    updatedAt: "2024-01-24T21:43:37.515Z",
    name: "Armin Quattlebaum",
    email: "arminquattlebaum@yahoo.com",
    mobileNumber: "+491522982503",
    country: "Germany",
    city: "Berlin",
    company: "Carter, Lee and White",
    jobTitle: "Business Analyst",
    targetProduct: "Black Masterbatch",
    ownerID: "user_2bJluASewFA4YvZbyxJVepmuzOn",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TableScreen() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
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
                {peopleList.map((person, personIdx) => (
                  <tr key={person.id}>
                    <td
                      className={classNames(
                        personIdx !== peopleList.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8",
                      )}
                    >
                      {person.name}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== peopleList.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell",
                      )}
                    >
                      {person.email}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== peopleList.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell",
                      )}
                    >
                      {person.mobileNumber}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== peopleList.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                      )}
                    >
                      {person.country}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== peopleList.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                      )}
                    >
                      {person.city}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== peopleList.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                      )}
                    >
                      {person.company}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== peopleList.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                      )}
                    >
                      {person.jobTitle}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== peopleList.length - 1
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
  );
}
