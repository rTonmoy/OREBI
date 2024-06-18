import React, { useState } from 'react'
import Container from '../components/Container'

const Myaccount = () => {
    let [show, setShow] = useState()
    let [show2, setShow2] = useState()
    let [show3, setShow3] = useState()
    let [show6, setShow6] = useState()
    let [show7, setShow7] = useState()
    let [show8, setShow8] = useState()
  return (
    <Container>
      <div className="py-[140px]">
      <div className="pb-[120px]">
        <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>My Account</h2>
        <p className=' font-dm text-[12px] text-[#767676] font-normal'>Home  &gt;  My Account</p>
      </div>


      <div className="flex">
        <div onClick={()=>setShow(!show)} className="w-[20%]">
          <div className="pb-[20px] border-b-[1px] border-[#F0F0F0] flex">
            <h5 className=' text-[16px] text-[#767676] font-dm font-bold ' >Dashboard</h5>
          </div>
        </div>

        {show &&
          <div className="ml-[40px] w-[80%] relative">
            <div className="absolute top-0 left-0 ">
            <h4 className=' text-[16px] text-[#262626] font-dm font-normal w-full ' >Hello admin (not admin? Log out)</h4>
            <p className='text-[16px] text-[#262626] font-dm font-normal ' >From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            </div>
          </div>
        }
      </div>



      <div className="flex mt-[20px]">
        <div onClick={()=>setShow2(!show2)} className="w-[20%]">
          <div className="pb-[20px] border-b-[1px] border-[#F0F0F0] flex">
            <h5 className=' text-[16px] text-[#767676] font-dm font-bold ' >Others</h5>
          </div>
        </div>

        {show2 &&
          <div className="ml-[40px] w-[80%] relative">
            <div className="absolute top-0 left-0 ">
            <h4 className=' text-[16px] text-[#262626] font-dm font-normal w-full ' >Hello admin (not admin? Log out)</h4>
            <p className='text-[16px] text-[#262626] font-dm font-normal ' >From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            </div>
          </div>
        }
      </div>




      <div className="flex mt-[20px]">
        <div onClick={()=>setShow3(!show3)} className="w-[20%]">
          <div className="pb-[20px] border-b-[1px] border-[#F0F0F0] flex">
            <h5 className=' text-[16px] text-[#767676] font-dm font-bold ' >Donwloads</h5>
          </div>
        </div>

        {show3 &&
          <div className="ml-[40px] w-[80%] relative">
            <div className="absolute top-0 left-0 ">
            <h4 className=' text-[16px] text-[#262626] font-dm font-normal w-full ' >Hello admin (not admin? Log out)</h4>
            <p className='text-[16px] text-[#262626] font-dm font-normal ' >From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            </div>
          </div>
        }
      </div>



      <div className="flex mt-[20px]">
        <div onClick={()=>setShow6(!show6)} className="w-[20%]">
          <div className="pb-[20px] border-b-[1px] border-[#F0F0F0] flex">
            <h5 className=' text-[16px] text-[#767676] font-dm font-bold ' >Addresses</h5>
          </div>
        </div>

        {show6 &&
          <div className="ml-[40px] w-[80%] relative">
            <div className="absolute top-0 left-0 ">
            <h4 className=' text-[16px] text-[#262626] font-dm font-normal w-full ' >Hello admin (not admin? Log out)</h4>
            <p className='text-[16px] text-[#262626] font-dm font-normal ' >From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            </div>
          </div>
        }
      </div>


      <div className="flex mt-[20px]">
        <div onClick={()=>setShow7(!show7)} className="w-[20%]">
          <div className="pb-[20px] border-b-[1px] border-[#F0F0F0] flex">
            <h5 className=' text-[16px] text-[#767676] font-dm font-bold ' >Account details</h5>
          </div>
        </div>

        {show7 &&
          <div className="ml-[40px] w-[80%] relative">
            <div className="absolute top-0 left-0 ">
            <h4 className=' text-[16px] text-[#262626] font-dm font-normal w-full ' >Hello admin (not admin? Log out)</h4>
            <p className='text-[16px] text-[#262626] font-dm font-normal ' >From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            </div>
          </div>
        }
      </div>


      <div className="flex mt-[20px]">
        <div onClick={()=>setShow8(!show8)} className="w-[20%]">
          <div className="pb-[20px] border-b-[1px] border-[#F0F0F0] flex">
            <h5 className=' text-[16px] text-[#767676] font-dm font-bold ' >Logout</h5>
          </div>
        </div>

        {show8 &&
          <div className="ml-[40px] w-[80%] relative">
            <div className="absolute top-0 left-0 ">
            <h4 className=' text-[16px] text-[#262626] font-dm font-normal w-full ' >Hello admin (not admin? Log out)</h4>
            <p className='text-[16px] text-[#262626] font-dm font-normal ' >From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            </div>
          </div>
        }
      </div>



      </div>
    </Container>
  )
}

export default Myaccount