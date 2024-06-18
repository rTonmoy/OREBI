import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { FaBarsStaggered } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";
import Container from './Container';
import Flex from './Flex';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let [show, setShow] = useState(false)
    let handleShow = () =>{
        setShow(!show)
    }
  return (
    <>
    <Container className='py-7'>
        <Flex className="flex items-center justify-between lg:px-0 px-2">
            <div className="lg:w-[5%]">
                <img src={logo} alt="" />
            </div>
            <div className="lg:w-[95%]">
                <ul className={`lg:flex justify-center lg:static absolute z-50 text-center  ${show == true ? 'top-[55px] left-0 bg-[#fff] w-full  duration-500 ease-in-out' : 'top-[55px] left-[-100%]  duration-500 ease-in-out w-full'}`}>
                    <li className='font-DM font-bold text-[14px] text-[#262626] lg:px-5 lg:py-0 py-2 cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='font-DM font-normal text-[14px] text-[#767676] lg:px-5 lg:py-0 py-2 cursor-pointer'><Link to="/product">Shop</Link></li>
                    <li className='font-DM font-normal text-[14px] text-[#767676] lg:px-5 lg:py-0 py-2 cursor-pointer'><Link to="/about">About</Link></li>
                    <li className='font-DM font-normal text-[14px] text-[#767676] lg:px-5 lg:py-0 py-2 cursor-pointer'><Link to="contact">Contacts</Link></li>
                    <li className='font-DM font-normal text-[14px] text-[#767676] lg:px-5 lg:py-0 py-2 cursor-pointer'><Link>Journal</Link></li>
                </ul>
            </div>
            <div className="lg:hidden" onClick={handleShow}>
                {show ? <GiTireIronCross /> : <FaBarsStaggered className='text-[23px]' />}
            </div>
        </Flex>
    </Container>

    </>
  )
}

export default Navbar