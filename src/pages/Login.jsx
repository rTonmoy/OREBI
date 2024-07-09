import React, { useState } from 'react'
import Container from '../components/Container'
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const auth = getAuth();
    let navigate = useNavigate("")

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    let handlePassword = (e)=>{
        setPassword(e.target.value)
    }


    let handleLogIn = ()=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  }).then(()=>{
    toast("Login Done!")
    setTimeout(() => {
        navigate("/")
    },1000);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

  return (
    <Container>
    <div className="pb-[50px]">
        <div className="py-[120px]">
            <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Login</h2>
            <p className=' font-dm text-[12px] text-[#767676] font-normal'>Home  &gt;  Login</p>
        </div>

        <div className="border-b-[1px] border-[#F0F0F0] pb-[62px]">
            <p className='text-[16px] text-[#767676] font-dm w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>

        <div className="">
            <h2 className=' font-dm font-bold text-[39px] text-[#262626] py-[55px]'>Returning Customer</h2>

            <div className="flex justify-between flex-wrap">
                <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                    <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Email address</h5>
                    <input onChange={handleEmail}  className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="mail" placeholder='company@domain.com' />
                </div>
                <div className="w-[49%]">
                <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                    <h5 className=' text-[16px] text-[#262626] font-dm font-bold'>Password</h5>
                    <input onChange={handlePassword} className=' py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="password" placeholder='********' />
                </div>
                </div>
            </div>
        </div>

        <div className="pt-[29px] pb-[70px] border-b-[1px] border-[#F0F0F0]">
            <div className="">
                <button onClick={handleLogIn} className='text-[16px] text-[#262626] font-dm font-bold h-[50px] w-[200px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] ease-in-out duration-300'>Log in</button>
            </div>
        </div>

        <div className="pt-[58px] pb-[148px]">
            <div className="">
                <h4 className='text-[39px] text-[#262626] font-dm font-bold'>New Customer</h4>
            </div>
            <div className="pt-[38px] pb-[51px]">
                <p className='text-[16px] text-[#767676] font-dm font-normal leading-8 w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>
            <div className="">
            <div className="">
                <button className='text-[16px] text-[#262626] font-dm font-bold h-[50px] w-[200px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] ease-in-out duration-300'>Continue</button>
            </div>
            </div>
        </div>
    </div>
    <ToastContainer />
</Container>
  )
}

export default Login