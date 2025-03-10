import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('token');
        if (!login) {
            navigate('/');
            // window.location.href='/'
        }
    })
    return (
        <>
            <Component />
        </>
    )
}

export default ProtectedRoute