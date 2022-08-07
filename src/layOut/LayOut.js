import React from "react";
import SideBar from "../components/SideBar";

const LayOut = ({ children }) => {
  return (
    <main className="relative grid grid-cols-12 min-h-fit max-w-[1360px] m-auto">
      <SideBar />
      {children}
    </main>
  );
};

export default LayOut;
