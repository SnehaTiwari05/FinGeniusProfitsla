import React, { useEffect, useState } from 'react';
import { InfoCircleOutlined, UserOutlined, CopyOutlined } from '@ant-design/icons';
import { Col, Input, Row, Tooltip, message } from 'antd';
// import logo from '../../../assets/images/logo.png'
import logo from '../../assets/images/logo.png'
// import '../../../assets/css/Navbar.css';
import '../../assets/css/Navbar.css';
import { BsFillBellFill } from 'react-icons/bs';
import { FaUserAlt } from "react-icons/fa";
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getToken } from '../../authfunctions';
function Navbar() {
  const [inputValue, setInputValue] = useState('');
  const [profiledata,setprofiledata]=useState()
  const token = getToken()
  const Navigate = useNavigate()

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);
  };
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const logout = (() => {
    console.log('hello logout')
    localStorage.clear();
    message.success("Logout Successfully.")
    window.location.href = '/'
    // Navigate('/')
  })
  const getapiDetails = () => {
    const userData = {
        jwt: token,
    };
    console.log("userData")
    console.log(userData)
    axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: process.env.REACT_APP_API_PATH_USER + "view_profile",
        data: userData,
    })
        .then(async function (response) {
            const res = await response;
            // Assuming the API response is in the format: res.data.live (for live data) and res.data.paper (for paper data)
            console.log(res.data)
            setprofiledata(res.data)
        })
        .catch((err) => {
            console.log(err);
            message.error(err.response?.data?.error || "Failed to fetch API details");
        });
};
useEffect(() => {
    getapiDetails()
}, [])
  return (
    <>
      <div className="bg-[#3b3b3b] w-full h-[60px] py-1 mb-7 fixed z-30">
        <Row className='block'>
          <nav className=" flex justify-evenly items-center  lg:ml-24 xl:ml-8  mb-8">
            <Col md={8}>
              <div className=" flex items-center  text-black ml-2">
                <img src={logo} className="w-[45px] "></img>
                <span className="font-semibold text-xl tracking-tight text-white">
                  Profitsla
                </span>
                <div className="text-sm ml-16 text-center lg:flex-none text-white lg:flex-grow font-semibold ">
              Welcome {profiledata?.UserName}!
                 
                </div>
              </div>
            </Col>
            <div className="lg:hidden block">
              <button
                onClick={showDrawer}
                className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-white"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <div className="block flex-grow lg:flex lg:items-center lg:block hidden justify-around lg:justify-between">
              <Col md={8}>
                <div className="text-sm lg:w-[500px] font-semibold text-lg mx-28">
                  <Input
                    className="shadow appearance-none border rounded-full w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                      <Tooltip title="Copy">
                        <CopyOutlined
                          onClick={handleCopy}
                          style={{
                            color: "rgba(0, 0, 0, .45)",
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    }
                  />
                </div>
              </Col>
              <Col md={8}>
                <div className="text-sm flex lg:flex-row justify-start font-semibold text-lg xl:ml-28 mr-0">
                  <Link to="#" className=" p-2 space-x-3 rounded-md">
                    <BsFillBellFill
                      size={35}
                      className="text-colorPrimary "
                    />
                  </Link>
                  <Link to="/dashboard/profile" className=" p-2 space-x-3 rounded-md ">
                    <FaUserAlt size={30} className="text-[#fff] " />
                  </Link>

                  <Link to="#" className=" p-2 space-x-3 rounded-md">
                    <AiOutlineLogout size={30} className="text-white" onClick={logout} ></AiOutlineLogout>
                  </Link>
                </div>
              </Col>
            </div>
          </nav>
        </Row>
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={onClose}
          open={open}
          className="justify-end"
        >
          <div className="block justify-end">
            <div className="text-sm text-center  font-semibold text-lg ">
              Welcome{profiledata?.UserName}
            </div>
            <div className="text-sm  font-semibold text-lg">
              <Input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 bg-[#3b3b3b] text-white leading-tight focus:outline-none focus:shadow-outline"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Copy">
                    <CopyOutlined
                      onClick={handleCopy}
                      style={{
                        color: "#000",
                        cursor: "pointer",
                      }}
                    />
                  </Tooltip>
                }
              />
            </div>
            <div className="text-sm flex  font-semibold text-lg xl:ml-28 mr-0">
              <Link to="#" className=" p-2 space-x-3 rounded-md">
                <BsFillBellFill size={35} className="text-colorPrimary " />
                Notification
              </Link>
              <Link to="/dashboard/profile" className=" p-2 space-x-3 rounded-md ">
                <FaUserAlt size={30} className="text-[#fff] " />
              </Link>

            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Navbar;
