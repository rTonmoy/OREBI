import React from 'react'
import Container from '../components/Container'

const CheckOut = () => {
  return (
    <Container>
    <div className="py-[120px]">
        <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Checkout</h2>
        <p className=' font-dm text-[12px] text-[#767676] font-normal'>Home  &gt;  Checkout</p>
    </div>

    <div className="pb-[119px]">
        <h4 className='text-[16px] text-[#262626] font-dm font-normal'> <span className='text-[16px] text-[#767676] font-dm font-normal'>Have a coupon?</span> Click here to enter your code</h4>
    </div>

    <div className="">
        <h2 className=' font-dm font-bold text-[39px] text-[#262626] py-[55px]'>Billing Details</h2>
        <div className="flex justify-between flex-wrap">
            <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                <h5 className='text-[16px] text-[#262626] font-dm font-bold'>First Name*</h5>
                <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="text" placeholder='First Name' />
            </div>
            <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Last Name*</h5>
                <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="text" placeholder='Last Name' />
            </div>
        </div>

        <div className="border-b-[1px] border-[#F0F0F0] pt-[50px]">
            <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Companye Name (optional)</h5>
            <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="text" placeholder='Company Name' />
        </div>


        <div className="border-b-[1px] border-[#F0F0F0]  pt-[50px]">
            <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Country *</h5>
            <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="text" placeholder='Please select' />
        </div>



        <div className="border-b-[1px] border-[#F0F0F0]  pt-[50px]">
            <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Street Address *</h5>
            <input className='border-b-[1px] border-[#F0F0F0] w-full py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="text" placeholder='House number and street name' />

            <div className="">
                <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="text" placeholder='Apartment, suite, unit etc. (optional)' />
            </div>
        </div>

        <div className="border-b-[1px] border-[#F0F0F0]  pt-[50px]">
            <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Town/City *</h5>
            <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="text" placeholder='Town/City' />
        </div>


        <div className="border-b-[1px] border-[#F0F0F0]  pt-[50px]">
            <h5 className='text-[16px] text-[#262626] font-dm font-bold'>County (optional)</h5>
            <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="text" placeholder='County' />
        </div>

        <div className="border-b-[1px] border-[#F0F0F0]  pt-[50px]">
            <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Post Code *</h5>
            <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="tel" placeholder='Post Code' />
        </div>

        <div className="border-b-[1px] border-[#F0F0F0]  pt-[50px]">
            <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Phone *</h5>
            <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="text" placeholder='Phone' />
        </div>


        <div className="border-b-[1px] border-[#F0F0F0]  pt-[50px]">
            <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Email Address *</h5>
            <input className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="email" placeholder='Email' />
        </div>
    </div>

    <div className="">
        <h2 className=' font-dm font-bold text-[39px] text-[#262626] py-[55px]'>Additional Information</h2>

        <div className="">
            <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Other Notes (optional)</h5>
            <textarea className='w-full border-b-[1px] border-[#F0F0F0] pb-[87px] outline-none' placeholder='Notes about your order, e.g. special notes for delivery.' name="" id="">
            </textarea>
        </div>
    </div>


    <div className="">
        <div className="">
            <h2 className=' font-dm font-bold text-[39px] text-[#262626] py-[55px]'>Your Order</h2>
        </div>

        <div className="">
            <div className="w-[40%]  pt-[50px]">
                <div className="flex">
                    <div className="">
                        <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                            <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[10px] '>Product</p>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                            <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[10px] '> Total </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-[40%]  ">
                <div className="flex">
                    <div className="">
                        <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                            <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[10px] '>Product name x 1</p>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                            <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[10px] '> 389.99 $ </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-[40%]  ">
                <div className="flex">
                    <div className="">
                        <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                            <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[10px] '>Subtotal</p>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                            <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[10px] '> 389.99 $ </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-[40%] ">
                <div className="flex">
                    <div className="">
                        <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                            <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[10px] '>Total</p>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                            <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[10px] '> 389.99 $ </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</Container>
  )
}

export default CheckOut