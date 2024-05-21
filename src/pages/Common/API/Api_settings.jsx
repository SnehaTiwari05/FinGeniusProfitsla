import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Step = ({ title, completed, index, isChecked }) => {
  return (
    <div className={`step ${completed ? "current bg-red-500" : "bg-blue-300"}`}>
      <span className={`step-number ${completed ? "checkmark" : ""}`}>
        {completed ? "✔" : index}
      </span>
      <span>{title}</span>
      {isChecked && <span className="checkbox">✔</span>}
    </div>
  );
};

const Api_settings = () => {
  const location = useLocation();
  const locationState = location.state || false;
  const navigate = useNavigate();

  const [stepsData, setStepsData] = useState([
    { title: "Choose Exchange", completed: false },
    { title: "Setup Keys", completed: false },
    { title: "Connect", completed: false },
  ]);

  const handleStepClick = (stepIndex) => {
    const updatedStepsData = stepsData.map((step, index) => ({
      ...step,
      completed: index <= stepIndex, 
    }));
    setStepsData(updatedStepsData);
  };


  return (
    <>
      <div className="container mx-auto">
        <div className="wrapper">
          <div className="arrow-steps flex flex-wrap justify-center">
            {stepsData.map((step, index) => (
              <Step
                key={index}
                title={step.title}
                completed={step.completed}
                index={index + 1}
                isChecked={locationState}
              />
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
  
};

export default Api_settings;
