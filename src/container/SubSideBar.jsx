// import React, { useState } from "react";
// import { MdKeyboardArrowRight } from "react-icons/md";

// function SubSideBar({children}) {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isRotated, setIsRotated] = useState(true);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//     setIsRotated(!isRotated);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     setIsRotated(false);
//   };
//   return (
//     <div>
//       {/* For Desktop */}
//       <div
//         className={`fixed hidden md:block h-100 md:w-[45px] w-full -rotate-90 bg-[#3b3b3b] top-[50%]  rounded-bl-2xl rounded-br-2xl transform ${
//           isRotated ? " left-[346px] z-40" : "left-[70px]"
//         }`}
//         onClick={handleToggle}
//       >
//         <div
//           className={`relative top-4 text-white transform z-50 ${
//             isRotated ? "-rotate-90 " : "rotate-90"
//           }`}
//         >
//           <MdKeyboardArrowRight
//             className={`${isRotated ? "ml-auto " : "mr-auto"}`}
//           />
//         </div>
//       </div>
//       {/* For Mobile */}
//       <div className="relative block md:hidden">
//         <div
//           className={`fixed w-[50px] z-40 left-[50%] -translate-x-1/2 -translate-y-1/2 -rotate-180 bg-[#3b3b3b]  rounded-bl-2xl rounded-br-2xl transform ${
//             isRotated ? "top-[12%] " : " top-[90.4%]"
//           }`}
//           onClick={handleToggle}
//         >
//           <div
//             className={`relative  text-green-500 transform z-50 ${
//               isRotated ? "-rotate-90" : "rotate-90"
//             }`}
//           >
//             <MdKeyboardArrowRight
//               className={`${isRotated ? "ml-auto" : "m-auto"}`}
//             />
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div
//           className={`fixed md:top-0 md:border-l-2 border-b-2 h-full w-full bg-black bg-opacity-50 z-20 flex items-start ${
//             isRotated ? " md:left-[88px] left-0 " : "left-[70px]"
//           }`}
//           onClick={handleClose}
//         >
//           <div className="md:w-[275px] w-full relative bottom-0 bg-[#3b3b3b] md:h-full h-[79vh] p-4">
//             {children}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SubSideBar;
