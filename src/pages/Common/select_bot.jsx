import React from 'react'
import { FaRobot } from "react-icons/fa";
import BOT from '../../assets/images/bot.png'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import verified from '../../assets/Loitte/Verified.json'

function SelectBot() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const movies = [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        // Add more movies...
      ]
    return (
        <>
            <div className="bg-colorPrimary m-0 p-0">
                <div className="grid md:grid-cols-2">
                    <div>

                        <div className="mx-3 mt-5 flex">
                            <FaRobot size={30} className='mx-3'></FaRobot> <p className='mt-1 text-lg'>
                                The crypto bot that does the work for you.
                            </p>
                        </div>
                        <div className='text-xl font-semibold mx-16 mt-2 mb-2 '>
                            Unleash Your Trading Potential Today!
                        </div>
                        <div className='text-md font-semibold mx-16 mt-2 mb-2 '>
                            Profitsla's Cryptobots automate cryptocurrency trading with customizable strategies, technical analysis, real-time data, portfolio management, risk controls, notifications, multi-exchange support, and security features for efficient and profitable trading.

                        </div>
                        <div className="ms-10">
                            <button type='button' className='px-6 pt-1 pb-1 m-3 text-white rounded-full bg-[#3b3b3b]'>Results</button>
                            <button type='button' className='px-6 pt-1 pb-1 m-3  rounded-full border border-[#3b3b3b]'>Learn More</button>
                        </div>

                    </div>
                    <div>
                        <div className="flex justify-center mt-1 mb-1">

                            <img src={BOT} className='w-[150px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="w-1/5 p-4 m-2 bg-gray-200 rounded shadow"
                    >
                        <h3 className="text-xl font-semibold">{movie.title}</h3>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-1 mx-10 mt-0 mb-0'>
                <div>
                    <div className='text-xl mx-5 mt-5 font-semibold'>Top 10 Tranding Bots</div>
                    <Slider {...settings} className='mt-0'>
                        <div className='lg:text-[10rem] text-[8rem] text-center position: relative'>
                            1
                        </div>
                        <div className='lg:text-[10rem] text-[8rem] text-center'>
                            2
                        </div>
                        <div className='lg:text-[10rem] text-[8rem] text-center'>
                            3
                        </div>
                        <div className='lg:text-[10rem] text-[8rem] text-center'>
                            4
                        </div>
                        <div className='lg:text-[10rem] text-[8rem] text-center'>
                            5
                        </div>
                        <div className='lg:text-[10rem] text-[8rem] text-center'>
                            6
                        </div>
                        <div className='lg:text-[10rem] text-[8rem] text-center'>
                            7
                        </div>
                        <div className='lg:text-[10rem] text-[8rem] text-center'>
                            8
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='grid grid-cols-1 mx-10'>
                <div>
                    <div className='text-2xl mx-5 mt-2 mb-2 font-semibold'>Bots For Spot</div>
                    <Slider {...settings}>
                        <div className='text-[14rem] mx-26 '>
                            <div className='text-[14rem] mx-10'>
                                <Link to="/dashboard/botdetailsSpot">
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]'></div>
                                </Link>
                            </div>
                        </div>
                        <div className='text-[14rem] mx-26 '>
                            <div className='text-[14rem] mx-10'>
                                <Link to="/dashboard/botdetailsSpot">
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]'></div>
                                </Link>
                            </div>
                        </div> <div className='text-[14rem] mx-26 '>
                            <div className='text-[14rem] mx-10'>
                                <Link to="/dashboard/botdetailsSpot">
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]'></div>
                                </Link>
                            </div>
                        </div> <div className='text-[14rem] mx-26 '>
                            <div className='text-[14rem] mx-10'>
                                <Link to="/dashboard/botdetailsSpot">
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]'></div>
                                </Link>
                            </div>
                        </div> <div className='text-[14rem] mx-26 '>
                            <div className='text-[14rem] mx-10'>
                                <Link to="/dashboard/botdetailsSpot">
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]'></div>
                                </Link>
                            </div>
                        </div>
                        <div className='text-[14rem] mx-26 '>
                            <div className='text-[14rem] mx-10'>
                                <Link to="/dashboard/botdetailsSpot">
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]'></div>
                                </Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='grid grid-cols-1 mx-10'>
                <div>
                    <div className='text-2xl mx-5 mt-2 mb-2 font-semibold'>Bots For Future</div>
                    <Slider {...settings}>
                        <div className='text-[14rem] mx-26 '>
                            <Link to="/dashboard/botdetailsfuture">
                                <div className='text-[14rem] mx-10'>
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]' href='/dashboard/botdetailsfuture'></div>
                                </div>
                            </Link>
                        </div>
                        <div className='text-[14rem] mx-26 '>
                            <Link to="/dashboard/botdetailsfuture">
                                <div className='text-[14rem] mx-10'>
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]' href='/dashboard/botdetailsfuture'></div>
                                </div>
                            </Link>
                        </div> <div className='text-[14rem] mx-26 '>
                            <Link to="/dashboard/botdetailsfuture">
                                <div className='text-[14rem] mx-10'>
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]' href='/dashboard/botdetailsfuture'></div>
                                </div>
                            </Link>
                        </div> <div className='text-[14rem] mx-26 '>
                            <Link to="/dashboard/botdetailsfuture">
                                <div className='text-[14rem] mx-10'>
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]' href='/dashboard/botdetailsfuture'></div>
                                </div>
                            </Link>
                        </div> <div className='text-[14rem] mx-26 '>
                            <Link to="/dashboard/botdetailsfuture">
                                <div className='text-[14rem] mx-10'>
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]' href='/dashboard/botdetailsfuture'></div>
                                </div>
                            </Link>
                        </div> <div className='text-[14rem] mx-26 '>
                            <Link to="/dashboard/botdetailsfuture">
                                <div className='text-[14rem] mx-10'>
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]' href='/dashboard/botdetailsfuture'></div>
                                </div>
                            </Link>
                        </div> <div className='text-[14rem] mx-26 '>
                            <Link to="/dashboard/botdetailsfuture">
                                <div className='text-[14rem] mx-10'>
                                    <div className='w-52 rounded-xl h-36  bg-[#323952]' href='/dashboard/botdetailsfuture'></div>
                                </div>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SelectBot
