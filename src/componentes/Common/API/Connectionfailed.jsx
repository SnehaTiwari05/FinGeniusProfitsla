import { Alert } from 'antd'
import React from 'react'
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Connectionfailed() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[600px] shadow p-5">
          <Alert message="Connection Failed" className='text-center text-lg text-red-600' type="error" showIcon />
          <div className='text-center mt-3 mb-3'>
            <p className='text-md'>Fix the error below to connect to Binance</p>
          </div>
          <hr></hr>
          <div className="border-top font-bold text-lg text-center">
            SPOT ERROR
            <hr></hr>
            <div className="flex justify-center">
              <Alert message="Please check if you have entered your API key correctly." className='text-start text-md font-normal text-black bg-transparent border-none' type="error" showIcon />
            </div>
          </div>
          <hr></hr>
          <div className="border-top font-bold text-lg text-center">
            IP WHITELISTING - ERROR
            <hr></hr>
            <div className="flex justify-center">
              <Alert message="Please check if you have entered your API key correctly." className='text-start text-md font-normal text-black bg-transparent border-none' type="error" showIcon />
            </div>
            <div className='flex justify-center text-sm font-normal mt-3 '>
              Show Details <BsChevronCompactDown className='mt-1' />
            </div>
            <div className="flex justify-center ">
              <button type='button' className='bg-colorPrimary  text-black rounded-md w-40 mt-3'><Link to='/dashboard/APi_details'>TRY AGAIN</Link></button>
            </div>
            <button type='button' className='border-1 text-sm  text-black rounded-md  mt-3'>LIVE CHAT WITH SUPPORT</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Connectionfailed
