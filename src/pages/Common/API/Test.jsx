// import React, { useState } from "react";
// import { AiOutlineApi } from "react-icons/ai";
// import { FaFileExport } from "react-icons/fa";
// import { LiaRobotSolid } from "react-icons/lia";
// import { MdKeyboardArrowRight, MdOutlineDashboard } from "react-icons/md";
// import { Link, Outlet } from "react-router-dom";
// import Sidebarcontent from "./Sidebarcontent";
// import { useLocation } from "react-router-dom";
// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isRotated, setIsRotated] = useState(true);
//   const [panelname, setPanelname] = useState();
//   let location = useLocation();

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//     setIsRotated(!isRotated);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     setIsRotated(false);
//   };

//   const handlePanelClick = (name) => {
//     setPanelname(name);
//     setIsOpen(!isOpen);
//     setIsRotated(!isRotated);
//   };

//   React.useEffect(() => {
//     // Google Analytics
//     setIsOpen(true);
//     console.log("send", location.pathname);
//   }, [location]);
//   return (
//     <>
//       <div
//         className={`flex md:flex-col flex-row fixed left-0 right-0 bottom-0  md:h-screen h-[75px] bg-[#3b3b3b] md:w-[90px] w-screen z-50`}
//       >
//         <ul className="md:space-y-5 my-3 text-sm h-screen flex md:flex-col flex-row w-full gap-3 p-2 mt-16">
//           <li
//             className={` ${
//               location.pathname == "/dashboard"
//                 ? `rounded-xl hover:md:shadow-[0px_0px_2px_#eeeeee] shadow-md shadow-colorPrimary/50 md:border-1 border-transparent hover:border-colorPrimary  md:h-20 h-10 transition-all flex justify-center items-center w-[85%] mx-auto `
//                 : ""
//             }`}
//           >
//             <Link
//               to="/dashboard"
//               onClick={() => handlePanelClick("panel1")}
//               className="flex flex-col justify-start items-center"
//             >
//               <MdOutlineDashboard
//                 size={30}
//                 className="text-colorPrimary mb-1 "
//               />
//               <span className="text-white">Panel</span>
//             </Link>
//           </li>
//           <li
//             className={
//               location.pathname == "/dashboard/APi_details"
//                 ? `rounded-xl hover:md:shadow-[0px_0px_2px_#eeeeee] shadow-md shadow-colorPrimary/50 md:border-1 border-transparent hover:border-colorPrimary  md:h-20 h-10 transition-all flex justify-center items-center w-[85%] mx-auto`
//                 : ""
//             }
//           >
//             <Link
//               to="/dashboard/APi_details"
//               onClick={() => handlePanelClick("panel2")}
//               className="flex flex-col justify-start items-center"
//             >
//               <AiOutlineApi size={30} className="text-colorPrimary mb-1 " />
//               <span className="text-white">API</span>
//             </Link>
//           </li>
//           {/* Other list items */}
//           <li
//             className={
//               location.pathname == "/dashboard/bot/botmain"
//                 ? `rounded-xl hover:md:shadow-[0px_0px_2px_#eeeeee] shadow-md shadow-colorPrimary/50 md:border-1 border-transparent hover:border-colorPrimary  md:h-20 h-10 transition-all flex justify-center items-center w-[85%] mx-auto `
//                 : ""
//             }
//           >
//             <Link
//               to="/dashboard/bot/botmain"
//               onClick={() => handlePanelClick("panel3")}
//               className="flex flex-col justify-start items-center"
//             >
//               <LiaRobotSolid size={30} className="text-colorPrimary mb-1 " />
//               <span className="text-white">Bots</span>
//             </Link>
//           </li>

//           <li
//             className={
//               location.pathname == "#"
//                 ? `rounded-xl hover:md:shadow-[0px_0px_2px_#eeeeee] shadow-md shadow-colorPrimary/50 md:border-1 border-transparent hover:border-colorPrimary  md:h-20 h-10 transition-all flex justify-center items-center w-[85%] mx-auto `
//                 : ""
//             }
//           >
//             <Link
//               to="#"
//               onClick={() => handlePanelClick("panel4")}
//               className="flex flex-col justify-start items-center"
//             >
//               <FaFileExport size={30} className="text-colorPrimary mb-1 " />
//               <span className="text-white">asd</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div>
//         {/* For Desktop */}
//         <div
//           className={`fixed hidden md:block h-100 md:w-[45px] w-full top-[50%] z-50  rounded-bl-2xl rounded-br-2xl transform ${
//             isRotated ? " left-[361px] z-40" : "left-[87px]"
//           }`}
//           onClick={handleToggle}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 96"
//             width="16"
//             height="96"
//             fill="none"
//             className="z-30"
//             onClick={handleToggle}
//           >
//             <path
//               className="black"
//               d="M0 0h3c0 20 12 12 12 32v32c0 20-12 12-12 32H0z"
//             ></path>
//           </svg>
//           <div
//             className={`relative -top-[55px] text-[#fff] transform z-50 ${
//               isRotated ? "" : "-rotate-180"
//             }`}
//             onClick={handleToggle}
//           >
//             <MdKeyboardArrowRight
//               className={`${isRotated ? "ml-0" : "relative left-8"}`}
//               onClick={handleToggle}
//             />
//           </div>
//         </div>
//         {/* For Mobile */}
//         <div className="relative block md:hidden">
//           <div
//             className={`fixed w-[50px] z-40 left-[50%] -translate-x-1/2 -translate-y-1/2 -rotate-180 bg-[#3b3b3b]  rounded-bl-2xl rounded-br-2xl transform ${
//               isRotated ? "top-[12%] " : " top-[90.4%]"
//             }`}
//             onClick={handleToggle}
//           >
//             <div
//               className={`relative  text-green-500 transform z-50 ${
//                 isRotated ? "-rotate-90" : "rotate-90"
//               }`}
//             >
//               <MdKeyboardArrowRight
//                 className={`${isRotated ? "ml-auto" : "m-auto"}`}
//               />
//             </div>
//           </div>
//         </div>

//         {isOpen && (
//           <div
//             className={`fixed md:top-0 md:border-l-2 border-b-2 h-full w-full bg-black bg-opacity-50 z-10 flex items-start ${
//               isRotated ? " md:left-[88px] left-0 " : "left-[70px]"
//             }`}
//           >
//             <div
//               className="md:w-[275px] z-50 w-full relative bottom-0 bg-[#3b3b3b] md:h-full h-[79vh] p-4"
//             >
//               <Sidebarcontent panelname={panelname} />
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Sidebar; 
