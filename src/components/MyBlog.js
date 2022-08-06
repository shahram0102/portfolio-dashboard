import React from "react";

import { useParams,useNavigate } from "react-router-dom";
import { mySelfData } from "../db/datausers";

import { FiChevronLeft } from "react-icons/fi";

const MyBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  console.log(id);
  const findItem = mySelfData.find(
    (item) => parseInt(item.id) === parseInt(id)
  );
  console.log(findItem);
  return (
    <section className="w-full bg-gray-100 py-4 pt-8 px-8 relative  flex justify-center">
      <div onClick={()=>navigate(-1)} className="w-10 h-10 bg-white rounded-full  absolute left-1 cursor-pointer flex justify-center items-center">
        <FiChevronLeft className="text-3xl text-purple-800" />
      </div>
      <div className="flex mt-10 md:w-1/2 flex-1 justify-center flex-col">
         <div className="w-64 h-64 md:w-80 md:h-80 object-cover border-2 m-auto border-zinc-800 rounded-full overflow-hidden">
            <img className="w-full h-full" src={findItem.image} />
            </div>

            <h3 className="text-purple-800 md:text-3xl text-xl font-medium mb-4">{findItem.title}</h3>

            <p className="text-gray-700 text-xl">
               {findItem.desc}
            </p>
      </div>
    </section>
  );
};

export default MyBlog;
