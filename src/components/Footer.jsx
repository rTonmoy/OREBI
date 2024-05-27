import React from "react";
import Flex from "./Flex";
import logo from "../assets/logo.png";
import Container from "./Container";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] py-[60px] lg:px-0 px-4">
      <Container>
        <Flex className="justify-between flex-wrap">
          <div className="lg:w-[15%] w-1/3">
            <h2 className=" font-DM font-bold text-[16px] pb-2 text-[#262626]">
              MENU
            </h2>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Home
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Shop
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              About
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Contact
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Journal
            </p>
          </div>
          <div className="lg:w-[15%] w-1/3">
            <h2 className=" font-DM font-bold text-[16px] pb-2 text-[#262626]">
              SHOP
            </h2>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Category 1
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Category 2
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Category 3
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Category 4
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Category 5
            </p>
          </div>
          <div className="lg:w-[15%] w-1/3">
            <h2 className=" font-DM font-bold text-[16px] pb-2 text-[#262626]">
              HELP
            </h2>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Privacy Policy
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Terms & Conditions
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Special E-shop
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Shipping
            </p>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D] pb-1">
              Secure Payments
            </p>
          </div>
          <div className="lg:w-[35%] w-[80%] lg:pt-0 pt-[30px]">
            <h2 className=" font-DM font-bold text-[16px] pb-2 text-[#262626]">
              (052) 611-5711
            </h2>
            <h2 className=" font-DM font-bold text-[16px] pb-2 text-[#262626] ">
              company@domain.com
            </h2>
            <p className="font-DM font-normal text-[14px] text-[#6D6D6D]">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>
          <div className="lg:w-[10%] w-[20%] lg:pt-0 pt-[30px]">
            <img src={logo} alt="" />
          </div>
        </Flex>
        <Flex className="lg:justify-between justify-center items-center flex-wrap">
            <div className="lg:text-start text-center">
            <div className="flex pt-12 lg:w-1/2 w-full ">
                <FaFacebookF className=" mr-5 inline-block"/>
                <FaLinkedinIn className=" mr-5 inline-block"/>
                <FaInstagram className="inline-block "/>
            </div>
            </div>
            <div className="lg:w-1/2 lg:text-end text-center w-full">
                <p className=" font-DM text-[14px] text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
