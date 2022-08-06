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

  return (
    <section className="bg-gray-100 w-full py-2 px-4">
      <div>
        <h2> List Transfers</h2>
        <select value={valueOption} onChange={changeHandler}>
          <option value={"All"}>All</option>
          <option value={"Income"}>Income</option>
          <option value={"Expense"}>Expense</option>
        </select>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-2 px-5 gap-4">
        {transferFilter.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                item.type === "Income" ? "bg-green-400" : "bg-red-500"
              } px-2 flex items-center  py-4 rounded-lg`}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img className="w-full h-full" src={item.image} />
              </div>
              <div className="flex flex-col ml-auto">
                <span className="text-xl font-semibold text-purple-800">
                  {item.type === "Income"
                    ? `From ${item.person}`
                    : `To ${item.person}`}
                </span>
                <div className="flex gap-1 text-lg text-gray-600">
                  <span>{item.date},</span>
                  <span>{item.time}</span>
                </div>
                <span className="py-1 h-min px-3 bg-purple-400 flex justify-center items-center rounded-full text-purple-800 text-lg font-semibold">
                  {item.value}
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
