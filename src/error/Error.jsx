import React from "react";
// import pageNotFound from '../assets/error-404.png'
import pageNotFound from '../assets/error-404.png'
import { Link } from "react-router";

const ErrorPage = () =>{

    return(
        <div className="m-auto items-center p-20">
            <div className=" mx-[80px] text-center ">
            <h1 className="text-[60px] text-red-700 font-bold">Page Not Found</h1>
            <img className="text-center flex m-auto p-20" src={pageNotFound}></img>
            {/* <div className='navbar-end'><a  target='_blank' className=" btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-6 text-white"><i class="fa-brands fa-github"></i> Contribute</a></div> */}
            <div className="m-10"><Link to='/'  className=" btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-6 text-white">Goto Home Page</Link></div>
            
        </div>
        </div>
    )
}


export default ErrorPage