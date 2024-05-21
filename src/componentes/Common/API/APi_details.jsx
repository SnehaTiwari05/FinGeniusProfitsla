import { Button, Space, Table, Tag, Modal, Checkbox, message, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import animationData from '../../../assets/Loitte/Verified.json';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { getToken } from '../../../authfunctions';
import axios from 'axios';
import { DeleteOutlined } from "@ant-design/icons";


function APi_details() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [apidetails, setapidetails] = useState([])
    const token = getToken()

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };
    const handlethirdnext = () => {
        setIsModalOpen(false)
    };

    const getapiDetails = () => {
        const userData = {
            jwt: token,
        };
        console.log("userData")
        console.log(userData)
        axios({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            url: process.env.REACT_APP_API_PATH_USER + "user_apis",
            data: userData,
        })
            .then(async function (response) {
                const res = await response;
                // Assuming the API response is in the format: res.data.live (for live data) and res.data.paper (for paper data)
                const liveData = res.data.live || [];
                const paperData = res.data.paper || [];
                console.log(res)
                setapidetails([...liveData, ...paperData]);
            })
            .catch((err) => {
                console.log(err);
                message.error(err.response?.data?.error || "Failed to fetch API details");
            });
    };
    console.log("apidetails")
    console.log(apidetails)
    useEffect(() => {
        getapiDetails()
    }, [])
    const ExchangeComponent = ({ onNext }) => {



        const handleClick = () => {
            onNext();
        };

        return (
          <>
            <div className="pt-5 text-center  text-xl bg-[#3b3b3b] text-white ">
              Are You sure want to Remove The API
            </div>
            <div className="p-0 m-0">
              <div className="p-3 text-center text-md bg-[#3b3b3b] text-white ">
                We are currently checking the status of the API connectivity
                with our bots.
              </div>
              <div className="flex justify-center bg-[#3b3b3b]">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex justify-center bg-[#3b3b3b]">
                <div className="">
                  <button
                    onClick={handleClick}
                    className="mt-2 bg-colorPrimary p-2 w-20 rounded-full mx-1"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        );
    };

    const SecondComponent = ({ onNext, onBack }) => {
        const handleClick = () => {
            onNext();
        };

        const handleBackClick = () => {
            onBack();
        };

        return (
            <>
                <div className="pt-5 text-center text-xl bg-[#3b3b3b] text-white ">
                    Your API is linked with Following Bot
                </div>
                <div className="p-0 m-0">
                    <div className="p-3 text-center text-md bg-[#3b3b3b] text-white ">
                        Open Orders
                    </div>
                    <Table columns={columns2} size='small' />
                    <div className="flex justify-center bg-[#3b3b3b]">
                        <button onClick={() => setIsModalOpen(false)} className='mt-2 bg-colorPrimary p-2 w-20 rounded-full mx-1'>Cancel</button>
                        <button onClick={handleClick} className=' mt-2 bg-colorPrimary p-1 w-20 rounded-full mx-1'>Next</button>
                    </div>
                </div>
            </>
        );
    };

    const ThirdComponent = ({ onNext, onBack }) => {
        const handleClick = () => {
            onNext();
        };

        const handleBackClick = () => {
            onBack();
        };

        return (
            <>
                <div className="pt-5 text-center text-xl bg-[#3b3b3b] text-white ">
                    Your API is linked with Following Bot
                </div>
                <div className="p-0 m-0">

                    <div className="flex  justify-center p-3 text-center text-md bg-[#3b3b3b] text-white ">
                        <div className="bg-colorPrimary w-full mx-2 text-black text-lg rounded">
                            <Checkbox>
                                Close all the Trade in Market Price
                            </Checkbox>
                        </div>
                        <div className="bg-colorPrimary w-full mx-2 text-black text-lg rounded">
                            <Checkbox>
                                Keep all the assets in Your Exchange
                            </Checkbox>
                        </div>
                    </div>
                    <div className="flex justify-center bg-[#3b3b3b]">
                        <button onClick={() => setIsModalOpen(false)} className='mt-2 bg-colorPrimary p-2 w-20 rounded-full mx-1'>Cancel</button>
                        <button onClick={handlethirdnext} className=' mt-2 bg-colorPrimary p-1 w-20 rounded-full mx-1'>Next</button>
                    </div>
                </div>
            </>
        );
    };
    const renderComponent = () => {
        switch (currentStep) {
            case 1:
                return <ExchangeComponent onNext={handleNext} />;
            case 2:
                return <SecondComponent onNext={handleNext} onBack={handleBack} />;
            case 3:
                return <ThirdComponent onNext={handleNext} onBack={handleBack} />;
            default:
                return null;
        }
    };
    function shortenKey(key) {
        const firstThreeChars = key.substring(0, 3);
        const lastThreeChars = key.substring(key.length - 3);
        return `${firstThreeChars}...${lastThreeChars}`;
    }
    console.log("apidetails")
    console.log(apidetails.length)
    const dataSource = []; // Your data source, an array of objects
    for (let i = 0; i < apidetails.length; i++) {
        const apiKey = apidetails[i]?.Creds.API_KEY;
        const secretKey = apidetails[i]?.Creds.SECRET_KEY;
        dataSource.push({
            created_at: apidetails[i]?.created_at,
            ApiID: apidetails[i]?.ApiID,
            Exchange: apidetails[i]?.Exchange,
            Name: apidetails[i]?.Name,
            API_KEY: apiKey ? shortenKey(apiKey) : "",
            API_KEY2: apiKey ? apiKey : "",
            SECRET_KEY: secretKey ? shortenKey(secretKey) : "",
            SECRET_KEY2: secretKey ? secretKey : "",
            mode: apidetails[i]?.Exchange,
            type: apidetails[i]?.Type,
            Status: apidetails[i]?.Status,
            Balance: apidetails[i]?.Balance,
        });
    }

    const handleDelete = (record) => {
        // console.log(record);

        let postData = { jwt: token, api: record.Name };
        console.log(postData)
        axios({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            url: process.env.REACT_APP_API_PATH_USER + "delete_api",
            data: postData,
        })
            .then(async function (response) {
                const res = await response.data;
                console.log(res)
                if (res.data) {
                    //   getallrole();
                    getapiDetails()
                    message.success(res.data)

                } else if (res.errors) {
                    console.log(res.errors.non_field_errors);
                }
            })
            .catch((err) => {
                console.log(err.response.data.Error);
                message.error(err.response.data.Error);
                getapiDetails()

            });
    };
    const onswitchChange = (record, checked) => {
        if (record.Status == "ACTIVE") {
            console.log("active")
            let postData = { jwt: token, api: record.Name, status: "INACTIVE" };
            console.log(postData)
            axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: process.env.REACT_APP_API_PATH_USER + "change_api_status",
                data: postData,
            })
                .then(async function (response) {
                    const res = await response.data;
                    console.log(res)
                    if (res.data) {
                        //   getallrole();
                        getapiDetails()
                        message.success(res.data)

                    } else if (res.errors) {
                        console.log(res.errors.non_field_errors);
                        console.log(res);
                    }
                })
                .catch((err) => {
                    console.log(err.response.data.error);
                    console.log(err);

                    message.error(err.response.data.error);
                    getapiDetails()

                });
        }
        if (record.Status == "INACTIVE") {
            console.log("inactive")

            let postData = { jwt: token, api: record.Name, status: "ACTIVE" };
            console.log(postData)
            axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: process.env.REACT_APP_API_PATH_USER + "change_api_status",
                data: postData,
            })
                .then(async function (response) {
                    const res = await response.data;
                    console.log(res)
                    if (res.data) {
                        //   getallrole();
                        getapiDetails()
                        message.success(res.data)

                    } else if (res.errors) {
                        console.log(res.errors.non_field_errors);
                    }
                })
                .catch((err) => {
                    console.log(err.response.data.Error);
                    message.error(err.response.data.Error);
                    getapiDetails()

                });
        }


    };

    const columns = [
        {
            title: 'Date & Time',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Api ID',
            dataIndex: 'ApiID',
            key: 'ApiID',
        },
        {
            title: 'Exchange',
            dataIndex: 'Exchange',
            key: 'Exchange',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Api Key',
            dataIndex: 'API_KEY',
            key: 'API_KEY',
        },
        {
            title: 'Api Secret',
            dataIndex: 'SECRET_KEY',
            key: 'SECRET_KEY',
        },
        {
            title: 'Balance',
            dataIndex: 'Balance',
            key: 'Balance',
        },

        {
            title: 'Mode',
            dataIndex: 'mode',
            key: 'mode',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: "Status",
            dataIndex: "Status",
            className: "text-center",

            render: (text, record) => (
                <>
                    <div className='justify-center items-center flex'>
                        <div>
                            <Switch
                                checkedChildren="ACTIVE"
                                unCheckedChildren="INACTIVE"
                                className="bg-[#e7b30a] "
                                checked={record.Status === "ACTIVE" ? true : false}
                                onChange={(checked) => onswitchChange(record, checked)}
                            />
                        </div>
                    </div>
                </>)
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>

                    <Button
                        className="border-none mb-0"
                        onClick={() => handleDelete(record)}
                    >
                        <DeleteOutlined size={18} />
                    </Button>
                </>
            ),
        },
    ];
    const columns2 = [
        {
            title: 'Date & Time',
            dataIndex: 'dateandtime',
            key: 'dateandtime',
        },
        {
            title: 'Currency',
            dataIndex: 'Currency',
            key: 'Currency',
        },
        {
            title: 'Bot Name',
            dataIndex: 'BotName',
            key: 'BotName',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <Button size="small" className='mx-2'>
                        <a>Active</a>
                    </Button>
                    <Button size="small" onClick={showModal}>
                        <a>Remove</a>
                    </Button>
                </>

            ),
        },
    ];
    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
      <>
        <div className="my-3 mb-3 container flex items-center justify-center md:justify-end px-2 lg:mt-16">
          <button
            type="button"
            className="  py-2 mb-6 text-white rounded-full bg-[#3b3b3b] w-56 hover:bg-colorPrimary  hover:text-[#000] active:bg-colorPrimary  active:text-[#000]"
          >
            <Link to="/dashboard/api_settings">Add API</Link>
          </button>
        </div>
        <div className="mx-10">
          <div className="overflow-x-auto">
            <Table
              size="small"
              scroll={2000}
              columns={columns}
              dataSource={dataSource}
            />
          </div>
          <Modal
            visible={true}
            onCancel={() => setIsModalOpen(false)}
            footer={null}
            open={isModalOpen}
            className="bg-[#3b3b3b]"
          >
            {renderComponent()}
          </Modal>
        </div>
      </>
    );
}

export default APi_details;
