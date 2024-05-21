import { Switch } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Apisidebarcomponent() {
    return (
        <>
            <div className="flex justify-center text-xl mr-10 mt-5 text-white">
                Api Panel
            </div>
            <button
                type="button"
                className="px-6 pt-1 pb-1 mt-2 text-black rounded-full w-full bg-white"
            >
                <Link to="/dashboard/api_settings" className="text-black">
                    Add API
                </Link>{" "}
            </button>
           
            <div className="flex justify-start text-lg  mt-2 text-white">
                My API
            </div>
            <div className="flex justify-between">
                <div className='text-white'>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                </div>
                <div className='text-white mb-2'>
                    <Switch className='bg-colorPrimary'/><br></br>
                    <Switch className='bg-colorPrimary'/><br></br>
                    <Switch className='bg-colorPrimary'/><br></br>
                </div>


            </div>
            <button
                type="button"
                className="px-6 pt-1 pb-1 mb-2 text-black rounded-full w-full bg-colorPrimary"
            >
                <Link to="/dashboard/api_settings/Spotconnectiondetails" className="text-black">
                    Select Exchange
                </Link>{" "}
            </button>
        </>
    )
}

export default Apisidebarcomponent
