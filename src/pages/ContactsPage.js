import React, { useState } from "react";

import { Link, Routes, Route, useParams } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { BsTelephone } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsUpload } from "react-icons/bs";
import { dataUsers } from "../db/datausers";

const ContactsPage = () => {
  return (
    <section className="bg-gray-200 w-full px-2">
      <div className="">
        <header className="flex py-1 mb-5 bg-gray-100 px-3 items-center justify-between w-full border-b border-gray-400 pb-4">
          <div className="w-1/3">
            <h3 className="font-bold text-lg">Contacts</h3>
          </div>
          <div className="flex flex-col gap-1 w-2/3 max-w-screen-sm">
            <span className="text-gray-500">search for contact</span>
            <label className="flex gap-2 w-full">
              <AiOutlineSearch className="text-2xl" />
              <input
                className="bg-transparent flex-1 outline-none placeholder:text-zinc-800"
                placeholder="Name,email or phone number"
              />
            </label>
          </div>
        </header>
        <div className="flex flex-col gap-10 md:flex-row md:gap-20 ">
          <div className="md:w-1/2 w-full  px-2 py-1 flex flex-col gap-5">
            {dataUsers.map((user) => {
              return (
                <div key={user.id} className="flex">
                  <div className="flex w-2/3 gap-1">
                    <div className="w-12 h-12 relative">
                      <img
                        className="w-full h-full rounded-lg"
                        src={user.image}
                      />
                      <span
                        className={`${
                          user.isActive ? "bg-green-600" : " bg-orange-400"
                        } w-1 rounded-full absolute h-1 flex p-1 bottom-0 right-0`}
                      ></span>
                    </div>
                    <div className="flex-1 ">
                      <Link to={`${user.name}`}>
                        <h4 className="text-zinc-800 font-medium">
                          {user.name}
                        </h4>
                      </Link>
                      <span className="text-gray-500">{user.job}</span>
                    </div>
                  </div>
                  <div className="flex w-1/3 justify-end items-center gap-2">
                    <span className="w-8 h-8 flex justify-center items-center bg-white rounded-lg">
                      <TiMessages className="text-lg text-gray-500" />
                    </span>
                    <span className="w-8 h-8 flex justify-center items-center bg-white rounded-lg">
                      <BsTelephone className="text-lg text-gray-500" />
                    </span>
                    <span className="w-8 h-8 flex justify-center items-center bg-white rounded-lg">
                      <FiMoreHorizontal className="text-lg text-gray-500" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <Routes>
            <Route path=":name" element={<UserDetailContact />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;

const UserDetailContact = () => {
  const [open, setOpen] = useState(false);
  const { name } = useParams();
  console.log(name);
  const user = dataUsers.find((user) => user.name === name);
  console.log(user);
  return (
    <div className=" py-2 bg-white rounded-md lg:w-1/2 shadow-md flex flex-1 flex-col px-4">
      <div className="flex gap-3 justify-center">
        <div className="w-1/4 h-24 md:w-2/4 lg:h-44 rounded-xl overflow-hidden">
          <img className="w-full h-full" src={user.image} />
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold lg:text-4xl">{user.name}</h3>
            <span className="text-gray-500 lg:text-2xl">{user.job}</span>
          </div>
          <div className="flex mt-2 items-center gap-4 flex-col">
            <button className="bg-purple-700 order-2 rounded-md py-1 px-2 flex justify-center items-center gap-1 text-white font-semibold lg:py-2 lg:px-4 lg:text-xl lg:w-full">
              <TiMessages /> Message
            </button>
            <div className="flex gap-4 lg:order-1 lg:justify-between lg:w-1/2">
              <span className="bg-white lg:text-2xl  cursor-pointer p-1 rounded-md text-lg">
                <BsTelephone />
              </span>
              <span className="bg-white lg:text-2xl cursor-pointer p-1 rounded-md text-lg">
                <BsUpload />
              </span>
              <span
                onClick={() => setOpen(!open)}
                className="bg-white lg:text-2xl cursor-pointer p-1 rounded-md text-lg"
              >
                <FiMoreHorizontal />
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="flex flex-col h-auto gap-2 mt-2">
          <div className="lg:text-2xl">
            <span className="text-gray-500 lg:text-xl">relation:</span>
            {user.relation}
          </div>
          <div className="flex gap-5 border-t pt-1 border-zinc-800">
            <span className="text-gray-500 w-10 mr-3 lg:text-xl lg:mr-5">
              Bio:{" "}
            </span>
            <p className="text-zinc-800 text-lg lg:text-xl">{user.bio}</p>
          </div>
          <div className="flex gap-5 border-t pt-1 border-zinc-800">
            <span className="text-gray-500 w-10 lg:text-xl lg:mr-4">
              email:{" "}
            </span>
            <p className="text-zinc-800 text-lg lg:text-2xl">{user.email}</p>
          </div>
          <div className="flex gap-5 border-t pt-1 border-zinc-800">
            <span className="text-gray-500 w-10 lg:text-xl lg:mr-4">
              number:{" "}
            </span>
            <p className="text-zinc-800 text-lg lg:text-2xl">{user.number}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { UserDetailContact };
