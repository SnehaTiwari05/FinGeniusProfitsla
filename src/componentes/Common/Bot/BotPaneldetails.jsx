import { Switch } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function BotPaneldetails() {
    return (
        <>
            <div className="flex justify-center text-xl mr-10 mt-5 text-white">
                Bot Details
            </div>
            <button
                type="button"
                className="px-6 pt-1 pb-1 mt-2 text-black rounded-full w-full bg-colorPrimary"
            >
                <Link to="/dashboard/api_settings" className="text-black">
                Basic Bot
                </Link>{" "}
            </button>
            <button
                type="button"
                className="px-6 pt-1 pb-1 mt-2 text-black rounded-full w-full bg-colorPrimary"
            >
                <Link to="/dashboard/api_settings" className="text-black">
                Advance BOt
                </Link>{" "}
            </button>
            <button
                type="button"
                className="px-6 pt-1 pb-1 mt-2 text-black rounded-full w-full bg-colorPrimary"
            >
                <Link to="/dashboard/api_settings" className="text-black">
                Saved Bot
                </Link>{" "}
            </button>
            <button
                type="button"
                className="px-6 pt-1 pb-1 mt-2 text-black rounded-full w-full bg-colorPrimary"
            >
                <Link to="/dashboard/api_settings" className="text-black">
                Active Bot
                </Link>{" "}
            </button>
            <button
                type="button"
                className="px-6 pt-1 pb-1 mt-2 text-black rounded-full w-full bg-colorPrimary"
            >
                <Link to="/dashboard/api_settings" className="text-black">
                Create Bot
                </Link>{" "}
            </button>


        </>
    )
}

export default BotPaneldetails
