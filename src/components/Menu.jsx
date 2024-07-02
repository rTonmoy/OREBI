import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaUser, FaShoppingCart, FaCaretDown, FaSearch } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { useRef } from "react";
import cart from "../assets/cart.png";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ApiData } from "./ContextApi";

const Menu = () => {
  let info = useContext(ApiData);
  let navigate = useNavigate()
  let data = useSelector((state) => state.product.cartItem);
  let [cateshow, setCateshow] = useState(false);
  let cateMenu = useRef();

  let [useshow, setUseshow] = useState(false);
  let useMenu = useRef();

  let [cartshow, setCartshow] = useState(false);
  let cartMenu = useRef();

  let [elecshow, setElecshow] = useState(false);
  let elecMenu = useRef();

  let [searchChange, setSearchChange] = useState("");
  let [searchFinter, setSearchFilter] = useState([]);
  let handleChange = (e) => {
    setSearchChange(e.target.value);
    if (e.target.value == "") {
      setSearchFilter([]);
    } else {
      let searchFind = info.filter((item) =>
        item.title.toLowerCase().includes(e.target.value)
      );
      setSearchFilter(searchFind);
    }
  };

  let handleSearchClick = ()=>{
    navigate("/product")
  }

  let enter = (e)=>{
    navigate("/product")
  }

  let handleSingleP = (id)=>{
    navigate(`/product/${id}`)
    setSearchFilter("")
    setSearchChange("")
  }
  

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateMenu.current.contains(e.target) == true) {
        setCateshow(!cateshow);
      } else {
        setCateshow(false);
      }
      if (useMenu.current.contains(e.target) == true) {
        setUseshow(!useshow);
      } else {
        setUseshow(false);
      }
      if (cartMenu.current.contains(e.target) == true) {
        setCartshow(!cartshow);
      } else {
        setCartshow(false);
      }
      if (elecMenu.current.contains(e.target) == true) {
        setElecshow(!elecshow);
      } else {
        setElecshow(false);
      }
    });
  }, [cateshow, useshow, cartshow, elecshow]);

  return (
    <>
      <div className="bg-[#D8D8D8] py-7 lg:px-0 px-2">
        <Container>
          <Flex className="items-center">
            <div className="w-[30%] relative">
              <div className="flex items-center gap-x-2" ref={cateMenu}>
                <FaBarsProgress className="cursor-pointer" />
                <h2 className="font-DM font-normal text-[14px] text-[#262626] cursor-pointer">
                  Shop by Category
                </h2>
              </div>
              {cateshow && (
                <div className="absolute lg:top-[33px] top-[44px] z-50 left-0 bg-[#262626] w-[250px]">
                  <ul className="">
                    <li className="py-4 pl-5 border-b-[1px] border-[#2D2D2D] font-DM font-normal text-[14px] text-[#FFFFFFB2] opacity-70 hover:opacity-100 hover:pl-9 duration-500 ease-in-out cursor-pointer">
                      Accesories
                    </li>
                    <li className="py-4 pl-5 border-b-[1px] border-[#2D2D2D] font-DM font-normal text-[14px] text-[#FFFFFFB2] opacity-70 hover:opacity-100 hover:pl-9 duration-500 ease-in-out cursor-pointer">
                      Furniture
                    </li>
                    <li
                      ref={elecMenu}
                      className="py-4 pl-5 border-b-[1px] border-[#2D2D2D] font-DM font-normal text-[14px] text-[#FFFFFFB2] opacity-70 hover:opacity-100 hover:pl-9 duration-500 ease-in-out cursor-pointer"
                    >
                      Electronics
                    </li>
                    <li className="py-4 pl-5 border-b-[1px] border-[#2D2D2D] font-DM font-normal text-[14px] text-[#FFFFFFB2] opacity-70 hover:opacity-100 hover:pl-9 duration-500 ease-in-out cursor-pointer">
                      Clothes
                    </li>
                    <li className="py-4 pl-5 border-b-[1px] border-[#2D2D2D] font-DM font-normal text-[14px] text-[#FFFFFFB2] opacity-70 hover:opacity-100 hover:pl-9 duration-500 ease-in-out cursor-pointer">
                      Bags
                    </li>
                    <li className="py-4 pl-5 border-b-[1px] border-[#2D2D2D] font-DM font-normal text-[14px] text-[#FFFFFFB2] opacity-70 hover:opacity-100 hover:pl-9 duration-500 ease-in-out cursor-pointer">
                      Home appliances
                    </li>
                  </ul>
                </div>
              )}
              {elecshow && (
                <div className="absolute z-50 lg:top-[35px] lg:left-[250px] bg-[#fff] lg:p-[25px] py-[25px]">
                  <div className="flex">
                    <div className="lg:pr-[40px] pr-[10px]">
                      <h2 className="font-DM font-bold lg:text-[16px] text-[15px] text-[#262626] pb-3">
                        Phones
                      </h2>
                      <ul>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Phone 1
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Phone 2
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Phone 3
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Phone 4
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Phone 5
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Phone 6
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Phone 7
                        </li>
                      </ul>
                    </div>
                    <div className="lg:pr-[40px] pr-[10px]">
                      <h2 className="font-DM font-bold lg:text-[16px] text-[15px] text-[#262626] pb-3">
                        Computers
                      </h2>
                      <ul>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Computer 1
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Computer 2
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Computer 3
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Computer 4
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Computer 5
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Computer 6
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Computer 7
                        </li>
                      </ul>
                    </div>
                    <div className="lg:pr-[40px] pr-[10px] lg:w-[160px] w-[125px]">
                      <h2 className="font-DM font-bold lg:text-[16px] text-[15px] text-[#262626] pb-3">
                        Smart watches
                      </h2>
                      <ul>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Smart watches 1
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Smart watches 2
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Smart watches 3
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Smart watches 4
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Smart watches 5
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Smart watches 6
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Smart watches 7
                        </li>
                      </ul>
                    </div>
                    <div className="lg:pr-[40px] pr-[10px]">
                      <h2 className="font-DM font-bold lg:text-[16px] text-[15px] text-[#262626] pb-3">
                        Cameras
                      </h2>
                      <ul>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Camera 1
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Camera 2
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Camera 3
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Camera 4
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Camera 5
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Camera 6
                        </li>
                        <li className="font-DM font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out pb-2">
                          Camera 7
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[45%]">
              <div className="relative">
                <input
                value={searchChange}          
                onKeyUp={enter}
                  onChange={handleChange}
                  type="text"
                  className="w-full h-[45px] box-border pl-[15px] outline-none"
                  placeholder="Search Products"
                />
                <div className="absolute top-[50%] translate-y-[-50%] right-[15px]">
                  <div onClick={handleSearchClick} className="">
                  <FaSearch />
                  </div>
                </div>
                {searchFinter.length > 0 && 
                <div className="absolute z-40 top-[45px] lg:left-0 h-[500px] overflow-y-scroll">
                  {searchFinter.map((item)=>(
                                      <div onClick={()=>handleSingleP(item.id)} className="flex bg-[#F5F5F3] lg:py-[20px] lg:px-[20px] px-[10px] py-[10px]">
                                      <div className="flex items-center justify-between w-[350px]">
                                        <div className="">
                                          <img className="w-[100px] h-[100px]" src={item.thumbnail} alt="" />
                                        </div>
                                        <div className="lg:px-0 px-6">
                                          <h4 className="text-[14px ] text-[#262626] font-dm font-bold">
                                            {item.title}
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                  ))}
                </div>
                }
              </div>
            </div>
            <div className="w-[25%]  relative">
              <div className="flex justify-end gap-x-8">
                <div className="flex relative" ref={useMenu}>
                  <FaUser className="lg:pr-[6px] pr-[0] text-[22px]" />
                  <FaCaretDown />
                </div>
                {useshow && (
                  <div className="absolute z-50 top-10 right-[0px]">
                    <div className="text-center">
                      <ul>
                        <li className="text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 ">
                          My Account
                        </li>
                        <li className="text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 ">
                          Log Out
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                <div ref={cartMenu} className="relative">
                  {data.length ? (
                    <div className="bg-[#F5F5F3] w-[20px] h-[20px] absolute top-[-12px] left-[12px] text-center leading-[20px] rounded-full text-[red] font-DM font-bold">
                      {data.length}
                    </div>
                  ) : (
                    ""
                  )}
                  <FaShoppingCart className="text-[20px]" />
                </div>
              </div>
              {cartshow && (
                <div className="absolute z-40 top-[40px] lg:right-0 right-[-7px]">
                  <div className="flex bg-[#F5F5F3] lg:py-[20px] lg:px-[20px] px-[10px] py-[10px]">
                    <div className="flex items-center justify-between w-[350px]">
                      <div className="">
                        <img src={cart} alt="" />
                      </div>
                      <div className="lg:px-0 px-6">
                        <h4 className="text-[14px ] text-[#262626] font-dm font-bold">
                          Black Smart Watch
                        </h4>
                        <p className="text-[14px ] text-[#262626] font-dm font-bold">
                          $44.00
                        </p>
                      </div>
                      <div className="ml-[30px]">
                        <ImCross />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[white] py-[20px] px-[40px] lg:px-[20px]">
                    <div className="">
                      <h3 className="">
                        <span className="text-[16px] text-[rgba(38,38,38,0.67)] font-dm font-normal">
                          Subtotal:
                        </span>{" "}
                        <span className="text-[16px] text-[rgb(38,38,38)] font-dm font-bold">
                          {" "}
                          $44.00
                        </span>
                      </h3>
                    </div>
                    <div className="flex justify-between py-[20px]">
                      <div className="">
                        <a className="lg:py-[16px] py-[14px] px-[32px] lg:px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 ">
                          <Link to="/cart">View Cart</Link>
                        </a>
                      </div>
                      <div className="">
                        <a className="lg:py-[16px] py-[14px] px-[32px] lg:px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 ">
                          <Link to="/checkout">Checkout</Link>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Menu;
