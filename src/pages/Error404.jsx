import React from 'react'
import Container from '../components/Container'
import { FaSearch } from "react-icons/fa";


const Error404 = () => {
  return (
    <Container>
            <div className="">
                <h2 className='text-[200px] text-[#262626] font-dm font-bold'>404</h2>
            </div>

            <div className="">
                <p className='text-[16px] text-[#767676] font-dm font-normal w-[644px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
            </div>

            <div className="py-[50px]">
                <div className="relative w-[644px]">
                    <input className='font-dm font-normal outline-none h-[71px] w-[644px] items-center  border-[1px] border-[#767676] pl-[20px] ' type="text" placeholder='Type to search' />

                    <div className=" absolute top-[50%] translate-y-[-50%] right-[30px]">
                        <FaSearch />
                    </div>
                </div>
            </div>

            <div className="pb-[120px]">
                <div className="">
                    <button className='text-[16px] text-[#262626] font-dm font-bold h-[50px] w-[200px] items-center border-[1px] hover:text-[#fff] hover:bg-[#262626] duration-500 ease-in-out'>Back to Home</button>
                </div>
            </div>
        </Container>
  )
}

export default Error404