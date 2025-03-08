import React, { useEffect } from 'react';
import Cookies from 'js-cookies';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const { Component } = props
    const navigate = useNavigate()
    useEffect(() => {
        const token = Cookies.getItem('jwtToken')
        if (!token) {
            navigate('/login')
        }
    })
    return <Component />

};

export default ProtectedRoute;
