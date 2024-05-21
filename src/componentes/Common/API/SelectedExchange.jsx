import React from 'react'
import { Link } from 'react-router-dom';

function SelectedExchange() {
    return (
      <>
        <div className="items-center text-center my-4">
          <h6>Select your Preffered Trading Type</h6>
        </div>
        <div className="mt-3  flex justify-center gap-2">
          <button
            type="button"
            className=" text-colorPrimary py-3 pb-3 rounded-full bg-[#3b3b3b] w-72"
          >
            <Link to="/dashboard/api_settings/Spotconnectiondetails">
              Binance Spot
            </Link>
          </button>
          <button
            type="button"
            className="py-3 pb-3 text-colorPrimary rounded-full bg-[#3b3b3b] w-72"
          >
            <Link to="/dashboard/api_settings/PaperSpotconnectiondetails">
              Paper Spot
            </Link>
          </button>
        </div>
        <div className="mt-3  flex justify-center gap-2">
          <button
            type="button"
            className="py-3 pb-3 text-colorPrimary rounded-full bg-[#3b3b3b] w-72"
          >
            <Link to="/dashboard/api_settings/Futureconnectionform">
              Binance Future
            </Link>
          </button>
          <button
            type="button"
            className="py-3 pb-3 text-colorPrimary rounded-full bg-[#3b3b3b] w-72"
          >
            <Link to="/dashboard/api_settings/Paperfutureconnectiondetails">
              Paper Future
            </Link>
          </button>
        </div>
      </>
    );
}

export default SelectedExchange;
