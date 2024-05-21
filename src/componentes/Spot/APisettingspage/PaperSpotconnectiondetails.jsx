import { Alert, Checkbox } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function PaperSpotconnectiondetails() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(inputValue);
        // You can add any additional logic here, such as showing a success message
    };

    return (
        <>
            <div className="text-center">
                <div className='text-slate-900 mt-2'>Set up your keys</div>
                <div className="font-bold text-lg">
                    Create your API keys and Securely Connect your Exchange to Profitsla
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div class="">
                    <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 m-4">   
                        <div class="mb-4">
                            <div className="text-center bg-[#3b3b3b] text-white p-2 rounded-sm">
                              Paper Spot API
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Api Key Name
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Api Key Name" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Api Key
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="  Api Key " />
                        </div>
                        <div class="">
                            <button class="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                <Link to='/dashboard/api_settings'>Prev</Link>
                            </button>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                <Link to='/dashboard/api_settings/ConnectionLoder'>Next</Link>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="text-center mt-12">
                    <p className='text-lg'>How to create your api key on binance ? </p>
                    <button type='button' className='p-2 bg-colorPrimary rounded-xl mt-5'>Learn How</button>

                </div>
            </div>
        </>
    )
}

export default PaperSpotconnectiondetails
