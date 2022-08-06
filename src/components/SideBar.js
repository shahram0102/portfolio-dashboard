import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaMicrophone } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsArrowRightCircleFill } from "react-icons/bs";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={` ${
        open
          ? "w-44 gap-4 shadow-md bg-purple-300 absolute   h-[200vh] shadow-white"
          : "w-16 gap-20 bg-white relative"
      } duration-200  p-4 pt-8 flex flex-col items-center justify-start z-10`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`${
          open ? "rotate-180" : "rotate-0"
        } duration-500 absolute top-2 cursor-pointer  -right-3 text-purple-700 text-2xl`}
      >
        <BsArrowRightCircleFill />
      </div>
      <div className="w-8 flex justify-center items-center h-8 rounded-lg bg-purple-800">
        <FaMicrophone className="text-white text-xl" />
      </div>
      <nav className="sticky top-0">
        <ul
          className={`${open ? "gap-2" : "gap-6"} flex items-center  flex-col `}
        >
          <li>
            <Link
              to="/"
              className={`p-2 gap-1 flex-col  text-gray-600 flex justify-start items-center font-bold`}
            >
              <AiOutlineHome
                className={`${
                  open ? "text-lg text-purple-800" : "text-2xl text-gray-700"
                }`}
              />
              {open && <span className="text-purple-800">home</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/sending-message"
              className={`p-2 gap-1 flex-col  text-gray-600 flex justify-start items-center font-bold relative`}
            >
              <AiOutlineMessage
                className={`${
                  open ? "text-lg text-purple-800" : "text-2xl text-gray-700"
                }`}
              />
              {open && <span className="text-purple-800">message</span>}
              <span className="w-1 rounded-full absolute h-1 bg-green-600 flex p-1 top-0 right-0"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`p-2 gap-1 flex-col  text-gray-600 flex justify-start items-center font-bold relative`}
            >
              <BsTelephone
                className={`${
                  open ? "text-lg text-purple-800" : "text-2xl text-gray-700"
                }`}
              />
              {open && <span className="text-purple-800">contacts</span>}
              <span className="w-1 rounded-full absolute h-1 bg-green-600 flex p-1 top-0 right-0"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/transfers"
              className={`p-2 gap-1 flex-col  text-gray-600 flex justify-start items-center font-bold`}
            >
              <BiTransferAlt
                className={`${
                  open ? "text-lg text-purple-800" : "text-2xl text-gray-700"
                }`}
              />
              {open && <span className="text-purple-800">shared</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/friends"
              className={`p-2 gap-1 flex-col  text-gray-600 flex justify-start items-center font-bold`}
            >
              <BsFillPeopleFill
                className={`${
                  open ? "text-lg text-purple-800" : "text-2xl text-gray-700"
                }`}
              />
              {open && <span className="text-purple-800">your friend</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/upload"
              className={`p-2 gap-1 flex-col  text-gray-600 flex justify-start items-center font-bold`}
            >
              <BsUpload
                className={`${
                  open ? "text-lg text-purple-800" : "text-2xl text-gray-700"
                }`}
              />
              {open && <span className="text-purple-800">upload</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/calender"
              className={`p-2 gap-1 flex-col  text-gray-600 flex justify-start items-center font-bold relative`}
            >
              <AiOutlineCalendar
                className={`${
                  open ? "text-lg text-purple-800" : "text-2xl text-gray-700"
                }`}
              />
              {open && <span className="text-purple-800">calender</span>}
              <span className="w-1 rounded-full absolute h-1 bg-green-600 flex p-1 top-0 right-0"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/setting"
              className={`p-2 gap-1 flex-col  text-gray-600 flex justify-start items-center font-bold`}
            >
              <FiSettings
                className={`${
                  open ? "text-lg text-purple-800" : "text-2xl text-gray-700"
                }`}
              />
              {open && <span className="text-purple-800">setting</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
