import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import one from "../assets/pro1.png";
import two from "../assets/pro2.png";
import three from "../assets/pro3.png";
import four from "../assets/pro4.png";
import five from "../assets/phone.png";

const Arrival2 = () => {
  return (
    <div>
      <Container>
      <div className="mt-14 mb-8">
          <h2 className=" font-DM text-[39px] text-[#292929] font-bold">
            Best Seller
          </h2>
        </div>
        <Flex className="justify-between mt-[70px] flex-wrap lg:px-0 px-3">
          <div className="lg:w-[23%] sm:w-[48%] w-full">
            <img src={one} alt="" />
            <div className="flex justify-between items-center py-4">
              <div className="">
                <h3 className="font-DM font-bold text-[#262626] text-[18px]">
                Basic Crew Neck Tee
                </h3>
              </div>
              <div className="">
                <h3 className="font-DM font-normal text-[#767676] text-[15px]">
                $44.00
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] sm:w-[48%] w-full">
            <img src={two} alt="" />
            <div className="flex justify-between items-center py-4">
              <div className="">
                <h3 className="font-DM font-bold text-[#262626] text-[18px]">
                Basic Crew Neck Tee
                </h3>
              </div>
              <div className="">
                <h3 className="font-DM font-normal text-[#767676] text-[15px]">
                $44.00
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] sm:w-[48%] w-full">
            <img src={three} alt="" />
            <div className="flex justify-between items-center py-4">
              <div className="">
                <h3 className="font-DM font-bold text-[#262626] text-[18px]">
                Basic Crew Neck Tee
                </h3>
              </div>
              <div className="">
                <h3 className="font-DM font-normal text-[#767676] text-[15px]">
                $44.00
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] sm:w-[48%] w-full">
            <img src={four} alt="" />
            <div className="flex justify-between items-center py-4">
              <div className="">
                <h3 className="font-DM font-bold text-[#262626] text-[18px]">
                Basic Crew Neck Tee
                </h3>
              </div>
              <div className="">
                <h3 className="font-DM font-normal text-[#767676] text-[15px]">
                $44.00
                </h3>
              </div>
            </div>
          </div>
        </Flex>
      </Container>

      <div className="lg:mt-[80px]">
            <img src={five} alt="" />
          </div>
    </div>
  );
};

export default Arrival2;
