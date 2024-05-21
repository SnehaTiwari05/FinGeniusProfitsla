import React from 'react'
import { Button, Space, Table, Tag, Modal } from 'antd';
import animationData from '../../../assets/Loitte/Verified.json'
import Lottie from 'react-lottie';
function Verifyfirststep() {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        className: "#3b3b3b",
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <>
            <div className="pt-5 text-center text-xl bg-[#3b3b3b] text-white ">
                Are You sure want to Remove The API
            </div>
            <div className="p-0 m-0">
                <div className="p-3 text-center text-md bg-[#3b3b3b] text-white ">
                    We are currently checking the status of the API connectivity with our bots.
                </div>
                <div className="flex justify-center bg-[#3b3b3b]">
                    <Lottie options={defaultOptions}
                        height={100}
                        width={100}
                    />
                </div>
                <div className="flex justify-center bg-[#3b3b3b]">
                    <div className="w-30 bg">
                        <a href='/dashboard/APi_details/verifysteptwo'>Next</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Verifyfirststep
