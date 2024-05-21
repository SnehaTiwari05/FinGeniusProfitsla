import { Card, Checkbox, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getToken } from '../../authfunctions';
import axios from 'axios';

function Profile() {
    const [profiledata, setProfileData] = useState({
        UserID: '',
        UserName: '',
        EmailID: '',
        Status: '',
        created_at: '',
        '2FA': '',
        updated_at: '',
    });
    const token = getToken();



    const [value, setValue] = useState({
        old_password: "",
        new_password: "",
        conf_password: "",
    });
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
                setProfileData(res?.data)
            })
            .catch((err) => {
                console.log(err);
                message.error(err.response?.data?.error || "Failed to fetch API details");
            });
    };


    // Password validation states and handlers
    const [errorMessages, setErrorMessages] = useState({
        newPasswordSameAsOld: false,
        confirmPasswordMismatch: false,
    });

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        console.log(e.target.value)
        setPassword(e.target.value)
        setValue((prevState) => ({
            ...prevState,
            new_password: newPassword,
        }));

        if (newPassword === value.old_password) {
            setErrorMessages((prevState) => ({
                ...prevState,
                newPasswordSameAsOld: true,
            }));
        } else {
            setErrorMessages((prevState) => ({
                ...prevState,
                newPasswordSameAsOld: false,
            }));
        }
    };

    const handleconf_passwordChange = (e) => {
        const newconf_password = e.target.value;
        console.log(e.target.value)

        setValue((prevState) => ({
            ...prevState,
            conf_password: newconf_password,
        }));

        if (value.new_password !== newconf_password) {
            setErrorMessages((prevState) => ({
                ...prevState,
                confirmPasswordMismatch: true,
            }));
        } else {
            setErrorMessages((prevState) => ({
                ...prevState,
                confirmPasswordMismatch: false,
            }));
        }
    };

    // Remaining form and submission logic

    const [isLabelAbove, setIsLabelAbove] = useState({
        old_password: false,
        password: false,
        conf_password: false,
    });

    const [checkpasswordvisibility, setCheckPasswordVisibility] = useState("hidden");

    const handleFocus = (name) => {
        setIsLabelAbove((prevState) => ({ ...prevState, [name]: true }));
        setCheckPasswordVisibility("block");
    };

    const handleBlur = (name) => {
        setIsLabelAbove((prevState) => ({ ...prevState, [name]: value[name] !== '' }));
        setCheckPasswordVisibility("hidden");
    };
    // ... (remaining code, unchanged)
    const [checkboxes, setCheckboxes] = useState([
        false, // 8 characters
        false, // 1 lowercase letter
        false, // 1 uppercase letter
        false, // 1 number
        false, // 1 special character
    ]);

    const [password, setPassword] = useState("");
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
        const userData = {
            jwt: token,
            ...value
        };
        console.log("userData")
        console.log(userData)
        axios({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            url: process.env.REACT_APP_API_PATH_USER + "update_password",
            data: userData,
        })
            .then(async function (response) {
                const res = await response;
                // Assuming the API response is in the format: res.data.live (for live data) and res.data.paper (for paper data)
                console.log(res.data)
                // setProfileData(res.data)
                message.success(res.data.data)
                console.log(res.data.data)
            })
            .catch((err) => {
                //   console.log(err.response.data.error);
                //   message.error(err.response.data.error);
                // message.error(err.response?.data?.error);
            });
    }

    useEffect(() => {
        getapiDetails()
    }, [])

    const handleSubmitprofile = () => {
        const userData = {
            jwt: token,
            ...profiledata,
        };
        console.log(profiledata)
        const postData = { name: profiledata.UserName, jwt: token }
        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH_USER + 'update_profile',
            data: postData,
        })
            .then(async function (response) {
                const res = await response;
                setProfileData(res.data);
                message.success('Profile updated successfully');
                console.log('Updated Profile Data:', res.data); // Display updated profile data in console
            })
            .catch((err) => {
                console.log(err.response.data.error);
                message.error(err.response.data.error);
            });
    };

    return (
        <div className='grid lg:grid-cols-2 m-5'>
            <Card className='mx-5 mt-3 border-none' title={
                <>
                    <div class="items-center">
                        <div className="bg-colorSecondary rounded-full align items-center border-solid drop-shadow-xl flex flex-row break-words p-1 justify-center mb-3  mx-2 text-black">
                            {/* <img src={img1} alt="binance" className="mr-2 md:w-[150px]" /> */}
                            <h4 className="text-xl font-extrabold ">Profile</h4>
                        </div>
                    </div>
                </>
            }>

                <div class="mb-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
                        Username
                    </label>
                    <p className='text-xl font-bold hidden'>Username</p>
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                        name='UserName'
                        value={profiledata.UserName}
                        onChange={(e) => setProfileData({ ...profiledata, UserName: e.target.value })}
                    />
                </div >

                <div class="mb-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
                        UserID
                    </label>
                    <p className='text-xl font-bold' hidden>UserID</p>
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                        name='UserID'
                        value={profiledata.UserID}
                        onChange={(e) => setProfileData({ ...profiledata, UserID: e.target.value })}
                    />
                </div>
                <div class="mb-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
                        EmailID
                    </label>
                    <p className='text-xl font-bold' hidden>EmailID</p>
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                        name='EmailID'
                        value={profiledata.EmailID}
                        onChange={(e) => setProfileData({ ...profiledata, EmailID: e.target.value })}
                    />
                </div>
                <div class="mb-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
                        Status
                    </label>
                    <p className='text-xl font-bold' hidden>Status</p>
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                        name='Status'
                        value={profiledata.Status}
                        onChange={(e) => setProfileData({ ...profiledata, Status: e.target.value })}
                    />
                </div>
                <div class="mb-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
                        Created At
                    </label>
                    <p className='text-xl font-bold' hidden>Created At</p>
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                        name='created_at'
                        value={profiledata.created_at}
                        onChange={(e) => setProfileData({ ...profiledata, created_at: e.target.value })}
                    />
                </div>
                {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleSubmitprofile()}>
                    Save
                </button> */}
                <div className="flex justify-center">
                    <button type='submit' class="hover:bg-[#353535] bg-colorPrimary text-black rounded-3xl  mx-2 hover:text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" onClick={() => handleSubmitprofile()}>
                        submit
                    </button>
                </div>

                {/* Add more fields similarly */}
                {/* ... */}
            </Card>
            <div>
                <Card className='mx-1 mt-3 border-none' title={
                    <div class="items-center">
                    <div className="bg-colorSecondary rounded-full align items-center border-solid drop-shadow-xl flex flex-row break-words p-1 justify-center mb-3  mx-2 text-black">
                        {/* <img src={img1} alt="binance" className="mr-2 md:w-[150px]" /> */}
                        <h4 className="text-xl font-extrabold ">Update Profile</h4>
                    </div>
                </div>
                }>
                    <div className=' rounded-lg md:w-9/12 mx-auto'>
                        <div className="relative my-4">


                            <div class="mb-2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
                                    Old Password
                                </label>
                                {/* <p className='text-xl font-bold' hidden>Old Password</p> */}
                                <input
                                    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                                    id='old_password'
                                    name='old_password'
                                    type='password'
                                    placeholder='enter Old Password'
                                    // value={profiledata.created_at}
                                    onChange={handleChange}

                                />
                            </div>


                            {errorMessages.newPasswordSameAsOld && (
                                <span className="text-red-500  bottom-0 left-2 text-xs">
                                    New password should not be the same as the old password.
                                </span>
                            )}
                        </div>
                        <div className="relative my-4">
                            <div className="relative my-4">

                                <div class="mb-2">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
                                        Password
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline"
                                        id="Password"
                                        type="password"
                                        name='new_password'
                                        placeholder='enter new Password'
                                        // value={profiledata.created_at}
                                        onChange={handlePasswordChange}

                                    />
                                </div>

                            </div>
                        </div>

                        <div className="relative my-4">

                            <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="conf_password">
                                confirm password
                            </label>
                            <input
                                id='conf_password'
                                type='password'
                                className={`shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-[#3B3B3B] text-white leading-tight focus:outline-none focus:shadow-outline ${passwordMatch ? 'border-slate-900' : 'border-red-500'
                                    }`}
                                value={value.conf_password}
                                onChange={handleconf_passwordChange}
                                onFocus={() => handleFocus('conf_password')}
                                placeholder='confirm new Password'

                                onBlur={() => handleBlur('conf_password')}
                                autoComplete='off'
                            />

                            {errorMessages.confirmPasswordMismatch && (
                                <span className='text-red-500  bottom-0 left-2 text-xs'>
                                    Passwords do not match.
                                </span>
                            )}
                        </div>
                        <div className="">
                            {checkboxes.map((checked, index) => (
                                <div key={index} className={checkpasswordvisibility}>
                                    <div className='grid grid-cols-1 text-center'>
                                        <span className='mx-3 text-start'>
                                            <Checkbox checked={checked} disabled className='mx-2' />
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
                        <Checkbox> Accepting <a href="#" className='text-colorPrimaryDark hover:underline hover:text-colorPrimaryDark'>Terms of Service</a></Checkbox>
                        <button onClick={handleSubmit} className='rounded-full mt-5 bg-colorPrimaryDark text-black cursor-pointer hover:bg-colorPrimaryDark/70 px-5 py-3 w-full'>Change Password</button>
                    </div>
                </Card>
            </div>

        </div>
    );
}

export default Profile;
