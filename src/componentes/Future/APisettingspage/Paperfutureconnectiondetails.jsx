import { Alert, Checkbox, Col, Radio, Row, Tooltip } from "antd";
import React, { useState } from "react";
import { Input } from "antd";
import img1 from "../../../assets/future/binance.png";

import { Link } from "react-router-dom";
import {
  InfoCircleOutlined,
  UserOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import binance from "../../../assets/images/binance.png";

function Spotconnectiondetails() {
  const [inputValue, setInputValue] = useState("");
    const [value, setValue] = useState(1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputValue);
    // You can add any additional logic here, such as showing a success message
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);
  };

  const onChange1 = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

    const onChange2 = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };

 

  return (
    <>
      <div className="text-center my-4">
        <div className="text-slate-900 text-lg font-black mt-2">
          Set up your keys
        </div>
        <div className="font-light text-sm">
          Create your API keys and Securely Connect your Exchange to Profitsla
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div class="flex justify-end">
          <form class="bg-white  rounded px-8 pt-6 pb-8  md:w-[480px] me-28">
            <div></div>
            <div class="items-center">
              <div className="bg-colorSecondary rounded-full align items-center border-solid drop-shadow-xl flex flex-row break-words p-1 justify-center mb-3  mx-2 text-black">
                {/* <img src={img1} alt="binance" className="mr-2 md:w-[150px]" /> */}
                <h4 className="text-2xl font-extrabold ">Paper Trading</h4>
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Api Key Name
              </label>
              <input
                class="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B]  text-white leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Api Key Name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Select Type
              </label>
              {/* <input
                class="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B]  text-white leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Api Key"
              /> */}
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                onChange={onChange1}
              >
                <Row>
                  <Col xs={12}>
                    <Checkbox value="Spot">Spot</Checkbox>
                  </Col>
                  <Col xs={12}>
                    <Checkbox value="Future">Future</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
              <Radio.Group
                onChange={onChange2}
                value={value}
                style={{
                  width: "100%",
                }}
              >
                <Row>
                  <Col xs={12}>
                    <Radio value={1}>One-way</Radio>
                  </Col>
                  <Col xs={12}>
                    <Radio value={2}>Hedge</Radio>
                  </Col>
                </Row>
               
              </Radio.Group>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Amount in ($)
              </label>
              <input
                class="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B]  text-white leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Amount in ($)"
              />
            </div>

            
            <div class="items-end flex justify-end">
              <button
                class="bg-[#3b3b3b] rounded-3xl  mx-2 hover:text-colorPrimary text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                type="button"
              >
                <Link to="/dashboard/api_settings">Prev</Link>
              </button>
              <button
                class="bg-[#3b3b3b] rounded-3xl hover:text-colorPrimary text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="button"
              >
                <Link to="/dashboard/api_settings/ConnectionLoder">Next</Link>
              </button>
            </div>
          </form>
          <div className="w-1 md:h-[80%] mt-6 border-opacity-95 bg-black"></div>
        </div>

        {/* <div className=''></div> */}
        <div class="text-center items-center mt-24 ">
          <img src={binance} alt="binance" className="w-36 inline-block" />
          <p className="text-lg">How to create your api key on binance ? </p>
          <button type="button" className="p-2 bg-colorPrimary rounded-xl mt-5">
            Learn How
          </button>
        </div>
      </div>
    </>
  );
}

export default Spotconnectiondetails;
