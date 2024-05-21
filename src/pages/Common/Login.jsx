import React, { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [value, setValue] = useState({ username: '', password: '' });
    const [isLabelAbove, setIsLabelAbove] = useState({ username: false, password: false });
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const Navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFocus = (name) => {
        setIsLabelAbove((prevState) => ({
            ...prevState,
            [name]: true,
        }));
    };

    const handleBlur = (name) => {
        setIsLabelAbove((prevState) => ({
            ...prevState,
            [name]: value[name] !== '',
        }));
    };

  
    const handleSubmit = () => {
        console.log(value)
        const postdata = {
            username:  value.username,
            password: value.password
        }
        axios({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            url: process.env.REACT_APP_API_PATH_USER + "login",
            data: postdata,
          })
            .then(async function (response) {
              const res = await response;
              console.log(res)
              if(res)
              {
                message.success(res.data.data)
                localStorage.setItem("token",res.data.jwt)
                console.log("res.data.data.jwt")
                console.log(res.data.jwt)
                Navigate('/dashboard')
              }
            })
            .catch((err) => {
              console.log(err)
              if(err.response.data.data)
              {
                message.error(err.response.data.data)
              }

            });
    }
    return (
      <>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1">
            <div className="md:mx-auto mt-2 justify-center md:w-5/12">
              <div className="text-center">
                <div className="text-3xl font-semibold mb-3">Log in</div>
                <div>
                  Don't have an account?{" "}
                  <Link
                    to="/"
                    className="text-colorPrimaryDark hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
                <div className="px-5 py-5  rounded-lg mt-5  lg:w-9/12 mx-auto">
                  <div className="relative my-4">
                    <label
                      htmlFor="username"
                      className={`absolute mx-36 left-2 text-sm transition-all duration-300 ${
                        isLabelAbove.username || value.username
                          ? "-top-2 bg-white text-xs text-gray-600"
                          : "top-2"
                      }`}
                    >
                      {"username"}
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="py-2 px-4 border border-slate-900 rounded-full focus:outline-none focus:border-blue-500 w-full"
                      value={value.username}
                      onChange={handleChange}
                      onFocus={() => handleFocus("username")}
                      onBlur={() => handleBlur("username")}
                      autoComplete="off"
                    />
                  </div>

                  

                  <div className="relative my-4">
                    <label
                      htmlFor="Password"
                      className={`absolute mx-36 left-2 text-sm transition-all duration-300 ${
                        isLabelAbove.password || value.password
                          ? "-top-2 bg-white text-xs text-gray-600"
                          : "top-2"
                      }`}
                    >
                      {"Password"}
                    </label>
                    <input
                      id="Password"
                      name="password"
                      type="password" // Change this from 'text' to 'password'
                      className="py-2 px-4 border border-slate-900 rounded-full focus:outline-none focus:border-blue-500 w-full"
                      value={value.password}
                      onChange={handleChange}
                      onFocus={() => handleFocus("password")}
                      onBlur={() => handleBlur("password")}
                      autoComplete="off"
                    />
                  </div>

                  <Checkbox
                   onChange={(e) => setIsCheckboxChecked(e.target.checked)}>
                  
                  Remember me </Checkbox>
                  <Button
                    htmlType="submit"
                    className="rounded-lg mt-5 bg-colorPrimaryDark text-black cursor-pointer hover:bg-colorPrimaryDark/70 px-5  w-full"
                    onClick={handleSubmit}
                    disabled={!isCheckboxChecked || isLoading}
                  >
                    <Link to="#">Login</Link>
                  </Button>
                  <div className="mt-1">
                    <Link
                      to="/forgetusername"
                      className="text-colorPrimaryDark hover:underline"
                    >
                      Forgot Username
                    </Link>
                    <Link
                      to="/forgetpassword"
                      className="text-colorPrimaryDark hover:underline"
                    >
                      {" "}
                      Password?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Login;
