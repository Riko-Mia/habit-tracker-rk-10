import React from 'react';
import Navbar from '../Component/Navbar/navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import Loading from '../Loading/Loading';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet>

               
            </Outlet>

            {/* <Loading></Loading> */}
            <Footer></Footer>
            
        </div>
    );
};

export default Root;