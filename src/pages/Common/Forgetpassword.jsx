import React, { useState } from 'react';
import FloatingLabelInput from './FloatingLabel';
import { Checkbox } from 'antd';


function Forgetpassword() {
    const [value, setValue] = useState('');
    const [isLabelAbove, setIsLabelAbove] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleFocus = () => {
        setIsLabelAbove(true);
    };

    const handleBlur = () => {
        setIsLabelAbove(value !== '');
    };
    return (
        <>

            <div className='container mx-auto mt-10 px-2'>
                <div class="grid grid-cols-1">

                    <div className="md:mx-auto mt-2 justify-center lg:w-5/12">
                        <div className='text-center'>
                            <div className='text-lg lg:text-3xl font-semibold mb-3'>Forgot your password?</div>
                            <div><a href="#" className='text-slate-300 font-bold hover:underline'>Don’t worry. We’ll send you an email to start
                                resetting your password.</a></div>
                            <div className='px-5 py-5  rounded-lg mt-5  md:w-9/12 mx-auto'>
                                <FloatingLabelInput label="Email" />

                                <div className='rounded-lg mt-5 bg-colorPrimaryDark text-black cursor-pointer hover:bg-colorPrimaryDark/70 px-5 py-3 w-full'>Reset password</div>
                                <div className='mt-1'> <a href="/forgetusername" className='text-colorPrimaryDark hover:underline'>Forgot Username /</a> <a href="/forgetpassword" className='text-colorPrimaryDark hover:underline'> Password?</a></div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Forgetpassword
