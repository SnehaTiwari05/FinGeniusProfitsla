import React, { useState } from "react";
import { Button } from "antd";
import img1 from "../../../assets/future/binance.png";
import img2 from "../../../assets/future/binancev2.png";
import { useNavigate } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";

// const Step = ({ title, completed }) => {
//   return (
//     <div className={`custom-div ${completed ? "completed" : ""}`}>
//       <span>{title}</span>
//       {completed ? <CheckOutlined className="checkmark" /> : null}
//     </div>
//   );
// };

const Preffred_exchanges = () => {
  const [stepsData, setStepsData] = useState([
    { title: "Choose Exchange", completed: false },
    { title: "Setup Keys", completed: false },
    { title: "Connect", completed: false },
  ]);

  const Navigate = useNavigate();

 const handleStepClick = (stepIndex) => {
   const updatedStepsData = stepsData.map((step, index) => ({
     ...step,
     completed: index === stepIndex && index === 0, // Mark the first step as completed
   }));
   setStepsData(updatedStepsData);
 };


  return (
    <>
      <div className="items-center text-center my-4">
        <h6>Select your Preferred Exchange</h6>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3">
          <div
            className={`custom-div md:w-[250px] bg-clip-border border-2 items-center rounded border-cyan-50 align border-solid drop-shadow-xl  flex  flex-col break-words mt-4  p-5 w-40 mx-2  text-black ${
              stepsData[0].completed ? "completed" : ""
            }`}
            onClick={() => handleStepClick(0)}
          >
            <img src={img1} alt="binance" />
            <p>( Spot )</p>
            <Button
              className="mt-2"
              onClick={() => {
                handleStepClick(0);
                Navigate("/dashboard/api_settings/Spotconnectiondetails", {
                  state: { status: true },
                });
              }}
            >
              Add API
            </Button>
          </div>
          <div
            className={`custom-div md:w-[250px] bg-clip-border border-2 items-center rounded border-cyan-50 align border-solid drop-shadow-xl  flex  flex-col break-words mt-4  p-5 w-40 mx-2  text-black ${
              stepsData[1].completed ? "completed" : ""
            }`}
            onClick={() => handleStepClick(1)}
          >
            <img src={img2} alt="binance" />
            <p>( Future )</p>
            <Button
              className="mt-2"
              onClick={() => {
                handleStepClick(1);
                Navigate("/dashboard/api_settings/Futureconnectionform", {
                  state: { status: true },
                });
              }}
            >
              Add API
            </Button>
          </div>
          <div
            className={`custom-div md:w-[250px] bg-clip-border border-2 items-center rounded border-cyan-50 align border-solid drop-shadow-xl  flex  flex-col break-words mt-4  p-5 w-40 mx-2  text-black ${
              stepsData[2].completed ? "completed" : ""
            }`}
            onClick={() => handleStepClick(2)}
          >
            <h1 className="text-3xl font-extrabold my-2">Paper</h1>
            <Button
              className="mt-2"
              onClick={() => {
                handleStepClick(2);
                Navigate(
                  "/dashboard/api_settings/Paperfutureconnectiondetails",
                  {
                    state: { status: true },
                  }
                );
              }}
            >
              Add API
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preffred_exchanges;
