import React, { useEffect, useState } from "react";
import { listTransfers } from "../db/datausers";

const TransferPage = () => {
  const [transferFilter, setTransferFilter] = useState([]);
  const [valueOption, setValueOption] = useState("All");

  const changeHandler = (e) => {
    setValueOption(e.target.value);
    filteredTransferdFu(e.target.value);
  };

  const filteredTransferdFu = (value) => {
    switch (value) {
      case "Income": {
        const FilteredTransferd = listTransfers.filter(
          (item) => item.type === "Income"
        );
        return setTransferFilter(FilteredTransferd);
      }

      case "Expense": {
        const FilteredTransferd = listTransfers.filter(
          (item) => item.type === "Expense"
        );
        return setTransferFilter(FilteredTransferd);
      }

      default:
        return setTransferFilter(listTransfers);
    }
  };

  useEffect(() => {
    setTransferFilter(listTransfers);
  }, []);

  console.log(transferFilter);

  return (
    <section className="bg-gray-100 w-full py-2 px-4 col-span-10 min-h-screen sm:col-span-11 col-start-3 sm:col-start-2">
      <div className="flex justify-between">
        <h2> List Transfers</h2>
        <select className="py-2 px-4 mr-6 bg-inherit border-purple-700 border rounded-md text-purple-800 text-xl font-bold " value={valueOption} onChange={changeHandler}>
          <option value={"All"}>All</option>
          <option value={"Income"}>Income</option>
          <option value={"Expense"}>Expense</option>
        </select>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3  py-2 px-5 gap-4">
        {transferFilter.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                item.type === "Income" ? "bg-green-400" : "bg-red-500"
              } px-2 flex items-center  py-4 rounded-lg`}
            >
              <div className=" h-24 rounded-full w-1/3 overflow-hidden">
                <img className="w-24 rounded-full h-24 md:w-full md:h-full" src={item.image} />
              </div>
              <div className="flex flex-col gap-2  justify-center items-end w-2/3 ml-auto">
                <span className="text-xl text-center font-semibold text-white">
                  {item.type === "Income"
                    ? `transfer From ${item.person}`
                    : `transfer To ${item.person}`}
                </span>
                <div className="flex gap-1  text-lg text-white">
                  <span>{item.date},</span>
                  <span>{item.time}</span>
                </div>
                <span className={`${item.type==="Income"?"bg-green-900 text-green-400":"bg-red-900 text-red-500"} py-1 h-min px-3 flex justify-center items-center rounded-full  text-lg font-semibold`}>
                  {item.value} $
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TransferPage;
