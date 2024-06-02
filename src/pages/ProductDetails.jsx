import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { IoIosStar } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa6";
import { IoStarHalfOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import { addToCart } from "../components/slice/productSlice";

const ProductDetails = () => {
  let [show, setShow] = useState(false);
  let [shipShow, setShipShow] = useState(false);

  let productId = useParams();
  let dispatch = useDispatch();

  let [singleProduct, setsingleProduct] = useState([]);
  let dataId = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setsingleProduct(response.data);
      });
  };

  useEffect(() => {
    dataId();
  }, []);

  let clientRating = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5;
    return singleProduct.rating > index + 1 ? (
      <IoIosStar className="text-[#FFD881]" />
    ) : singleProduct.rating > number ? (
      <IoStarHalfOutline className="text-[#FFD881]" />
    ) : (
      <FaRegStar className="text-[#FFD881]" />
    );
  });

  let handleAddtoCart = (item)=>{
    dispatch(addToCart({...item, qun:1}))
  }

  return (
    <Container>
      <Flex className="flex-wrap justify-between">
        {singleProduct?.images?.map((item) => (
          <div className="w-[49%] py-8">
            <img src={item} className="w-full h-[500px]" alt="" />
          </div>
        ))}
      </Flex>

      <div className="w-[50%]">
        <div className="border-b-[1px] border-[#F0F0F0]">
          <h2 className=" font-DM font-bold text-[#262626] text-[44px] pt-6 pb-1">
            Product
          </h2>
          <div className="flex items-center">
            <div className="flex">{clientRating}</div>
            <p className=" font-DM text-[14px] text-[#767676] pl-6">1 Review</p>
          </div>
          <div className="flex items-center py-3">
            <h3 className=" font-DM text-[16px] text-[#767676]">$88.00</h3>
            <h4 className=" font-DM font-bold text-[#262626] text-[20px] pl-9">
              $44.00
            </h4>
          </div>
        </div>

        <div className=" py-6">
          <div className="flex items-center">
            <h2 className=" font-DM font-bold text-[16px] text-[#262626] pr-10">
              COLOR:
            </h2>
            <div className="flex items-center">
              <div className="w-[18px] h-[18px] rounded-full bg-[#767676] mx-2"></div>
              <div className="w-[26px] h-[26px] rounded-full bg-[#FF8686] mr-2"></div>
              <div className="w-[18px] h-[18px] rounded-full bg-[#7ED321] mr-2"></div>
              <div className="w-[18px] h-[18px] rounded-full bg-[#B6B6B6] mr-2"></div>
              <div className="w-[18px] h-[18px] rounded-full bg-[#15CBA5] mr-2"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <h2 className=" font-DM font-bold text-[16px] text-[#262626] mr-16">
            SIZE:
          </h2>
          <div className="flex items-center border-[1px] border-[#F0F0F0] py-1 px-2">
            <h5 className=" font-DM mr-16 text-[#767676]">S</h5>
            <TiArrowSortedDown className="text-[#767676]" />
          </div>
        </div>

        {/* <div className="flex items-center py-7 border-b-[1px] border-[#F0F0F0]">
          <h2 className=" font-DM font-bold text-[16px] text-[#262626] mr-[18px]">
            QUANTITY:
          </h2>
          <div className="flex items-center justify-around border-[1px] border-[#F0F0F0] py-1 px-2">
            <h5 className=" font-DM pr-8  text-[#767676]">-</h5>
            <h5 className=" font-DM pr-8 text-[#767676]">1</h5>
            <h5 className=" font-DM  text-[#767676]">+</h5>
          </div>
        </div> */}

        <div className="flex items-center border-b-[1px] border-[#F0F0F0] py-5">
          <h4 className="font-DM font-bold text-[16px] text-[#262626] mr-8">
            STATUS:
          </h4>
          <h5 className="font-DM text-[16px] text-[#767676]">In stock</h5>
        </div>

        <div className="border-b-[1px] border-[#F0F0F0] py-6">
          <div className="flex items-center">
            <h3 className="font-DM font-bold text-[14px] text-[#262626] mr-3 border-[1px] border-[#262626] px-6 py-2 hover:bg-[#262626] hover:text-[#fff] duration-300 ease-in-out cursor-pointer">
              Add to Wish List
            </h3>
            <Link to="/cart">
              <button onClick={()=>handleAddtoCart(singleProduct)}  className="font-DM font-bold text-[14px] text-[#262626] border-[1px] border-[#262626] px-10 py-2 hover:bg-[#262626] hover:text-[#fff] duration-300 ease-in-out cursor-pointer">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>

        <div
          onClick={() => setShow(!show)}
          className="border-b-[1px] border-[#F0F0F0] py-4 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <h2 className=" font-DM font-bold text-[16px] text-[#262626]">
              FEATURES & DETAILS
            </h2>
            {show == true ? (
              <RxCross2 />
            ) : (
              <span>
                <TiPlus />
              </span>
            )}
          </div>
          {show && (
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              dolore harum, reiciendis recusandae neque assumenda modi veniam ab
              asperiores. Quibusdam mollitia vel voluptates atque dolores
              molestias, commodi vero impedit temporibus.
            </p>
          )}
        </div>

        <div
          onClick={() => setShipShow(!shipShow)}
          className="order-b-[1px] border-[#F0F0F0] py-4 cursor-pointer"
        >
          <div className="flex items-center justify-between b">
            <h2 className=" font-DM font-bold text-[16px] text-[#262626]">
              SHIPPING & RETURNS
            </h2>
            {shipShow == true ? (
              <RxCross2 />
            ) : (
              <span>
                <TiPlus />
              </span>
            )}
          </div>
          {shipShow && (
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              accusantium fugit minima ipsam eum non dolor aliquid suscipit
              culpa, quidem dolore nam itaque aliquam ipsa natus distinctio
              ullam vitae consequuntur.
            </p>
          )}
        </div>

        <div className=" py-4">
          <p className=" font-DM text-[16px] text-[#767676]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex items-center mt-[40px]">
          <h3 className=" font-DM text-[20px] text-[#767676] mr-[60px]">
            Description
          </h3>
          <h3 className="font-DM text-[20px] font-bold text-[#262626]">
            Reviews (1)
          </h3>
        </div>
      </div>

      <div className="border-b-[1px] border-[#F0F0F0] py-5">
        <p className="font-DM text-[14px] text-[#767676] pt-5">
          1 review for Product
        </p>
      </div>
      <div className="flex items-center py-4">
        <h2 className=" font-DM text-[16px] pr-8">John Ford</h2>
        <div className="flex">
          <IoIosStar className="text-[#FFD881]" />
          <IoIosStar className="text-[#FFD881]" />
          <IoIosStar className="text-[#FFD881]" />
          <IoIosStar className="text-[#FFD881]" />
          <IoIosStar className="text-[#FFD881]" />
        </div>
      </div>

      <div className="border-b-[1px] border-[#F0F0F0] pb-5">
        <p className=" font-DM text-[14px] text-[#767676]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      <div className="w-[50%]">
        <h3 className=" font-DM font-bold text-[20px] text-[#262626] py-7">
          Add a Review
        </h3>

        <div className="border-b-[1px] border-[#F0F0F0]">
          <h2 className="font-DM font-bold text-[16px] text-[#262626]">Name</h2>
          <input
            className="border-none outline-none font-DM pb-4 w-full"
            placeholder="Your name here"
            type="text"
          />
        </div>

        <div className="border-b-[1px] border-[#F0F0F0]">
          <h2 className="font-DM font-bold text-[16px] text-[#262626] pt-3">
            Email
          </h2>
          <input
            className="border-none outline-none font-DM pb-4 w-full"
            placeholder="Your email here"
            type="text"
          />
        </div>

        <div className="border-b-[1px] border-[#F0F0F0]">
          <h2 className="font-DM font-bold text-[16px] text-[#262626] pt-3">
            Review
          </h2>
          <input
            className="border-none outline-none font-DM pb-[70px] w-full"
            placeholder="Your review here"
            type="text"
          />
        </div>

        <div className=" pt-12 pb-[300px]">
          <a
            className="px-[80px] py-[15px] bg-[#262626] font-DM font-bold text-[14px] text-[#fff]"
            href="#"
          >
            Post
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
