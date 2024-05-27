import React from "react";
import banner from "../assets/banner.png";
import Slider from "react-slick";
import Container from "./Container";
import Flex from "./Flex";
import { FaTruck } from "react-icons/fa";
import { SlReload } from "react-icons/sl";

const Banner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="tmi"
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "50px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul className="okay" style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="ami"
        style={{
          width: "30px",
          padding: "4px 0",
          fontWeight: "500",
          color: "transparent",
          borderRight: "3px #fff solid",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <section className="border-b-[1px] border-[##F0F0F0]">
      <Slider {...settings}>
        <div className="">
          <img src={banner} alt="" />
        </div>
        <div className="">
          <img src={banner} alt="" />
        </div>
        <div className="">
          <img src={banner} alt="" />
        </div>
        <div className="">
          <img src={banner} alt="" />
        </div>
      </Slider>

      <Container>
        <Flex className="justify-between items-center py-3 lg:px-0 px-3">
            <div className="flex items-center">
                <h2 className="text-[#262626] text-[25px] font-DM font-bold pr-2">2</h2>
                <p className="text-[#6D6D6D] font-DM font-normal text-[16px]">Two years warranty</p>
            </div>
            <div className="flex items-center">
                <FaTruck className="text-[#262626] text-[25px] font-DM font-bold pr-2" />
                <p className="text-[#6D6D6D] font-DM font-normal text-[16px]">Free shipping</p>
            </div>
            <div className="flex items-center">
                <SlReload className="text-[#262626] text-[25px] font-DM font-bold pr-2" />
                <p className="text-[#6D6D6D] font-DM font-normal text-[16px]">Return policy in 30 days</p>
            </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
