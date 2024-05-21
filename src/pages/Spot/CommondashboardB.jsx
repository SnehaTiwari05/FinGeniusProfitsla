import { Button, Card, Select, Table } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import bitcoin from "../../assets/images/bitcoin.png";
import placeholder from "../../assets/images/1.svg";
import { Link } from "react-router-dom";

function CommondashboardB() {
  const [isOpen, setIsOpen] = useState(true);
  const [isRotated, setIsRotated] = useState(true);


  const containerRef = useRef();
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const columns = [
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => <Button size="small">Delete</Button>,
    },
  ];
  const data = [
    {
      key: "currency",
      price: 1200,
      age: 32,
      currency: "$",
      tags: ["nice", "developer"],
    },
    {
      key: "type",
      price: 100,
      age: 42,
      currency: "$",
      tags: ["loser"],
    },
    {
      key: "amount",
      price: 500,
      age: 32,
      currency: "$",
      tags: ["cool", "teacher"],
    },
  ];
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "FX:EURUSD",
      width: 520,
      height: 250,
      locale: "in",
      dateRange: "12M",
      colorTheme: "light",
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
    });

    const containerElement = containerRef.current;

    if (containerElement) {
      containerElement.appendChild(script);
    }

    return () => {
      if (containerElement) {
        containerElement.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="relative lg:mt-14">
      {/* <SubSideBar>
        Rani ye sidebar with children hai
      </SubSideBar> */}
      <div className="md:grid md:grid-cols-1  md:mx-10 mt-0 mb-0 px-4">
        <div>
          <div className="text-xl md:mx-5 mt-5 font-semibold">Top 10 Coin</div>
          <Slider {...settings} className="mt-0">
            <div className="px-3 ">
              <div className="shadow-xl my-5 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-col flex">
                    <div className="flex gap-2 items-center">
                      <img src={bitcoin} className="w-8" />
                      <div className="text-[14px]">Bitcoin</div>
                    </div>
                    <div className=" text-black text-xl font-bold">
                      $ 30,452.35
                    </div>
                    <div className="text-sm text-gray-500">Current value</div>
                  </div>
                  <div className=" text-right mt-2">
                    <div className="text-[12px]">BTC</div>
                    <div className="text-[12px] text-green-700">+5.25 %</div>
                    <img src={placeholder} className="w-24" />
                  </div>
                </div>
                <div className="p-0"></div>
              </div>
            </div>
            <div className="px-3 ">
              <div className="shadow-xl my-5 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-col flex">
                    <div className="flex gap-2 items-center">
                      <img src={bitcoin} className="w-8" />
                      <div className="text-[14px]">Bitcoin</div>
                    </div>
                    <div className=" text-black text-xl font-bold">
                      $ 30,452.35
                    </div>
                    <div className="text-sm text-gray-500">Current value</div>
                  </div>
                  <div className=" text-right mt-2">
                    <div className="text-[12px]">BTC</div>
                    <div className="text-[12px] text-green-700">+5.25 %</div>
                    <img src={placeholder} className="w-24" />
                  </div>
                </div>
                <div className="p-0"></div>
              </div>
            </div>
            <div className="px-3 ">
              <div className="shadow-xl my-5 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-col flex">
                    <div className="flex gap-2 items-center">
                      <img src={bitcoin} className="w-8" />
                      <div className="text-[14px]">Bitcoin</div>
                    </div>
                    <div className=" text-black text-xl font-bold">
                      $ 30,452.35
                    </div>
                    <div className="text-sm text-gray-500">Current value</div>
                  </div>
                  <div className=" text-right mt-2">
                    <div className="text-[12px]">BTC</div>
                    <div className="text-[12px] text-green-700">+5.25 %</div>
                    <img src={placeholder} className="w-24" />
                  </div>
                </div>
                <div className="p-0"></div>
              </div>
            </div>
            <div className="px-3 ">
              <div className="shadow-xl my-5 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-col flex">
                    <div className="flex gap-2 items-center">
                      <img src={bitcoin} className="w-8" />
                      <div className="text-[14px]">Bitcoin</div>
                    </div>
                    <div className=" text-black text-xl font-bold">
                      $ 30,452.35
                    </div>
                    <div className="text-sm text-gray-500">Current value</div>
                  </div>
                  <div className=" text-right mt-2">
                    <div className="text-[12px]">BTC</div>
                    <div className="text-[12px] text-green-700">+5.25 %</div>
                    <img src={placeholder} className="w-24" />
                  </div>
                </div>
                <div className="p-0"></div>
              </div>
            </div>
            <div className="px-3 ">
              <div className="shadow-xl my-5 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-col flex">
                    <div className="flex gap-2 items-center">
                      <img src={bitcoin} className="w-8" />
                      <div className="text-[14px]">Bitcoin</div>
                    </div>
                    <div className=" text-black text-xl font-bold">
                      $ 30,452.35
                    </div>
                    <div className="text-sm text-gray-500">Current value</div>
                  </div>
                  <div className=" text-right mt-2">
                    <div className="text-[12px]">BTC</div>
                    <div className="text-[12px] text-green-700">+5.25 %</div>
                    <img src={placeholder} className="w-24" />
                  </div>
                </div>
                <div className="p-0"></div>
              </div>
            </div>
            <div className="px-3 ">
              <div className="shadow-xl my-5 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-col flex">
                    <div className="flex gap-2 items-center">
                      <img src={bitcoin} className="w-8" />
                      <div className="text-[14px]">Bitcoin</div>
                    </div>
                    <div className=" text-black text-xl font-bold">
                      $ 30,452.35
                    </div>
                    <div className="text-sm text-gray-500">Current value</div>
                  </div>
                  <div className=" text-right mt-2">
                    <div className="text-[12px]">BTC</div>
                    <div className="text-[12px] text-green-700">+5.25 %</div>
                    <img src={placeholder} className="w-24" />
                  </div>
                </div>
                <div className="p-0"></div>
              </div>
            </div>
            <div className="px-3 ">
              <div className="shadow-xl my-5 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-col flex">
                    <div className="flex gap-2 items-center">
                      <img src={bitcoin} className="w-8" />
                      <div className="text-[14px]">Bitcoin</div>
                    </div>
                    <div className=" text-black text-xl font-bold">
                      $ 30,452.35
                    </div>
                    <div className="text-sm text-gray-500">Current value</div>
                  </div>
                  <div className=" text-right mt-2">
                    <div className="text-[12px]">BTC</div>
                    <div className="text-[12px] text-green-700">+5.25 %</div>
                    <img src={placeholder} className="w-24" />
                  </div>
                </div>
                <div className="p-0"></div>
              </div>
            </div>
            <div className="px-3 ">
              <div className="shadow-xl my-5 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-col flex">
                    <div className="flex gap-2 items-center">
                      <img src={bitcoin} className="w-8" />
                      <div className="text-[14px]">Bitcoin</div>
                    </div>
                    <div className=" text-black text-xl font-bold">
                      $ 30,452.35
                    </div>
                    <div className="text-sm text-gray-500">Current value</div>
                  </div>
                  <div className=" text-right mt-2">
                    <div className="text-[12px]">BTC</div>
                    <div className="text-[12px] text-green-700">+5.25 %</div>
                    <img src={placeholder} className="w-24" />
                  </div>
                </div>
                <div className="p-0"></div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="my-3 md:flex justify-center">
          <button
            type="button"
            className="md:px-6 mt-2 md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-full md:w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            <Link href="/dashboard/api_settings">Bots For Future</Link>
          </button>
          <button
            type="button"
            className="px-6 mt-2  md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-full md:w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            Bots For Spot
          </button>
          <button
            type="button"
            className="px-6 mt-2 md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-full md:w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            Stable Coins
          </button>
          <button
            type="button"
            className="px-6 mt-2 md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-full md:w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            Sideways Bot
          </button>
          <button
            type="button"
            className="px-6 mt-2 md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-full md:w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            Analyst
          </button>
        </div>
        <div className="lg:flex items-center lg:gap-2 ">
          <div className="py-3 lg:w-2/12 w-full">
            <div className="border border-spacing-1 p-3 bg-[#3b3b3b] rounded-md">
              <div className=" text-black w-full">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-left text-white text-sm">Balance</div>
                  <div className="">
                    <Select
                      defaultValue="ApiName"
                      style={{
                        width: 120,
                      }}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "ApiName",
                          label: "ApiName",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-full">
                    <button
                      type="button"
                      className=" text-black rounded-md bg-colorPrimary w-full"
                    >
                      {" "}
                      $30,452.35
                    </button>
                  </div>
                  <div className="w-2/5 text-sm  mx-auto">
                    <button
                      type="button"
                      className=" text-black  rounded-md bg-[#d4ff97] w-full"
                    >
                      {" "}
                      + 5.35
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="w-full flex gap-2 items-center">
                  <div className=" w-3/5 text-[#fff] text-left text-sm ">
                    No. Bot Active
                  </div>
                  <button
                    type="button"
                    size="small"
                    className="text-[#3b3b3b] w-2/5 rounded-md bg-[#fff]"
                  >
                    {" "}
                    10
                  </button>
                </div>
                <div className="w-full flex gap-2 items-center">
                  <div className=" w-3/5 text-[#fff] text-left text-sm ">
                    Active Bot In Spot
                  </div>
                  <button
                    type="button"
                    size="small"
                    className="text-[#3b3b3b] w-2/5 rounded-md bg-[#fff]"
                  >
                    {" "}
                    $30,452.35
                  </button>
                </div>

                <div className="w-full flex gap-2 items-center">
                  <div className=" w-3/5 text-[#fff] text-left text-sm ">
                    Active Bot In Future
                  </div>
                  <button
                    type="button"
                    size="small"
                    className="text-[#3b3b3b] w-2/5  rounded-md bg-[#fff]"
                  >
                    {" "}
                    $30,452.35
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:px-3 w-100 lg:w-7/12  flex justify-center">
            <div className="md:w-full">
              <Card className="border-none">
                <div
                  ref={containerRef}
                  className="tradingview-widget-container w-full md:w-100"
                >
                  <div className="tradingview-widget-container__widget"></div>
                </div>
              </Card>
            </div>
          </div>
          <div className="lg:px-3 w-100 lg:w-3/12">
            <div className="border border-spacing-1 p-1 rounded-md w-100 h-full bg-[#3b3b3b]">
              <div className="">
                <div>
                  <div className="text-sm mx-5 mt-2 mb-2 font-semibold text-white">
                    Watchlist
                  </div>
                  <div className="px-3 ">
                    <div className="shadow-md shadow-black bg-white my-1 rounded-md p-1">
                      <div className="flex justify-between items-center">
                        <div className="flex-col flex">
                          <div className="flex gap-2 items-center">
                            <img src={bitcoin} className="w-8" />
                            <div className="text-[14px]">Bitcoin</div>(
                            <div className="text-[12px]">BTC</div>)
                          </div>
                        </div>
                        <div>
                          <div className=" text-black text-md lg:text-sm font-bold">
                            $ 30,452.35
                          </div>
                        </div>
                        <div className=" text-right mt-2">
                          <div className="text-[12px] text-green-700">
                            +5.25 %
                          </div>
                        </div>
                      </div>
                      <div className="p-0"></div>
                    </div>
                  </div>
                  <div className="px-3 ">
                    <div className="shadow-md shadow-black bg-white my-1 rounded-md p-1">
                      <div className="flex justify-between items-center">
                        <div className="flex-col flex">
                          <div className="flex gap-2 items-center">
                            <img src={bitcoin} className="w-8" />
                            <div className="text-[14px]">Bitcoin</div>(
                            <div className="text-[12px]">BTC</div>)
                          </div>
                        </div>
                        <div>
                          <div className=" text-black text-md font-bold">
                            $ 30,452.35
                          </div>
                        </div>
                        <div className=" text-right mt-2">
                          <div className="text-[12px] text-green-700">
                            +5.25 %
                          </div>
                        </div>
                      </div>
                      <div className="p-0"></div>
                    </div>
                  </div>

                  <div className="px-3 ">
                    <div className="shadow-md shadow-black bg-white my-1 rounded-md p-1">
                      <div className="flex justify-between items-center">
                        <div className="flex-col flex">
                          <div className="flex gap-2 items-center">
                            <img src={bitcoin} className="w-8" />
                            <div className="text-[14px]">Bitcoin</div>(
                            <div className="text-[12px]">BTC</div>)
                          </div>
                        </div>
                        <div>
                          <div className=" text-black text-md font-bold">
                            $ 30,452.35
                          </div>
                        </div>
                        <div className=" text-right mt-2">
                          <div className="text-[12px] text-green-700">
                            +5.25 %
                          </div>
                        </div>
                      </div>
                      <div className="p-0"></div>
                    </div>
                  </div>
                  <div className="px-3 ">
                    <div className="shadow-md shadow-black bg-white my-1 rounded-md p-1">
                      <div className="flex justify-between items-center">
                        <div className="flex-col flex">
                          <div className="flex gap-2 items-center">
                            <img src={bitcoin} className="w-8" />
                            <div className="text-[14px]">Bitcoin</div>(
                            <div className="text-[12px]">BTC</div>)
                          </div>
                        </div>
                        <div>
                          <div className=" text-black text-md font-bold">
                            $ 30,452.35
                          </div>
                        </div>
                        <div className=" text-right mt-2">
                          <div className="text-[12px] text-green-700">
                            +5.25 %
                          </div>
                        </div>
                      </div>
                      <div className="p-0"></div>
                    </div>
                  </div>
                  <div className="px-3 ">
                    <div className="shadow-md shadow-black bg-white my-1 rounded-md p-1">
                      <div className="flex justify-between items-center">
                        <div className="flex-col flex">
                          <div className="flex gap-2 items-center">
                            <img src={bitcoin} className="w-8" />
                            <div className="text-[14px]">Bitcoin</div>(
                            <div className="text-[12px]">BTC</div>)
                          </div>
                        </div>
                        <div>
                          <div className=" text-black text-md font-bold">
                            $ 30,452.35
                          </div>
                        </div>
                        <div className=" text-right mt-2">
                          <div className="text-[12px] text-green-700">
                            +5.25 %
                          </div>
                        </div>
                      </div>
                      <div className="p-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table
          columns={columns}
          size="small"
          dataSource={data}
          className="md:w-100 px-2 py-2"
        />
      </div>
    </div>
  );
}

export default CommondashboardB;
