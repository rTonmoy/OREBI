import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FiPlus } from "react-icons/fi";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { IoGrid } from "react-icons/io5";
import { BsGrid1X2Fill } from "react-icons/bs";
import { ApiData } from "../components/ContextApi";
import Post from "../components/pagination/Post";
import PaginationArea from "../components/pagination/PaginationArea";
import { FaMinus } from "react-icons/fa";

const Product = () => {
  let [colShow, setColshow] = useState(false);
  let [branShow, setBranshow] = useState(false);
  let [cateShow, setCateshow] = useState(false);
  let [category, setCategory] = useState([]);

  let data = useContext(ApiData);

  let [pageStart, setPageStart] = useState(1);
  let [perPage, setPerPage] = useState(6);

  let lastpage = pageStart * perPage;
  let firstPage = lastpage - perPage;

  let allPage = data.slice(firstPage, lastpage);

  let pageNumber = [];
  for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
    pageNumber.push(i);
  }

  let paginate = (pageNumber) => {
    setPageStart(pageNumber + 1);
  };

  let next = () => {
    if (pageStart < pageNumber.length) {
      setPageStart((state) => state + 1);
    }
  };

  let prev = () => {
    if (pageStart > 1) {
      setPageStart((state) => state - 1);
    }
  };

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  return (
    <div>
      <Container>
        <div className="py-[40px]">
          <h2 className=" font-DM font-bold text-[45px] text-[#262626]">
            Products
          </h2>
          <p className=" font-DM text-[12px] text-[#767676]">
            Home &#62; <span>Products</span>
          </p>
        </div>

        <Flex className="justify-between">
          <div className="w-[20%]">
            <div onClick={() => setCateshow(!cateShow)} className="">
              <div className="flex justify-between items-center">
                <h3 className=" font-DM font-bold text-[18px] text-[#262626]">
                  Shop by Category
                </h3>
                {cateShow == true  ? <FaMinus/> :  <FiPlus />}
                
              </div>
              {cateShow && (
                <div className="">
                  {category.map((item) => (
                    <div className="border-b-[1px] border-[#F0F0F0] pt-[20px] pb-[19px]">
                      <p className="font-DM text-[16px] text-[#767676]">
                      {item}
                    </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div onClick={() => setColshow(!colShow)} className="">
              <div className="flex justify-between items-center pt-9">
                <h3 className=" font-DM font-bold text-[18px] text-[#262626]">
                  Shop by Color
                </h3>
                {colShow == true ? (
                  <RiArrowDownSFill className="text-[25px]" />
                ) : (
                  <RiArrowUpSFill className="text-[25px]" />
                )}
              </div>
              {colShow && (
                <div className="">
                  <div className="flex items-center border-b-[1px] border-[#F0F0F0] py-[16px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#222]"></div>
                    <p className="font-DM text-[16px] text-[#767676] px-[15px]">
                      Color 1
                    </p>
                  </div>
                  <div className="flex items-center border-b-[1px] border-[#F0F0F0] py-[16px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FF8686]"></div>
                    <p className="font-DM text-[16px] text-[#767676] px-[15px]">
                      Color 2
                    </p>
                  </div>
                  <div className="flex items-center border-b-[1px] border-[#F0F0F0] py-[16px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#7ED321]"></div>
                    <p className="font-DM text-[16px] text-[#767676] px-[15px]">
                      Color 3
                    </p>
                  </div>
                  <div className="flex items-center border-b-[1px] border-[#F0F0F0] py-[16px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#B6B6B6]"></div>
                    <p className="font-DM text-[16px] text-[#767676] px-[15px]">
                      Color 4
                    </p>
                  </div>
                  <div className="flex items-center border-b-[1px] border-[#F0F0F0] py-[16px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#15CBA5]"></div>
                    <p className="font-DM text-[16px] text-[#767676] px-[15px]">
                      Color 5
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div onClick={() => setBranshow(!branShow)} className="">
              <div className="flex justify-between items-center pt-9">
                <h3 className=" font-DM font-bold text-[18px] text-[#262626]">
                  Shop by Brand
                </h3>
                {branShow == true ? (
                  <RiArrowDownSFill className="text-[25px]" />
                ) : (
                  <RiArrowUpSFill className="text-[25px]" />
                )}
              </div>
              {branShow && (
                <div className="">
                  <div className=" border-b-[1px] border-[#F0F0F0] pt-[30px] pb-[19px]">
                    <p className="font-DM text-[16px] text-[#767676]">
                      Brand 1
                    </p>
                  </div>
                  <div className=" border-b-[1px] border-[#F0F0F0]  py-[16px]">
                    <p className="font-DM text-[16px] text-[#767676]">
                      Brand 2
                    </p>
                  </div>
                  <div className=" border-b-[1px] border-[#F0F0F0] ] py-[16px]">
                    <p className="font-DM text-[16px] text-[#767676]">
                      Brand 3
                    </p>
                  </div>
                  <div className=" border-b-[1px] border-[#F0F0F0]  py-[16px]">
                    <p className="font-DM text-[16px] text-[#767676]">
                      Brand 4
                    </p>
                  </div>
                  <div className=" border-b-[1px] border-[#F0F0F0]  py-[16px]">
                    <p className="font-DM text-[16px] text-[#767676]">
                      Brand 5
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="">
              <div className=" pt-9">
                <h3 className=" font-DM font-bold text-[18px] text-[#262626]">
                  Shop by Price
                </h3>
              </div>
              <div className=" border-b-[1px] border-[#F0F0F0] pt-[30px] pb-[19px]">
                <p className="font-DM text-[16px] text-[#767676]">
                  $0.00 - $9.99
                </p>
              </div>
              <div className=" border-b-[1px] border-[#F0F0F0]  py-[16px]">
                <p className="font-DM text-[16px] text-[#767676]">
                  $10.00 - $19.99
                </p>
              </div>
              <div className=" border-b-[1px] border-[#F0F0F0]  py-[16px]">
                <p className="font-DM text-[16px] text-[#767676]">
                  $20.00 - $29.99
                </p>
              </div>
              <div className=" border-b-[1px] border-[#F0F0F0]  py-[16px]">
                <p className="font-DM text-[16px] text-[#767676]">
                  $30.00 - $39.99
                </p>
              </div>
              <div className=" border-b-[1px] border-[#F0F0F0]  py-[16px]">
                <p className="font-DM text-[16px] text-[#767676]">
                  $40.00 - $69.99
                </p>
              </div>
            </div>
          </div>
          <div className="w-[76%]">
            <div className="">
              <div className="flex mb-6">
                <div className="p-[10px] border-[1px] mr-2 border-[#767676]  bg-[transparent] hover:bg-[#222] text-[#222] hover:text-[#fff] duration-500 ease-in-out text-[19px]">
                  <IoGrid className="" />
                </div>
                <div className="p-[10px] border-[1px] border-[#767676] bg-[transparent] hover:bg-[#222] text-[#222] hover:text-[#fff] duration-500 ease-in-out text-[18px]">
                  <BsGrid1X2Fill />
                </div>
              </div>
            </div>

            <div className="">
              <Post allPage={allPage} />
            </div>
            <div className="">
              <PaginationArea
                pageNumber={pageNumber}
                paginate={paginate}
                pageStart={pageStart}
                next={next}
                prev={prev}
              />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Product;
