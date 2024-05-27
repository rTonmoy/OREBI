import React, { useContext, useState } from "react";
import Container from "./Container";
import { IoIosHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import axios from "axios";
import { useEffect } from "react";
import { GrFormNextLink, GrFormPreviousLink  } from "react-icons/gr";
import { ApiData } from "./ContextApi";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="absolute top-[45%] right-0 h-[50px] w-[50px] rounded-full bg-[rgba(151,151,151,0.83)] !leading-[43px] text-center text-[28px] text-[#fff] translate-y-[-50%]" onClick={onClick}
      ><GrFormNextLink className="inline-block" /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="hello absolute top-[45%] left-[-25px] h-[50px] w-[50px] rounded-full bg-[rgba(151,151,151,0.83)] leading-[43px] text-center text-[28px] text-[#fff] translate-y-[-50%] z-30" onClick={onClick}
      ><GrFormPreviousLink className="inline-block" /></div>
    );
  }

const Arrival = () => {
  let data = useContext(ApiData)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div>
      <Container>
        <div className="mt-14 mb-8">
          <h2 className=" font-DM text-[39px] text-[#292929] font-bold">
            New Arrivals
          </h2>
        </div>
        <Slider {...settings}>
        {data.map((item, i) => (
            <div key={i} className="!w-[94%] lg:pl-0 pl-5">
              <div className="relative group overflow-hidden ">
                <img src={item.thumbnail} className=" w-full h-[320px]" alt="" />
                <div className="bg-[rgba(255,255,255,0.79)] py-5 absolute bottom-[-150px] left-0 w-full group-hover:bottom-0 duration-500 ease-in-out">
                  <div className="flex items-center justify-end gap-x-3 py-1 mr-4">
                    <p className=" font-DM font-normal text-[15px] text-[#767676] hover:text-[#262626] hover:font-bold duration-500 ease-in-out">
                      Add to Wish List
                    </p>
                    <IoIosHeart />
                  </div>
                  <div className="flex items-center justify-end gap-x-3 py-1 mr-4">
                    <p className=" font-DM font-normal text-[15px] text-[#767676] hover:text-[#262626] hover:font-bold duration-500 ease-in-out">
                      Compare
                    </p>
                    <TfiReload />
                  </div>
                  <div className="flex items-center justify-end gap-x-3 py-1 mr-4">
                    <p className=" font-DM font-normal text-[15px] text-[#767676] hover:text-[#262626] hover:font-bold duration-500 ease-in-out">
                      Add to Cart
                    </p>
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center py-4">
                <div className="">
                  <h3 className="font-DM font-bold text-[#262626] text-[18px]">
                    {item.title}
                  </h3>
                </div>
                <div className="">
                  <h3 className="font-DM font-normal text-[#767676] text-[15px]">
                    ${item.price}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Arrival;
