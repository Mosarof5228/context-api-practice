import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div className='max-w-5xl mx-auto px-2'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;