import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import one from "../assets/sale1.png";
import two from "../assets/sale2.png";
import three from "../assets/sale3.png";

const Sale = () => {
  return (
    <div className="lg:pt-[80px] pt-[40px]">
      <Container>
        <Flex className="justify-between flex-wrap">
          <div className="lg:w-[49%] w-full">
            <img className="w-full" src={one} alt="" />
          </div>
          <div className="lg:w-[49%] w-full lg:pt-0 pt-6">
            <div className="">
              <img src={two} alt="" />
            </div>
            <div className="lg:pt-10 pt-6">
              <img src={three} alt="" />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Sale;
