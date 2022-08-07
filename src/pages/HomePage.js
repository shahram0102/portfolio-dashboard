import React from "react";

import { FiChevronRight } from "react-icons/fi";
import { dataHomePage, listTransfers, mySelfData } from "../db/datausers";

import { Link } from "react-router-dom";
import ChartAbilities from "../components/ChartAbilities";

const HomePage = () => {
  const dataTransfers = listTransfers.slice(1, 5);
  return (
    <section className=" bg-gray-100 col-span-10 sm:col-span-11 col-start-3 sm:col-start-2 w-full flex flex-col">
      <div className="w-full px-4 flex flex-col gap-1 pb-2 border-b-2">
        <h2 className="text-3xl text-zinc-800 font-medium">Hi Shahram</h2>
        <h3 className="text-gray-500 text-xl">
          <span className="font-bold text-purple-700 text-2xl">
            My Personal
          </span>{" "}
          Dashboard
        </h3>
      </div>

      <div className="flex p-2 flex-col gap-4 md:flex-row">
        <div className="grid grid-cols-1 md:w-1/2 sm:grid-cols-2 gap-4">
          {dataHomePage.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-lg  bg-white py-2 px-3 flex items-center justify-between"
              >
                <div className="flex flex-col gap-1">
                  <h6 className="text-lg font-medium text-gray-500">
                    {item.title}
                  </h6>
                  <span className="text-2xl font-semibold text-zinc-800">
                    {item.value}
                  </span>
                </div>
                <div className="w-14 h-14 bg-purple-700 flex justify-center items-center rounded-full shadow-lg shadow-white">
                  {item.icon}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:w-1/2 bg-white rounded-lg p-4">
          <h2 className="text-2xl font-medium text-purple-700">
            Information About Me
          </h2>
          <div className="flex flex-col">
            {mySelfData.map((item) => {
              return (
                <Link key={item.id} to={`/my-blog/${item.id}`} id={item.id}>
                  <div className="flex  gap-2 items-center w-full justify-between border-b pb-2 border-gray-800">
                    <h3 className="text-zinc-800 text-lg hover:text-purple-800 duration-300">
                      {item.title}
                    </h3>
                    <FiChevronRight />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex px-4 flex-col md:flex-row py-2 gap-2">
        <div className="px-4 py-2 w-full md:w-3/4 rounded-md bg-white">
          <h3 className="text-xl text-purple-700 font-semibold mb-2">
            My Transfers
          </h3>
          <div className="flex flex-col gap-4">
            {dataTransfers.map((item) => {
              return (
                <div
                  key={item.id}
                  className="px-2 flex border-b-2 border-purple-800 pb-1 rounded-r-lg"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img className="w-full h-full" src={item.image} />
                  </div>
                  <div className="flex flex-col ml-2">
                    <span className="text-sm sm:text-lg lg:text-2xl font-semibold text-purple-800">
                      {item.type === "Income"
                        ? `From ${item.person}`
                        : `To ${item.person}`}
                    </span>
                    <div className="flex gap-1  text-sm sm:text-base lg:text-xl text-gray-600">
                      <span>{item.date},</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                  <span className="ml-auto w-16 h-10 py-1 px-3 bg-purple-400 flex justify-center items-center rounded-full text-purple-800 text-xs sm:text-sm sm:w-20 lg:text-lg font-semibold">
                    {item.value} $
                  </span>
                </div>
              );
            })}
            <Link
              to="/transfers"
              className="ml-auto mt-2 flex gap-1 text-purple-800 items-center text-xl"
            >
              <span className="font-medium">View all</span>
              <FiChevronRight className="text-3xl" />
            </Link>
          </div>
        </div>
        <ChartAbilities />
      </div>
    </section>
  );
};

export default HomePage;
