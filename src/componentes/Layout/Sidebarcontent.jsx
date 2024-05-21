import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Apisidebarcomponent from "../Common/API/Apisidebarcomponent";
import BotPaneldetails from "../Common/Bot/BotPaneldetails";
import { FiArrowLeft } from "react-icons/fi";
import { Row, Switch } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import Test from "../../pages/Common/API/Test";
import { Tabs, Button, Input, Dropdown, Menu } from "antd";
import Slider from "react-slick";

import botname from '../../assets/images/bitcoin.png'
import "../../App.css";

const { TabPane } = Tabs;

const slidesData = [
  { title: "Analyst", bgColor: "#f0f0f0" },
  { title: "Future", bgColor: "#dcdcdc" },
  { title: "Stable Coins", bgColor: "#c0c0c0" },
  { title: "Spot", bgColor: "#c0c0c0" },
  { title: "Sideways", bgColor: "#c0c0c0" },
  { title: "Manage", bgColor: "#c0c0c0" },
];

function Sidebarcontent(props) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleButtons, setVisibleButtons] = useState([1, 2]);

  const handleSlideChange = (value) => {
    setCurrentSlide(value);
    if (value > visibleButtons[visibleButtons.length - 1]) {
      setVisibleButtons((prevVisibleButtons) => [...prevVisibleButtons, value]);
    } else if (value < visibleButtons[0]) {
      setVisibleButtons((prevVisibleButtons) => [value, ...prevVisibleButtons]);
    }
  };

  const handleMenuClick = (e) => {
    setCurrentSlide(Number(e.key));
  };

  const CustomPrevArrow = (props) => (
    <button
      className="slick-arrow slick-prev custom-arrow left-0 top-2/3 z-20 transform -translate-y-1/2"
      onClick={props.onClick}
    >
      &lt;
    </button>
  );

  // Custom next arrow button
  const CustomNextArrow = (props) => (
    <button
      className="slick-arrow slick-next custom-arrow right-[10px] top-2/3 z-20 transform -translate-y-1/2"
      onClick={props.onClick}
    >
      &gt;
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Custom previous arrow button
    nextArrow: <CustomNextArrow />, // Custom next arrow button
    responsive: [
      {
        breakpoint: 1600, // xl breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // lg breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // md breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // sm breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // xs breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleButtonClick = (slideIndex) => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickGoTo(slideIndex);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Apple</Menu.Item>
      <Menu.Item key="2">Mango</Menu.Item>
      <Menu.Item key="3">Banana</Menu.Item>
      <Menu.Item key="4">Fruit</Menu.Item>
      <Menu.Item key="5">Vegetable</Menu.Item>
      <Menu.Item key="6">Input</Menu.Item>
    </Menu>
  );

  // if (props.panelname === "panel2") {
  //   return <Apisidebarcomponent />;
  // } else if (props.panelname === "panel3") {
  //   return <BotPaneldetails />;
  // } else {
    return (
      <>
        <div>{/* <Test /> */}</div>

        <div className="">
          <Tabs
            defaultActiveKey="1"
            className="text-white active:text-colorPrimary  w-full"
          >
            <TabPane
              tab="Bots"
              key="1"
              className="text-white active:text-colorPrimary "
            >
              <form>
                <label
                  for="search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    class="block w-full p-2 pl-10 text-black text-sm  border rounded-full border-white  bg-gray-50 focus:ring-black focus:border-white dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-white dark:focus:border-white"
                    placeholder="Search"
                    required
                  />
                  {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
              </form>

              <div className="slider-container relative">
                <Slider {...settings}>
                  {slidesData.map((slide, index) => (
                    <div
                      key={slide.id}
                      className="slide "
                      style={{
                        backgroundColor: slide.bgColor,
                        padding: "10px",
                        marginRight: "initial",
                      }} // Adjust padding as needed
                    >
                      <div className="flex gap-1">
                        <p
                          className=" w-[90%] flex-shrink-0   mt-4 py-1 px-2 border bg-colorPrimary border-colorPrimary rounded-md text-black hover:bg-white hover:text-black transition duration-500 text-center"
                          onClick={() => handleButtonClick(index)}
                        >
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-md shadow-lg shadow-black">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={botname} className="w-4" />
                      </div>
                      <div>botname</div>
                    </div>
                    <div className="text-colorSecondary text-2xl text-center">
                      1234%
                    </div>
                  </div>
                  <div className="p-3 rounded-md shadow-lg shadow-black">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={botname} className="w-4" />
                      </div>
                      <div>botname</div>
                    </div>
                    <div className="text-colorSecondary text-2xl text-center">
                      1234%
                    </div>
                  </div>
                  <div className="p-3 rounded-md shadow-lg shadow-black">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={botname} className="w-4" />
                      </div>
                      <div>botname</div>
                    </div>
                    <div className="text-colorSecondary text-2xl text-center">
                      1234%
                    </div>
                  </div>
                  <div className="p-3 rounded-md shadow-lg shadow-black">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={botname} className="w-4" />
                      </div>
                      <div>botname</div>
                    </div>
                    <div className="text-colorSecondary text-2xl text-center">
                      1234%
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tab="Balance" key="2" className="text-white">
              <div className="px-3">
                <div className="flex items-center  gap-2">
                  <FiArrowLeft size={20} className="text-white " />
                  <h1 className="text-white text-center text-lg mt-2">
                    Analytics panel
                  </h1>
                </div>
                <h2 className="text-white text-lg font-bold mt-4 mb-3">
                  Balance
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-full">
                    <button
                      type="button"
                      className=" text-black rounded-full bg-colorPrimary w-full py-1"
                    >
                      $30,452.35
                    </button>
                  </div>
                  <div className="w-2/5 text-sm items-center mx-auto">
                    <button
                      type="button"
                      className=" text-black text-center rounded-full bg-[#d4ff97] w-full"
                    >
                      + 5.35
                    </button>
                  </div>
                </div>
                <div className="items-center justify-center mt-6">
                  <div className="text-center w-full text-[#fff]  text-sm ">
                    No. Bot Active
                  </div>
                  <button
                    type="button"
                    size="small"
                    className="text-[#3b3b3b]  w-full rounded-full bg-[#fff]"
                  >
                    10
                  </button>
                </div>
                <div className="items-center justify-center mt-2">
                  <div className="text-center w-full text-[#fff]  text-sm ">
                    Active Bot In Spot
                  </div>
                  <button
                    type="button"
                    size="small"
                    className="text-[#3b3b3b]  w-full rounded-full bg-[#fff]"
                  >
                    10
                  </button>
                </div>
                <div className="items-center justify-center mt-2">
                  <div className="text-center w-full text-[#fff]  text-sm ">
                    Active Bot In Future
                  </div>
                  <button
                    type="button"
                    size="small"
                    className="text-[#3b3b3b]  w-full rounded-full bg-[#fff]"
                  >
                    10
                  </button>
                </div>
                <div className="flex justify-start text-lg  mt-3 mb-2 text-white">
                  My API
                </div>
                <div className="flex justify-between">
                  <div className="text-white">
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                  </div>
                  <div className="text-white mb-2">
                    <Switch className="bg-colorPrimary" />
                    <br></br>
                    <Switch className="bg-colorPrimary" />
                    <br></br>
                    <Switch className="bg-colorPrimary" />
                    <br></br>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className=" text-lg  mt-2 text-white">Watchlist</div>
                  <AiOutlinePlus size={20} className="text-white" />
                </div>
              </div>
            </TabPane>

            <TabPane tab="API" key="3">
              <div>
                <div className="flex justify-center text-xl  mt-5 text-white">
                  Api Panel
                </div>
                <button
                  type="button"
                  className="px-6 pt-1 pb-1 mt-2 text-black rounded-full w-full bg-white"
                >
                  <Link to="/dashboard/api_settings" className="text-black">
                    Add API
                  </Link>
                </button>

                <div className="flex justify-start text-lg  mt-2 text-white">
                  My API
                </div>
                <div className="flex justify-between">
                  <div className="text-white">
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                  </div>
                  <div className="text-white mb-2">
                    <Switch className="bg-colorPrimary" />
                    <br></br>
                    <Switch className="bg-colorPrimary" />
                    <br></br>
                    <Switch className="bg-colorPrimary" />
                    <br></br>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-6 pt-1 pb-1 mb-2 text-black rounded-full w-full bg-colorPrimary"
                >
                  <Link
                    to="/dashboard/api_settings/Spotconnectiondetails"
                    className="text-black"
                  >
                    Select Exchange
                  </Link>
                </button>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </>
    );
  // }
}

export default Sidebarcontent;
