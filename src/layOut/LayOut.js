import React from "react";
import SideBar from "../components/SideBar";

const LayOut = ({ children }) => {
  return (
    <div className="flex flex-row max-w-[1360px] m-auto">
      <SideBar />
      {children}
    </div>
  );
};

export default LayOut;
