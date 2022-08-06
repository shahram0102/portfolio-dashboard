import React from "react";

import { FiChevronRight } from "react-icons/fi";
import { dataHomePage, mySelfData } from "../db/datausers";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className=" bg-gray-100 w-full flex flex-col">
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
        <div className="w-full grid grid-cols-1 md:w-1/2 sm:grid-cols-2 gap-4">
          {dataHomePage.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-lg  bg-white py-2 px-3 flex items-center justify-between"
              >
                <div className="flex flex-col gap-1">
                  <h6 className="text-xl font-medium text-gray-500">
                    {item.title}
                  </h6>
                  <span className="text-4xl font-semibold text-zinc-800">
                    {item.value}
                  </span>
                </div>
                <div className="w-20 h-20 bg-purple-700 flex justify-center items-center rounded-full shadow-lg shadow-white">
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
                    <h3 className="text-zinc-800 text-lg hover:text-purple-800 duration-300" >{item.title}</h3>
                    <FiChevronRight />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
