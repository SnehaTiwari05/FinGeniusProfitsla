import React from 'react'
import { useState } from 'react';

import BOT from '../../assets/images/bot.png'
import coinimg1 from '../../assets/images/b1.png'
import coinimg2 from '../../assets/images/e1.png'
import coinimg3 from '../../assets/images/g1.png'
import coinimg4 from '../../assets/images/h5.png'
import coinimg5 from '../../assets/images/23.png'
import { Modal, Radio } from 'antd'
function SpotBotDetails() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState(null);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const showModalgolive = () => {
        setIsModalOpen1(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleOk1 = () => {
        setIsModalOpen1(false);
    };
    const handleCancel1 = () => {
        setIsModalOpen1(false);
    };

    const handleCoinClick = (coinId) => {
        setSelectedCoin(coinId);
    };

    return (
        <>
            <div className="w-full">
                <div className="bg-colorPrimary m-0 p-0">
                    <div className="grid md:grid-cols-3">
                        <div>
                            <div className="md:flex justify-start ml-4 mt-1 mb-1">

                                <img alt="Bot_placeholder" src={BOT} className='w-[130px] mx-16' />
                                <div className='text-4xl font-bold mt-11'>Bot Name
                                    <div className='text-sm'>
                                        <div className="flex justify-between">
                                            <p>Bot ID:</p>
                                            <p>B-001</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>Live:</p>
                                            <p>B-002</p>
                                        </div> <div className="flex justify-between">
                                            <p>Bot ID:</p>
                                            <p>B-001</p>
                                        </div>
                                        <p></p>
                                        <p>Avg Profit</p>
                                    </div>
                                </div>

                            </div>
                            <div className="mx-5 mt-5">
                                <form>
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <label>Start Date </label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>
                                            <label>End Date </label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>
                                            <label>Num of Days</label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>
                                            <label>Time Frame</label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>
                                            <label>Invest</label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>
                                        </div>
                                        <div>
                                            <label>BaseOrderVol </label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>

                                            <label>Num of Days</label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>
                                            <label>Time Frame</label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>
                                            <label>Invest</label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>
                                            <label>SubsequentOrderValue</label>
                                            <input className='m-2 w-[120px] rounded'></input><br></br>
                                        </div>


                                    </div>
                                    <div className="ms-10">
                                        <button type='button' onClick={showModal} className='px-6 pt-1 pb-1 m-3 text-white rounded-full font-semibold bg-[#3b3b3b]'>RUN</button>
                                        <button type='button' className='px-6 pt-1 pb-1 m-3 text-white rounded-full font-semibold bg-[#3b3b3b]'>SAVE</button>
                                        <button type='button' onClick={showModalgolive} className='px-6 pt-1 pb-1 m-3 text-white rounded-full font-semibold bg-[#3b3b3b]'>GO LIVE</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                        <Modal className='bg-black p-0 rounded-full' open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel} width={1000}>
                            <div className="bg-black m-0 p-0">
                                <div className="mx-10">
                                    <div className='text-start text-xl font-bold text-white  '>Back Test :  Bot Name</div>
                                    <div className='text-start text-xl font-bold text-white  '>Bot ID : 83799</div>

                                </div>
                                <div className='text-center text-white text-lg'>Select Coin</div>
                                <div className='text-xl font-semibold  mb-2 bg-[#3b3b3b] mx-10 p-3 rounded-full text-white'>
                                    <div className="flex  justify-around">
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="First Coin" src={coinimg1} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="aa" src={coinimg2} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="aa" src={coinimg3} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="aa" src={coinimg4} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="aa" src={coinimg5} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-2 mx-10">
                                    <div className='text-center'>
                                        <label className='text-white'>Start Date </label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>
                                        <label className='text-white'>End Date </label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>
                                        <label className='text-white'>Num of Days</label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>
                                        <label className='text-white'>Time Frame</label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>
                                        <label className='text-white'>Invest</label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>
                                    </div>
                                    <div className='text-center'>

                                        <label className='text-white'>BaseOrderVol </label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>

                                        <label className='text-white'>Num of Days</label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>
                                        <label className='text-white'>Time Frame</label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>
                                        <label className='text-white'>Invest</label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>
                                        <label className='text-white'>SubsequentOrderValue</label>
                                        <input className='m-2 w-[120px] rounded'></input><br></br>
                                    </div>

                                </div>
                                <div className="flex justify-center">

                                    <button type='button' className='px-6 pt-1 pb-1 m-3 text-white rounded-full font-semibold bg-[#3b3b3b]'>RUN TEST</button>
                                </div>
                            </div>

                        </Modal>
                        <Modal className='bg-black p-0 rounded-full' open={isModalOpen1} footer={null} onOk={handleOk1} onCancel={handleCancel1} width={1000}>
                            <div className="bg-black m-0 p-0">
                                <div className="mx-10">
                                    <div className='text-start text-xl font-bold text-white  '>Back Test :  Bot Name</div>
                                    <div className='text-start text-xl font-bold text-white  '>Bot ID : 83799</div>

                                </div>
                                <div className='text-center text-white text-lg'>Select Coin</div>
                                <div className='text-xl font-semibold  mb-2 bg-[#3b3b3b] mx-10 p-3 rounded-full text-white'>
                                    <div className="flex  justify-around">
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="aa" src={coinimg1} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="aa" src={coinimg2} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="aa" src={coinimg3} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="aa" src={coinimg4} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">

                                                <img alt="aa" src={coinimg5} className='w-10' />
                                            </div>
                                            <div className='text-center text-sm'>Hit Rate: 99%</div>
                                            <div className='text-center text-sm'>profit: 9.78%</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-2 mx-10">
                                    <div className='text-start ml-10'>
                                        <label className='text-white'>Investment</label><br></br>
                                        <label className='text-white'>Base Order Volume</label><br></br>
                                        <label className='text-white'>Start Date </label><br></br>
                                        <label className='text-white'>Start Date </label><br></br>

                                    </div>
                                    <div className='text-center'>

                                        <div className='text-center text-white text-lg'>Select Exchange</div>
                                        <Radio className='text-white'>Binance Future</Radio>;
                                        <Radio className='text-white'>Binance</Radio>;
                                        <Radio className='text-white'>Bybit</Radio>;

                                    </div>

                                </div>
                                <div className="flex justify-center">

                                    <button type='button' className='px-6 pt-1 pb-1 m-3 text-white rounded-full font-semibold bg-[#3b3b3b]'>RUN TEST</button>
                                </div>
                            </div>

                        </Modal>
                        <div className='col-span-2'>

                            <div className='text-xl font-semibold lg:mx-16 mt-2 mb-2 bg-[#3b3b3b] p-3 xl:rounded-full text-white'>
                                <div className='text-center'>Select Coin</div>
                                <div className="lg:flex lg:justify-around text-center justify-center">
                                    <div>
                                        <div className="flex justify-center">
                                            <img alt="aa"
                                                src={coinimg1}
                                                className='xl:w-20 w-10'
                                                onClick={() => handleCoinClick(1)}
                                            />
                                        </div>
                                        <div className="flex justify-center">
                                            <Radio
                                                className='mx-3'
                                                checked={selectedCoin === 1}
                                                onClick={() => handleCoinClick(1)}
                                            />
                                        </div>
                                        <div className='text-center text-sm'>Hit Rate: 99%</div>
                                        <div className='text-center text-sm'>Profit: 9.78%</div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center">
                                            <img alt="aa"
                                                src={coinimg2}
                                                className='xl:w-20 w-10'
                                                onClick={() => handleCoinClick(2)}
                                            />
                                        </div>
                                        <div className="flex justify-center">
                                            <Radio
                                                className='mx-3'
                                                checked={selectedCoin === 2}
                                                onClick={() => handleCoinClick(2)}
                                            />
                                        </div>
                                        <div className='text-center text-sm'>Hit Rate: 99%</div>
                                        <div className='text-center text-sm'>Profit: 9.78%</div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center">
                                            <img alt="aa"
                                                src={coinimg3}
                                                className='xl:w-20 w-10'
                                                onClick={() => handleCoinClick(3)}
                                            />
                                        </div>
                                        <div className="flex justify-center">
                                            <Radio
                                                className='mx-3'
                                                checked={selectedCoin === 3}
                                                onClick={() => handleCoinClick(3)}
                                            />
                                        </div>
                                        <div className='text-center text-sm'>Hit Rate: 99%</div>
                                        <div className='text-center text-sm'>Profit: 9.78%</div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center">
                                            <img alt="aa"
                                                src={coinimg4}
                                                className='xl:w-20 w-10'
                                                onClick={() => handleCoinClick(4)}
                                            />
                                        </div>
                                        <div className="flex justify-center">
                                            <Radio
                                                className='mx-3'
                                                checked={selectedCoin === 4}
                                                onClick={() => handleCoinClick(4)}
                                            />
                                        </div>
                                        <div className='text-center text-sm'>Hit Rate: 99%</div>
                                        <div className='text-center text-sm'>Profit: 9.78%</div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center">
                                            <img alt="aa"
                                                src={coinimg5}
                                                className='xl:w-20 w-10'
                                                onClick={() => handleCoinClick(5)}
                                            />
                                        </div>
                                        <div className="flex justify-center">
                                            <Radio
                                                className='mx-3'
                                                checked={selectedCoin === 5}
                                                onClick={() => handleCoinClick(5)}
                                            />
                                        </div>
                                        <div className='text-center text-sm'>Hit Rate: 99%</div>
                                        <div className='text-center text-sm'>Profit: 9.78%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex lg:justify-around">
                                <div className='mt-10'>
                                    <div className='text-center text-sm text-black font-bold'>Invested</div>
                                    <div className='text-center text-sm text-black font-bold'>Current Asset Value</div>
                                    <div className='text-center text-sm text-black font-bold'>Balance</div>
                                    <div className='text-center text-sm text-black font-bold'>Current Trade Value</div>
                                    <div className='text-center text-sm text-black font-bold'>Volume Traded</div>
                                    <div className='text-center text-sm text-black font-bold'>Asset Quantity</div>
                                </div>
                                <div className='mt-10'>
                                    <div className='text-center text-sm text-black font-bold'>Total Trades</div>
                                    <div className='text-center text-sm text-black font-bold'>Winning trades</div>
                                    <div className='text-center text-sm text-black font-bold'>Losing Trades</div>
                                    <div className='text-center text-sm text-black font-bold'>Open Trades</div>
                                    <div className='text-center text-sm text-black font-bold'>Closed Trades</div>
                                    <div className='text-center text-sm text-black font-bold'>Hit Rate</div>
                                </div>
                                <div className='mt-10'>
                                    <div className='text-center text-sm text-black font-bold'>Total Profit</div>
                                    <div className='text-center text-sm text-black font-bold'>Total Profit %</div>
                                    <div className='text-center text-sm text-black font-bold'>Avg. Profit</div>
                                    <div className='text-center text-sm text-black font-bold'>Avg. Profit %</div>
                                    <div className='text-center text-sm text-black font-bold'>Cumulative Profit</div>
                                    <div className='text-center text-sm text-black font-bold'>Cumulative Profit %</div>
                                </div>
                                <div className='mt-10'>
                                    <div className='text-center text-sm text-black font-bold'>Max Drawdown</div>
                                    <div className='text-center text-sm text-black font-bold'>Avg Drawdown</div>
                                    <div className='text-center text-sm text-black font-bold'>Max Runup</div>
                                    <div className='text-center text-sm text-black font-bold'>Avg Runup</div>
                                    <div className='text-center text-sm text-black font-bold'>Sharpe Ratio</div>
                                    <div className='text-center text-sm text-black font-bold'>Expected Return</div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>

            </div>
            <div className="bg-black overflow-x-auto">
                <table className="border-collapse borde ">
                    <thead className='bg-black m-10'>
                        <tr className='w-20 p-10'>
                            <th className="border border-none text-white text-center p-3 ">TOTAL</th>
                            <th className="border border-none text-white text-center px-10 ">WINS</th>
                            <th className="border border-none text-white text-center px-10 ">LOSSES</th>
                            <th className="border border-none text-white text-center px-10 ">WIN RATE</th>
                            <th className="border border-none text-white text-center px-10 ">RATING</th>
                            <th className="border border-none text-white text-center px-10 ">BEST</th>
                            <th className="border border-none text-white text-center px-10 ">CURRENT</th>
                            <th className="border border-none text-white text-center px-10 ">K</th>
                            <th className="border border-none text-white text-center px-10 ">D</th>
                            <th className="border border-none text-white text-center px-10 ">A</th>
                            <th className="border border-none text-white text-center px-10 ">GPM</th>
                            <th className="border border-none text-white text-center px-10 ">XPM</th>
                            <th className="border border-none text-white text-center px-10 ">K</th>
                            <th className="border border-none text-white text-center px-10 ">A</th>
                            <th className="border border-none text-white text-center px-10 ">GMP</th>
                            <th className="border border-none text-white text-center px-10 ">XMP</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                            <td className="border border-none text-white text-center p-3 ">61</td>
                        </tr>
                        <tr>
                            <td className="border border-none text-white text-center p-3 ">9.78</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                        </tr>
                        <tr>
                            <td className="border border-none text-white text-center p-3 ">9.78</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                            <td className="border border-none text-white text-center p-3 ">0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SpotBotDetails
