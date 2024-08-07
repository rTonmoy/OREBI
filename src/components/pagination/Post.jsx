import React, { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/productSlice";
import { useNavigate } from "react-router-dom";

const Post = ({ allPage, categoryFilter, multi }) => {

  let dispatch = useDispatch()
  let navigate = useNavigate()
  let [filterShow, setFilterShow] = useState([])
  let [count, setCount] =useState(true)

  useEffect(()=>{
    let filterVag = categoryFilter.slice(0,5)
    setFilterShow(filterVag)
  },[categoryFilter])

  let handleFilShow = ()=>{
    setFilterShow(categoryFilter)
    setCount(false)
  }

  let handleFilHide = ()=>{
    setCount(true)
    let filterVag = categoryFilter.slice(0,5)
    setFilterShow(filterVag)
  }

  let handlePcart = (item)=>{
    dispatch(addToCart({...item, qun:1}))
  }

  return (
   
      <>
        {categoryFilter.length > 0
         ?
         <div className="">
          <div className="flex justify-between flex-wrap">
          {filterShow.map((item) => (
          <div className="w-[32%]">
             <Link to={`/product/${item.id}`}>
            <div className="relative group overflow-hidden ">
              <img src={item.thumbnail} className="w-full h-[320px]" alt="" />
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
                <h3 className="font-DM font-bold text-[#262626] text-[16px]">
                  {item.title}
                </h3>
              </div>
              <div className="">
                <h3 className="font-DM font-normal text-[#767676] text-[15px]">
                  ${item.price}
                </h3>
              </div>
            </div>
            </Link>
            
          </div>
        ))}
          </div>

          {count
          ?
           categoryFilter.length > 5 &&
          <div className="">
          <h2 onClick={handleFilShow} className=' px-2 py-2 text-center font-dm font-normal w-[100px] border-[1px] border-[#262626] rounded-[5px] hover:bg-[#262626] hover:text-[#fff] duration-500'>Show All</h2>
          </div>
          :
          categoryFilter.length > 5 && 
          <h2 onClick={()=>handleFilHide()} className=' px-2 py-2 text-center font-dm font-normal w-[100px] border-[1px] border-[#262626] rounded-[5px] hover:bg-[#262626] hover:text-[#fff] duration-500'>Show less</h2>
        }

         </div>
         :
         <div className={`${multi == "activeMulti" ? "" : "flex justify-between flex-wrap"}`}>
          {allPage.map((item) => (
          <div className="w-[32%]">
            <div className="relative group overflow-hidden ">
             <Link to={`/product/${item.id}`}>
              <img src={item.thumbnail} className="w-full h-[320px]" alt="" />
              </Link>
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
                  <p onClick={()=>handlePcart(item)} className=" font-DM font-normal text-[15px] text-[#767676] hover:text-[#262626] hover:font-bold duration-500 ease-in-out">
                    Add to Cart
                  </p>
                  <FaShoppingCart />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-4">
              <div className="">
                <h3 className="font-DM font-bold text-[#262626] text-[16px]">
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
         </div>
         }
      </>
 
  );
};

export default Post;
