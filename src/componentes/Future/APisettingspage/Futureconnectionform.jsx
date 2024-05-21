import { Alert, Checkbox, Radio, Tooltip, message } from 'antd'
import React, { useState } from 'react'
import { Input } from "antd";
import img1 from "../../../assets/future/binancev2.png";

import { Link } from 'react-router-dom';
import {
  CopyOutlined,
} from "@ant-design/icons";
import binance from "../../../assets/images/binance.png"
import { getToken } from '../../../authfunctions';
import axios from 'axios';

function Futureconnectionform() {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(1);


  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputValue);
    // You can add any additional logic here, such as showing a success message
  };


  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [stepsData, setStepsData] = useState([

    { title: "Add API", completed: false },

  ]);
  const [inputValues, setInputValues] = useState({
    apiKeyName: '',
    API_KEY: '',
    SECRET_KEY: '',
    whitelistIPs: '',
    tradeIntent: false,
  });

  const token = getToken()
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNextClick = (stepIndex) => {
    const updatedStepsData = stepsData.map((step, index) => ({
      ...step,
      completed: index === 0 && stepIndex === 1, // Mark the second step as completed
    }));
    setStepsData(updatedStepsData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    inputValues.type = "LIVE"
    inputValues.exchange = "Binance_FUTURE"
    inputValues.jwt = token

    console.log('Input values:', inputValues);
    const postdata = {
      jwt: token,
      market: "CRYPTO",
      exchange: "Binance_FUTURE",
      name: inputValues.apiKeyName,
      type: "LIVE",
      fields: {
        API_KEY: inputValues.apiKey,
        SECRET_KEY: inputValues.SECRET_KEY,
      }
    }
    console.log("postdata")
    console.log(postdata)

    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: process.env.REACT_APP_API_PATH_USER + "add_api",
      data: postdata,
    })
      .then(async function (response) {
        const res = await response;
        console.log(res.data)
        message.success(res.data.data)
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response?.data?.error || "Failed to fetch API details");
      });

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
      <div className="grid lg:grid-cols-2">
        <div class="flex">
          <form class="bg-white  rounded px-8 pt-6 pb-8  mr-30 ml-36" onSubmit={handleSubmit}>
            <div></div>
            <div class="items-center">

              <div className="bg-colorSecondary rounded-full align items-center border-solid drop-shadow-xl flex flex-row break-words p-1 justify-center mb-3  mx-2 text-black">
                <img src={img1} alt="binance" className="mr-2 md:w-[150px]" />
                <h4 className="text-2xl font-extrabold ">Future</h4>
              </div>


            </div>
            {/* <div class="mb-4">
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
              </div> */}
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="apiKeyName">
                Api Key Name
              </label>
              <input
                class="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Api Key Name"
                name="apiKeyName"
                value={inputValues.apiKeyName} // Add this to connect the input to state
                onChange={handleInputChange} // Assuming you are using this function to handle input changes
              />
            </div>
            {/* <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Api Key
                </label>
                <input
                  class="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B]  text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Api Key"
                />
              </div> */}
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="apiKey">
                Api Key
              </label>
              <input
                class="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Api Key"
                name="apiKey"
                value={inputValues.apiKey} // Add this to connect the input to state
                onChange={handleInputChange} // Assuming you are using this function to handle input changes
              />
            </div>
            {/* <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Secret Key
              </label>
              <input
                class="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B]  text-white leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Secret Key "
              />
            </div> */}
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="secretKey">
                Secret Key
              </label>
              <input
                class="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Secret Key "
                name="SECRET_KEY"
                value={inputValues.secretKey} // Add this to connect the input to state
                onChange={handleInputChange} // Assuming you are using this function to handle input changes
              />
            </div>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>One-way</Radio>
              <Radio value={2}>Hedge</Radio>
            </Radio.Group>
            <Alert 
              message="To increase your security, connect to your exchange with Profitsla whitelisted IPs. copy the IPs and paste them in to your exchange while creating the new API keys."
              className="mt-5 mb-5"
              type="info"
              showIcon
            />

            <h4>IPs to whitelist</h4>
            <div className="text-sm font-semibold text-lg ">
              <Input
                className="shadow appearance-none border rounded-3xl mb-2 w-full py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                suffix={
                  <Tooltip title="Copy">
                    <CopyOutlined
                      onClick={handleCopy}
                      style={{
                        color: "#000",
                        cursor: "pointer",
                      }}
                    />
                  </Tooltip>
                }
              />
            </div>
            <div className="flex justify-center">
              <button type='submit' class="bg-[#3b3b3b] rounded-3xl  mx-2 hover:text-colorPrimary text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline">
                submit
              </button>
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
          <button
            type="button"
            className="p-2 bg-colorPrimary rounded-xl mt-5"
          >
            Learn How
          </button>
        </div>
      </div>
    </>
  );
}

export default Futureconnectionform

