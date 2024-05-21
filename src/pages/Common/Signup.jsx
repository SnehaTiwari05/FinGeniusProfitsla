import React, { useEffect, useState } from "react";
import { Button, Checkbox, message } from "antd";
import axios from "axios";

function Signup() {
  const [value, setValue] = useState({
    username: "",
    emailid: "",
    password: "",
    conf_password: "",
  });
  const [isLabelAbove, setIsLabelAbove] = useState({
    username: false,
    emailid: false,
    password: false,
    conf_password: false,
  });
  const [checkpasswordvisibility, setCheckPasswordVisibility] =
    useState("hidden");

  const handleFocus = (name) => {
    setIsLabelAbove((prevState) => ({ ...prevState, [name]: true }));
    setCheckPasswordVisibility("block");
  };
  const handleBlur = (name) => {
    setIsLabelAbove((prevState) => ({
      ...prevState,
      [name]: value[name] !== "",
    }));
    setCheckPasswordVisibility("hidden");
  };
  const [checkboxes, setCheckboxes] = useState([
    false, // 8 characters
    false, // 1 lowercase letter
    false, // 1 uppercase letter
    false, // 1 number
    false, // 1 special character
  ]);

  const [password, setPassword] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValue((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleconf_passwordChange = (e) => {
    const newconf_password = e.target.value;
    setValue((prevState) => ({
      ...prevState,
      conf_password: newconf_password,
    }));
  };

  useEffect(() => {
    const requirementsMet = [
      password.length >= 8,
      /[a-z]/.test(password),
      /[A-Z]/.test(password),
      /\d/.test(password),
      /[@$!%*?&]/.test(password),
    ];
    setCheckboxes(requirementsMet);
  }, [password]);

  const passwordMatch = password === value.conf_password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { username, emailid, password, conf_password } = value;
    console.log(value);
    const userData = {
      username,
      emailid,
      password,
      conf_password,
    };
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: process.env.REACT_APP_API_PATH_USER + "register",
      data: userData,
    })
      .then(async function (response) {
        const res = await response;
        console.log(res);
        if (res) {
          message.success(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.error);
      });
  };

  return (
    <>
      <div className="container mx-auto mt-20 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-32">
          <div className="lg:mx-auto mt-2 justify-center">
            <button className=" bg-colorPrimary/40 rounded-full px-6 py-3">
              <div className="">Explore the product</div>
            </button>
            <div className="mt-5 ml-2 lg:w-9/12 w-100">
              <h3 className="lg:text-3xl font-semibold my-4 text-2xl">
                Introduction to Profitsla
              </h3>
              <h2 className="lg:text-lg">
                Join us for an interactive, introductory Cryptohopper
                experience. We’ll show you how to create Hoppers, connect your
                exchange, copy pro traders and build AIs.
              </h2>
            </div>

            <div className="flex lg:flex-row flex-col gap-5 justify-start items-center mt-10">
              <div className="w-72 rounded-xl h-56 relative bg-[#323952]"></div>
              <div>
                <div className="text-colorPrimaryDark mb-2">Can't Wait</div>
                <div>Watch a quick demo</div>
              </div>
            </div>
          </div>

          <div className="md:mx-auto mt-2 justify-center md:w-9/12">
            <div className="text-center">
              <div className="md:text-3xl font-semibold mb-3">
                Create an account
              </div>
              <div>
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-colorPrimaryDark hover:underline"
                >
                  Log in
                </a>
              </div>
              <div className="px-5 py-5 rounded-lg mt-5 md:w-9/12 mx-auto">
                <div className="relative my-4">
                  <label
                    htmlFor="Username"
                    className={`absolute mx-40 left-2 text-sm transition-all duration-300 ${
                      isLabelAbove.username || value.username
                        ? "-top-2 bg-white text-xs text-gray-600"
                        : "top-2"
                    }`}
                  >
                    {"Username"}
                  </label>
                  <input
                    id="Username"
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
                    htmlFor="emailid"
                    className={`absolute mx-40 left-2 text-sm transition-all duration-300 ${
                      isLabelAbove.emailid || value.emailid
                        ? "-top-2 bg-white text-xs text-gray-600"
                        : "top-2"
                    }`}
                  >
                    {"emailid"}
                  </label>
                  <input
                    id="emailid"
                    name="emailid"
                    type="text"
                    className="py-2 px-4 border border-slate-900 rounded-full focus:outline-none focus:border-blue-500 w-full"
                    value={value.emailid}
                    onChange={handleChange}
                    onFocus={() => handleFocus("emailid")}
                    onBlur={() => handleBlur("emailid")}
                    autoComplete="off"
                  />
                </div>

                <div className="relative my-4">
                  <label
                    htmlFor="Password"
                    className={`absolute mx-40 left-2 text-sm transition-all duration-300 ${
                      isLabelAbove.password || password
                        ? "-top-2 bg-white text-xs text-gray-600"
                        : "top-2"
                    }`}
                  >
                    {"Password"}
                  </label>
                  <input
                    id="Password"
                    type="password" // Change this from 'text' to 'password'
                    className="py-2 px-4 border border-slate-900 rounded-full focus:outline-none focus:border-blue-500 w-full"
                    value={password}
                    onChange={handlePasswordChange}
                    onFocus={() => handleFocus("password")}
                    onBlur={() => handleBlur("password")}
                    autoComplete="off"
                  />
                </div>

                <div className="relative my-4">
                  <label
                    htmlFor="conf_password"
                    className={`absolute mx-40  text-sm transition-all duration-300 ${
                      isLabelAbove.conf_password || value.conf_password
                        ? "-top-2 bg-white text-xs text-gray-600"
                        : "top-0 "
                    }`}
                  >
                    {"Confirm Password"}
                  </label>
                  <input
                    id="conf_password"
                    type="password"
                    className={`py-2 px-4 border rounded-full focus:outline-none focus:border-blue-500 w-full ${
                      passwordMatch ? "border-slate-900" : "border-red-500"
                    }`}
                    value={value.conf_password}
                    onChange={handleconf_passwordChange}
                    onFocus={() => handleFocus("conf_password")}
                    onBlur={() => handleBlur("conf_password")}
                    autoComplete="off"
                  />
                  {!passwordMatch && (
                    <span className="text-red-500 absolute bottom-0 left-2 text-xs">
                      Passwords do not match.
                    </span>
                  )}
                </div>

                <div className="mt-4 mb-4">
                  {checkboxes?.map((checked, index) => (
                    <div key={index} className={checkpasswordvisibility}>
                      <div className="grid grid-cols-1 text-center">
                        <span className="mx-3 text-start">
                          <Checkbox
                            checked={checked}
                            disabled
                            className="mx-2"
                          />
                          {index === 0 && "8 characters long"}
                          {index === 1 && "1 lowercase letter"}
                          {index === 3 && "1 number digits"}
                          {index === 2 && "1 uppercase letter"}
                          {index === 4 && "1 special character"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <Checkbox
                
                   onChange={(e) => setIsCheckboxChecked(e.target.checked)}>
                  {" "}
                  I agree to Profitsla's{" "}
                  <a
                    href="#"
                    className="text-colorPrimaryDark mt-5 hover:underline hover:text-colorPrimaryDark"
                  >
                    Terms of Service
                  </a>
                </Checkbox>
                <Button
                  onClick={handleSubmit}
                  disabled={!isCheckboxChecked || isLoading}
                  className="rounded-full bg-colorPrimaryDark text-black cursor-pointer hover:bg-colorPrimaryDark/70 w-full"
                ><span className="mb-5 p-0">Signup</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
