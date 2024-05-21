import React from 'react'
import Binance from '../../../assets/images/binance.png'
import Logo from '../../../assets/images/logo.png'
import Lottie from 'react-lottie';
import * as animationData from '../../../assets/Loitte/exchange.json'
import { Link } from 'react-router-dom';
function ConnectionLoder() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
      <>
        <div className="text-center mt-3">
          <h4 className="text-lg font-bold">Connect to Binance</h4>
          <p className="text-sm ">
            Create your new API key called (API KEY Name)
          </p>
          <div className="flex justify-evenly mt-10">
            <div className="w-600 flex">
              <img src={Binance} className="w-[100px] h-[100px] me-10"></img>
              <Lottie options={defaultOptions} height={100} width={100} />
              <img src={Logo} className="w-[110px] h-[100px] mx-10"></img>
            </div>
          </div>
          <div className="flex justify-center bg-[#3b3b3b] p-3 text-white mt-10 my-6">
            <div className="text-start">
              <p className="text-lg mt-2">
                Before Proceeding complate the following mandatory steps :
              </p>
              <li>Whitelist all the IPs in your exchange</li>
              <li>
                Have at least 15 USDT in your FUTURES trading account / sub-
                account
              </li>
              <li>Enale FUTURES trading permission on HEDGE mode</li>
            </div>
          </div>

          <div className="flex justify-center me-6">
            <button
              type="button"
              className="px-6 pt-1 pb-1 m-3 rounded-full font-semibold bg-[#3b3b3b] text-white"
            >
              <Link to="/dashboard/api_settings">PREV</Link>
            </button>
            <button
              type="button"
              className="px-6 pt-1 pb-1 m-3 text-black rounded-full font-semibold bg-colorPrimary"
            >
              <Link to="/dashboard/api_settings/Connectionfailed">Connect</Link>
            </button>
          </div>
        </div>
      </>
    );
}

export default ConnectionLoder
