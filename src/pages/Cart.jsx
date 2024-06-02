import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import one from "../assets/cartimg.png"
import { RxCross2 } from "react-icons/rx";
import { TiArrowSortedDown } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { productIncrement, productDecrement } from "../components/slice/productSlice";

const Cart = () => {
  let dispatch = useDispatch()
  let data = useSelector((state)=>state.product.cartItem)

  return (
    <Container>
      <div className=" my-16">
        <h2 className=" font-DM font-bold text-[#262626] text-[42px]">Cart</h2>
        <p className=" font-DM text-[#6D6D60] text-[12px]">Home &#62; Cart</p>
      </div>
      <Flex className="justify-between flex-wrap bg-[#F5F5F3] py-4 px-3">
        <div className="w-[25%]">
          <h4 className=" font-DM font-bold text-[15px] text-[#262626]">
            Product
          </h4>
        </div>
        <div className="w-[25%]">
          <h4 className=" font-DM font-bold text-[15px] text-[#262626]">
            Price
          </h4>
        </div>
        <div className="w-[25%]">
          <h4 className=" font-DM font-bold text-[15px] text-[#262626]">
            Quantity
          </h4>
        </div>
        <div className="w-[25%]">
          <h4 className=" font-DM font-bold text-[15px] text-[#262626]">
            Total
          </h4>
        </div>
      </Flex>

      {data.map((item, i)=>(
              <Flex className="justify-between flex-wrap pt-3 pb-10 px-3 items-center border-[1px] border-[#F0F0F0]">
              <div className="w-[25%] flex justify-around items-center">
                <div className=""><RxCross2/></div>
                <div className=""><img className="w-[100px] h-[100px]" src={item.thumbnail}  alt="" /></div>
                <div className=""><h4 className=" font-DM font-bold text-[14px] text-[#262626]">{item.title}</h4></div>
              </div>
              <div className="w-[25%]">
                <h4 className=" font-DM font-bold text-[15px] text-[#262626]">
                  ${item.price}
                </h4>
              </div>
              <div className="w-[25%]">
                <div className="flex items-center py-7">
                  <div className="flex items-center justify-around border-[1px] border-[#F0F0F0] py-1 px-2">
                    <h5 onClick={()=>dispatch(productDecrement(i))} className=" font-DM pr-8  text-[#767676] cursor-pointer">-</h5>
                    <h5 className=" font-DM pr-8 text-[#767676]">{item.qun}</h5>
                    <h5 onClick={()=>dispatch(productIncrement(i))} className=" font-DM  text-[#767676] cursor-pointer">+</h5>
                  </div>
                </div>
              </div>
              <div className="w-[25%]">
                <h4 className=" font-DM font-bold text-[15px] text-[#262626]">
                  ${item.price * item.qun}
                </h4>
              </div>
            </Flex>
      ))}

      <Flex className="justify-between items-center flex-wrap border-[1px] border-[#F0F0F0] py-3">
        <div className="w-[25%]">
          <div className="flex justify-between items-center">
            <div className="flex justify-between w-[40%] items-center ml-[50px] border-[1px] border-[#EAEAEA] p-2">
              <div className=""><p className=" font-DM text-[15px] text-[#767676]">SIZE</p></div>
              <div className=""><TiArrowSortedDown className="text-[#767676]"/></div>
            </div>
            <div className=""><h4 className=" font-DM font-bold text-[14px] text-[#262626] text-right mr-5">Apply coupon</h4></div>
          </div>
        </div>
        <div className="w-[50%]"><p className=" font-DM font-bold text-[14px] text-[#262626] text-right mr-5">Update cart</p></div>
      </Flex>

      <div className="text-right py-8">
        <h4 className=" font-DM font-bold text-[18px] text-[#262626] pb-5">Cart totals</h4>
        <div className="">
          <span  className="font-DM font-bold text-[15px] text-[#262626] border-[1px] border-[#F0F0F0] py-4 pl-2 pr-[150px]">Subtotal</span>
          <span  className="font-DM font-bold text-[15px] text-[#767676] border-[1px] border-[#F0F0F0] py-4 pl-2 pr-[150px]">389.99 $</span>
        </div>
        <div className=" py-7">
          <span  className="font-DM font-bold text-[15px] text-[#262626] border-[1px] border-[#F0F0F0] py-4 pl-2 pr-[150px]">Subtotal</span>
          <span  className="font-DM font-bold text-[15px] text-[#767676] border-[1px] border-[#F0F0F0] py-4 pl-2 pr-[150px]">389.99 $</span>
        </div>
        <div className="mt-3 mb-14">
          <p className="bg-[#262626] font-DM font-bold inline-block text-[#fff] px-[30px] py-2 text-[14px]">Proceed to Checkout</p>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
