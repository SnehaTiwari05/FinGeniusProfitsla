import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function SpotWrapper() {


  return (
    <div className="relative ">
      <Sidebar />
      <Navbar />
      {/* <div className="md:ml-auto  md:w-[93.3vw]  lg:w-[95.3vw] h-screen overflow-auto "> */}
      <div className="  md:ml-20 md:w-[95.3vw] h-screen overflow-auto ">
        <Outlet />
      </div>
    </div>
  );
}
