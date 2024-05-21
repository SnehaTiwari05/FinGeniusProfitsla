import React, { useState } from 'react';
import FloatingLabelInput from './FloatingLabel';
import { Checkbox } from 'antd';


function Forgetusername() {
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
        <div className="container mx-auto mt-10 px-2">
          <div class="grid grid-cols-1">
            <div className="md:mx-auto mt-2 justify-center lg:w-5/12">
              <div className="text-center">
                <div className="text-lg md:text-3xl font-semibold mb-3">
                  Forgot your username?
                </div>
                <div>
                  <a
                    href="#"
                    className="text-slate-300 font-bold hover:underline"
                  >
                    Don’t worry. We’ll send it to your email address.{" "}
                  </a>
                </div>
                <div className="px-5 py-5   rounded-lg mt-5  md:w-9/12 mx-auto">
                  <FloatingLabelInput label="Email" />
                  <label
                    for="Email"
                    class="relative block rounded-full border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="email"
                      id="Email"
                      class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Email"
                    />

                    <span class="pointer-events-none absolute start-2/4  top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Email
                    </span>
                  </label>
                  <div className="rounded-lg mt-5 bg-colorPrimaryDark text-black cursor-pointer hover:bg-colorPrimaryDark/70 px-5 py-3 w-full">
                    Request username
                  </div>
                  <div className="mt-1">
                    {" "}
                    <a
                      href="/forgetusername"
                      className="text-colorPrimaryDark hover:underline"
                    >
                      Forgot Username /
                    </a>{" "}
                    <a
                      href="/forgetpassword"
                      className="text-colorPrimaryDark hover:underline"
                    >
                      {" "}
                      Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </>
    );
}

export default Forgetusername
