import { Avatar, Button, Tag } from "antd";
import Card from "antd/es/card/Card";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../../assets/css/style.css";
import backgroundImage from "../../../assets/images/patch.jpg";

import coinImg from "../../../assets/images/bitcoin.png";
import aelf from "../../../assets/images/coins/aelf.png";
import airswap from "../../../assets/images/coins/airswap.png";
import contentos from "../../../assets/images/coins/contentos.png";
import wing from "../../../assets/images/coins/wing.png";
import wazirx from "../../../assets/images/coins/wazirx.png";
import wax from "../../../assets/images/coins/wax.png";

function Botmainpage() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,

    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2600, // xl breakpoint
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600, // xl breakpoint
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // lg breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // md breakpoint
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="px-3 lg:mt-16">
        <p className="text-xl mt-2 mb-4">Top 10 Trending Bots</p>
        <Slider {...settings} className="mt-0">
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center ">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    01
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" inline-block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Repeat the same pattern for other card1s */}
            </div>
          </div>
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    02
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Repeat the same pattern for other card1s */}
            </div>
          </div>
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    03
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" inline-block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Repeat the same pattern for other card1s */}
            </div>
          </div>
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    04
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" inline-block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Repeat the same pattern for other card1s */}
            </div>
          </div>
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    05
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" inline-block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Repeat the same pattern for other card1s */}
            </div>
          </div>
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    06
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" inline-block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Repeat the same pattern for other card1s */}
            </div>
          </div>
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    07
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" inline-block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Repeat the same pattern for other card1s */}
            </div>
          </div>
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    08
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" inline-block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Repeat the same pattern for other card1s */}
            </div>
          </div>
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    09
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" inline-block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center text-center">
            <div className="container container1  text-center">
              <div className="card1 glow">
                <div className="content1  text-center">
                  <h2 className="text-7xl text-colorPrimaryDark/60 absolute top-[-80px] right-10 transition duration-500">
                    10
                  </h2>
                  <div className="flex justify-start items-start">
                    <img size={25} src={coinImg} className="w-10 mb-2" />
                    <h3 className="text-4xl font-semibold ">SOL</h3>
                  </div>
                  <p className="text-white">1222.00 %</p>

                  <button
                    href="#"
                    className=" inline-block mt-4 px-4  border bg-colorPrimary  border-colorPrimary rounded-3xl text-black hover:bg-white hover:text-black transition duration-500"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Repeat the same pattern for other card1s */}
            </div>
          </div>
        </Slider>
        <div className="my-3 md:flex justify-center">
          <button
            type="button"
            className="px-6 mt-2 md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            <Link href="/dashboard/api_settings">Bots For Future</Link>
          </button>
          <button
            type="button"
            className="px-6 mt-2 md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            Bots For Spot
          </button>
          <button
            type="button"
            className="px-6 mt-2 md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            Stable Coins
          </button>
          <button
            type="button"
            className="px-6 mt-2 md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            Sideways Bot
          </button>
          <button
            type="button"
            className="px-6 mt-2 md:m-3 py-3 text-white rounded-full bg-[#3b3b3b] w-72 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            Analyst
          </button>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-3 mb-10 mx-5">
        <div class="card11 transition-all duration-200 relative  transform hover:scale-105 mt-4 rounded-3xl border-[#ccc] inset-3 glow hover:scale-104 shadow-black">
          {/* <div class="circle11 w-24 h-24 bg-gradient-to-br from-green-300 to-colorPrimary rounded-full absolute animate-move-up6"></div>
          <div class="circle11 w-24 h-24 bg-gradient-to-br from-green-300 to-colorPrimary rounded-full absolute animate-move-down1"></div> */}
          <div
            class="card-inner11 w-full h-full bg-opacity-5 bg-colorPrimaryDark/30  rounded-3xl relative"
            style={{
              // backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-[#3b3b3b] w-full items-center flex rounded-3xl p-5 pb-3 pt-3">
              <div className="flex-col w-full justify-around items-center relative">
                <div className="">
                  <div className="absolute w-28 md:w-32 h-10 right-0 -top-3 rounded-br-3xl rounded-bl-3xl bg-colorPrimary flex justify-center items-center">
                    <div className="text-lg md:text-2xl text-black font-bold">
                      1297%
                    </div>
                  </div>
                  <div className="text-lg md:text-2xl text-white  font-semibold  flex items-center gap-2">
                    <img src={coinImg} className="w-10" />
                    Pikachu
                  </div>
                  <div className="avatar-group size-25 max-count-8 "></div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center px-3 pb-3 pt-1">
                <div className="flex items-center my-2">
                  <Tag
                    size="sm"
                    className="text-colorPrimary bg-[#3b3b3b] p-1 rounded-lg w-1/2 text-center"
                  >
                    Long
                  </Tag>
                  <Tag
                    size="sm"
                    className="text-colorPrimary bg-[#3b3b3b] p-1 rounded-lg w-1/2 text-center"
                  >
                    Min Req Bal : 350USDT
                  </Tag>
                </div>
                <div className="sm:flex sm:justify-between justify-center items-center pr-2 w-full">
                  <Avatar.Group
                    className="flex items-center justify-center"
                    size={27}
                    maxCount={6}
                  >
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={aelf} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={airswap} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={contentos} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wing} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wazirx} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wax} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                  </Avatar.Group>
                  <div className="flex gap-3 items-center justify-center mt-1">
                    <div className="border border-dashed text-[12px] rounded-md flex items-center px-4 py-1 cursor-pointer hover:border-colorPrimary hover:bg-colorPrimary hover:text-[#3b3b3b] transition-all transition-300 bg-[#3b3b3b] text-white">
                      Copy
                    </div>
                    <div className="text-[12px] border border-solid rounded-md flex items-center px-4 py-1 cursor-pointer hover:border-colorPrimary hover:bg-colorPrimary hover:text-[#3b3b3b] transition-all transition-300 bg-[#3b3b3b] text-white">
                      Detail
                    </div>
                  </div>
                </div>

                <div className="text-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card11 transition-all duration-200 relative  transform hover:scale-105 mt-4 rounded-3xl border-[#ccc] inset-3 glow hover:scale-104 shadow-black">
          {/* <div class="circle11 w-24 h-24 bg-gradient-to-br from-green-300 to-colorPrimary rounded-full absolute animate-move-up6"></div>
          <div class="circle11 w-24 h-24 bg-gradient-to-br from-green-300 to-colorPrimary rounded-full absolute animate-move-down1"></div> */}
          <div
            class="card-inner11 w-full h-full bg-opacity-5 bg-colorPrimaryDark/30  rounded-3xl relative"
            style={{
              // backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-[#3b3b3b] w-full items-center flex rounded-3xl p-5 pb-3 pt-3">
              <div className="flex-col w-full justify-around items-center relative">
                <div className="">
                  <div className="absolute w-28 md:w-32 h-10 right-0 -top-3 rounded-br-3xl rounded-bl-3xl bg-colorPrimary flex justify-center items-center">
                    <div className="text-lg md:text-2xl text-black font-bold">
                      1297%
                    </div>
                  </div>
                  <div className="text-lg md:text-2xl text-white  font-semibold  flex items-center gap-2">
                    <img src={contentos} className="w-10" />
                    Pikachu
                  </div>
                  <div className="avatar-group size-25 max-count-8 "></div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center px-3 pb-3 pt-1">
                <div className="flex items-center my-2">
                  <Tag
                    size="sm"
                    className="text-colorPrimary bg-[#3b3b3b] p-1 rounded-lg w-1/2 text-center"
                  >
                    Long
                  </Tag>
                  <Tag
                    size="sm"
                    className="text-colorPrimary bg-[#3b3b3b] p-1 rounded-lg w-1/2 text-center"
                  >
                    Min Req Bal : 350USDT
                  </Tag>
                </div>
                <div className="sm:flex sm:justify-between justify-center items-center pr-2 w-full">
                  <Avatar.Group
                    className="flex items-center justify-center"
                    size={27}
                    maxCount={6}
                  >
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={aelf} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={airswap} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={contentos} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wing} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wazirx} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wax} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                  </Avatar.Group>
                  <div className="flex gap-3 items-center justify-center mt-1">
                    <div className="border border-dashed text-[12px] rounded-md flex items-center px-4 py-1 cursor-pointer hover:border-colorPrimary hover:bg-colorPrimary hover:text-[#3b3b3b] transition-all transition-300 bg-[#3b3b3b] text-white">
                      Copy
                    </div>
                    <div className="text-[12px] border border-solid rounded-md flex items-center px-4 py-1 cursor-pointer hover:border-colorPrimary hover:bg-colorPrimary hover:text-[#3b3b3b] transition-all transition-300 bg-[#3b3b3b] text-white">
                      Detail
                    </div>
                  </div>
                </div>

                <div className="text-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card11 transition-all duration-200 relative  transform hover:scale-105 mt-4 rounded-3xl border-[#ccc] inset-3 glow hover:scale-104 shadow-black">
          {/* <div class="circle11 w-24 h-24 bg-gradient-to-br from-green-300 to-colorPrimary rounded-full absolute animate-move-up6"></div>
          <div class="circle11 w-24 h-24 bg-gradient-to-br from-green-300 to-colorPrimary rounded-full absolute animate-move-down1"></div> */}
          <div
            class="card-inner11 w-full h-full bg-opacity-5 bg-colorPrimaryDark/30  rounded-3xl relative"
            style={{
              // backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-[#3b3b3b] w-full items-center flex rounded-3xl p-5 pb-3 pt-3">
              <div className="flex-col w-full justify-around items-center relative">
                <div className="">
                  <div className="absolute w-28 md:w-32 h-10 right-0 -top-3 rounded-br-3xl rounded-bl-3xl bg-colorPrimary flex justify-center items-center">
                    <div className="text-lg md:text-2xl text-black font-bold">
                      1297%
                    </div>
                  </div>
                  <div className="text-lg md:text-2xl text-white  font-semibold  flex items-center gap-2">
                    <img src={aelf} className="w-10" />
                    Pikachu
                  </div>
                  <div className="avatar-group size-25 max-count-8 "></div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center px-3 pb-3 pt-1">
                <div className="flex items-center my-2">
                  <Tag
                    size="sm"
                    className="text-colorPrimary bg-[#3b3b3b] p-1 rounded-lg w-1/2 text-center"
                  >
                    Long
                  </Tag>
                  <Tag
                    size="sm"
                    className="text-colorPrimary bg-[#3b3b3b] p-1 rounded-lg w-1/2 text-center"
                  >
                    Min Req Bal : 350USDT
                  </Tag>
                </div>
                <div className="sm:flex sm:justify-between justify-center items-center pr-2 w-full">
                  <Avatar.Group
                    className="flex items-center justify-center"
                    size={27}
                    maxCount={6}
                  >
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={aelf} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={airswap} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={contentos} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wing} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wazirx} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wax} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                  </Avatar.Group>
                  <div className="flex gap-3 items-center justify-center mt-1">
                    <div className="border border-dashed text-[12px] rounded-md flex items-center px-4 py-1 cursor-pointer hover:border-colorPrimary hover:bg-colorPrimary hover:text-[#3b3b3b] transition-all transition-300 bg-[#3b3b3b] text-white">
                      Copy
                    </div>
                    <div className="text-[12px] border border-solid rounded-md flex items-center px-4 py-1 cursor-pointer hover:border-colorPrimary hover:bg-colorPrimary hover:text-[#3b3b3b] transition-all transition-300 bg-[#3b3b3b] text-white">
                      Detail
                    </div>
                  </div>
                </div>

                <div className="text-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card11 transition-all duration-200 relative  transform hover:scale-105 mt-4 rounded-3xl border-[#ccc] inset-3 glow hover:scale-104 shadow-black">
          {/* <div class="circle11 w-24 h-24 bg-gradient-to-br from-green-300 to-colorPrimary rounded-full absolute animate-move-up6"></div>
          <div class="circle11 w-24 h-24 bg-gradient-to-br from-green-300 to-colorPrimary rounded-full absolute animate-move-down1"></div> */}
          <div
            class="card-inner11 w-full h-full bg-opacity-5 bg-colorPrimaryDark/30  rounded-3xl relative"
            style={{
              // backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-[#3b3b3b] w-full items-center flex rounded-3xl p-5 pb-3 pt-3">
              <div className="flex-col w-full justify-around items-center relative">
                <div className="">
                  <div className="absolute w-28 md:w-32 h-10 right-0 -top-3 rounded-br-3xl rounded-bl-3xl bg-colorPrimary flex justify-center items-center">
                    <div className="text-lg md:text-2xl text-black font-bold">
                      1297%
                    </div>
                  </div>
                  <div className="text-lg md:text-2xl text-white  font-semibold  flex items-center gap-2">
                    <img src={airswap} className="w-10" />
                    Pikachu
                  </div>
                  <div className="avatar-group size-25 max-count-8 "></div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center px-3 pb-3 pt-1">
                <div className="flex items-center my-2">
                  <Tag
                    size="sm"
                    className="text-colorPrimary bg-[#3b3b3b] p-1 rounded-lg w-1/2 text-center"
                  >
                    Long
                  </Tag>
                  <Tag
                    size="sm"
                    className="text-colorPrimary bg-[#3b3b3b] p-1 rounded-lg w-1/2 text-center"
                  >
                    Min Req Bal : 350USDT
                  </Tag>
                </div>
                <div className="sm:flex justify-between items-center pr-2">
                  <Avatar.Group
                    className="flex items-end"
                    size={27}
                    maxCount={6}
                  >
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={aelf} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={airswap} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={contentos} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wing} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wazirx} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={wax} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                    <Avatar
                      size={27}
                      style={{
                        border: "1px solid #3b3b3b",
                        background: "#fff",
                        padding: "2px",
                      }}
                      icon={<img src={coinImg} />}
                    />
                  </Avatar.Group>
                  <div className="flex gap-3 items-center">
                    <div className="border border-dashed text-[12px] rounded-md flex items-center px-4 py-1 cursor-pointer hover:border-colorPrimary hover:bg-colorPrimary hover:text-[#3b3b3b] transition-all transition-300 bg-[#3b3b3b] text-white">
                      Copy
                    </div>
                    <div className="text-[12px] border border-solid rounded-md flex items-center px-4 py-1 cursor-pointer hover:border-colorPrimary hover:bg-colorPrimary hover:text-[#3b3b3b] transition-all transition-300 bg-[#3b3b3b] text-white">
                      Detail
                    </div>
                  </div>
                </div>

                <div className="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Botmainpage;
