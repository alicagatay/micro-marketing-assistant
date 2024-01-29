"use client";

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

  if (countryFilter.value) {
    API_URL += `?country=${countryFilter.value}`;
  }

  if (cityFilter.value) {
    API_URL += `&city=${cityFilter.value}`;
  }

  if (companyFilter.value) {
    API_URL += `&company=${companyFilter.value}`;
  }

  if (targetProductFilter.value) {
    API_URL += `&targetProduct=${targetProductFilter.value}`;
  }
  const filterData = {
    API_URL: API_URL,
  };

  sessionStorage.setItem("filterData", JSON.stringify(filterData));
  countryFilter.value = "";
  cityFilter.value = "";
  companyFilter.value = "";
  targetProductFilter.value = "";

  console.log(sessionStorage.getItem("filterData"));
}

export default function FilterScreen() {
  return (
    <div className="flex h-1/6 flex-row space-x-6 px-8">
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

      <input
        className="h-1/4 w-[120px] place-self-center border-2 border-black text-center text-[20px]"
        type="button"
        value="Filter"
        onClick={saveFilterData}
      />
    </div>
  );
}
