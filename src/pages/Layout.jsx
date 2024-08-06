/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children, categories }) => {
    return (
        <>
            <Navbar categories={categories} />
            {children}
        </>
    );
}

export default Layout;
