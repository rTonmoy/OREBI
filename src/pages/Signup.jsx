import React, { useState } from "react";
import Container from "../components/Container";
import { getAuth, createUserWithEmailAndPassword,  updateProfile } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    
  const auth = getAuth();

  const [yes, setYes] = useState("yes");

  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate("")

  let handleFirstName = (e) => {
    setFullName(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(auth.currentUser, {
            displayName: fullName
          }).then(() => {
            toast("SignUP Done!")
            setTimeout(()=>{
                navigate("/login")
            },2000)
          }).catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <Container>
      <div className="">
        <div className="py-[120px]">
          <h2 className=" font-dm font-bold text-[49px] text-[#262626]">
            Sign Up
          </h2>
          <p className=" font-dm text-[12px] text-[#767676] font-normal">
            Home &gt; Sign up
          </p>
        </div>

        <div className="border-b-[1px] border-[#F0F0F0] pb-[62px]">
          <p className="text-[16px] text-[#767676] font-dm w-[644px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className="pb-[70px] border-b-[1px] border-[#F0F0F0]">
          <div className="w-[65%]">
            <h2 className=" font-dm font-bold text-[39px] text-[#262626] py-[55px]">
              Your Personal Details
            </h2>

            <div className=" ">
              <div className="flex justify-between flex-wrap">
                <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                  <h5 className="text-[16px] text-[#262626] font-dm font-bold">
                    First Name
                  </h5>
                  <input
                    onChange={handleFirstName}
                    className="py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-[49%]">
                  <div className="border-b-[1px] border-[#F0F0F0]">
                    <h5 className=" text-[16px] text-[#262626] font-dm font-bold">
                      Last Name
                    </h5>
                    <input
                      className=" py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between flex-wrap pt-[24px]">
                <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                  <h5 className="text-[16px] text-[#262626] font-dm font-bold">
                    Email address
                  </h5>
                  <input
                    onChange={handleEmail}
                    className="py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                    type="email"
                    placeholder="company@domain.com"
                  />
                </div>
                <div className="w-[49%]">
                  <div className="border-b-[1px] border-[#F0F0F0]">
                    <h5 className=" text-[16px] text-[#262626] font-dm font-bold">
                      Telephone
                    </h5>
                    <input
                      className=" py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                      type="tel"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-[70px] border-b-[1px] border-[#F0F0F0]">
          <div className="w-[65%]">
            <h2 className=" font-dm font-bold text-[39px] text-[#262626] py-[55px]">
              New Customer
            </h2>

            <div className=" ">
              <div className="flex justify-between flex-wrap">
                <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                  <h5 className="text-[16px] text-[#262626] font-dm font-bold">
                    Address 1
                  </h5>
                  <input
                    className="py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                    type="text"
                    placeholder="4279 Zboncak Port Suite 6212"
                  />
                </div>
                <div className="w-[49%]">
                  <div className="border-b-[1px] border-[#F0F0F0]">
                    <h5 className=" text-[16px] text-[#262626] font-dm font-bold">
                      Address 2
                    </h5>
                    <input
                      className=" py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                      type="text"
                      placeholder="4279 Zboncak Port Suite 6212"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between flex-wrap pt-[24px]">
                <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                  <h5 className="text-[16px] text-[#262626] font-dm font-bold">
                    City
                  </h5>
                  <input
                    className="py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                    type="text"
                    placeholder="Your city"
                  />
                </div>
                <div className="w-[49%]">
                  <div className="border-b-[1px] border-[#F0F0F0]">
                    <h5 className=" text-[16px] text-[#262626] font-dm font-bold">
                      Post Code
                    </h5>
                    <input
                      className=" py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                      type="text"
                      placeholder="05228"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between flex-wrap pt-[24px]">
                <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                  <h5 className="text-[16px] text-[#262626] font-dm font-bold">
                    Division
                  </h5>
                  <input
                    className="py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                    type="text"
                    placeholder="Please select"
                  />
                </div>
                <div className="w-[49%]">
                  <div className="border-b-[1px] border-[#F0F0F0]">
                    <h5 className=" text-[16px] text-[#262626] font-dm font-bold">
                      District
                    </h5>
                    <input
                      className=" py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                      type="text"
                      placeholder="Please select"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[70px] border-b-[1px] border-[#F0F0F0]">
          <div className="w-[65%]">
            <h2 className=" font-dm font-bold text-[39px] text-[#262626] py-[55px]">
              Your Password
            </h2>

            <div className=" ">
              <div className="flex justify-between flex-wrap">
                <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                  <h5 className="text-[16px] text-[#262626] font-dm font-bold">
                    Password
                  </h5>
                  <input
                    onChange={handlePassword}
                    className="py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="w-[49%]">
                  <div className="border-b-[1px] border-[#F0F0F0]">
                    <h5 className=" text-[16px] text-[#262626] font-dm font-bold">
                      Repeat Password
                    </h5>
                    <input
                      className=" py-[20px] text-[14px] text-[#767676] font-dm outline-none"
                      type="password"
                      placeholder="Repeat Password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[65px]">
          <div className="flex">
            <input type="checkbox" className="mr-[5px]" />
            <p className="text-[16px] text-[#767676] font-dm font-normal ">
              I have read and agree to the Privacy Policy
            </p>
          </div>

          <div className="pt-[10px]">
            <div className="flex">
              <p className="text-[16px] text-[#767676] font-dm font-normal ">
                {" "}
                Subscribe Newsletter
              </p>

              <label className="ml-[30px]" htmlFor="">
                <input
                  type="checkbox"
                  checked={yes === "yes"}
                  onChange={() => setYes("yes")}
                />
                Yes
              </label>

              <label className="ml-[30px]" htmlFor="">
                <input
                  type="checkbox"
                  checked={yes === "no"}
                  onChange={() => setYes("no")}
                />
                No
              </label>
            </div>
          </div>
          <div className="pt-[26px]">
            <div className="">
              <button
                onClick={handleSubmit}
                className="text-[16px] text-[#262626] font-dm font-bold h-[50px] w-[200px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] ease-in-out duration-300"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
              <ToastContainer />
    </Container>
  );
};

export default Signup;
