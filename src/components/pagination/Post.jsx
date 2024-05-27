import React from "react";
import { IoIosHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Post = ({ allPage }) => {
  return (
   
      <div className="flex justify-between flex-wrap">
        {allPage.map((item) => (
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
 
  );
};

export default Post;
