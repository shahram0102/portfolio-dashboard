import React from "react";
import SideBar from "../components/SideBar";

const LayOut = ({ children }) => {
  return (
    <div className="flex flex-row">
      <SideBar />
      {children}
    </div>
  );
};

export default LayOut;
