import React from "react";

const PaginationArea = ({ pageNumber,paginate,pageStart,next,prev }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px text-sm">
        <li onClick={prev}>
          <a
            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border rounded-l-lg cursor-pointer"
          >
            Previous
          </a>
        </li>
        {pageNumber.map((item, i) => (
          <li onClick={()=>paginate(item)}>
            <a
              class={pageStart == i + 1 ? " flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#262626] border  cursor-pointer" : " flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-[#fff] border  cursor-pointer"}
            >
              {/* flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-[red] border  cursor-pointer */}
              {item + 1}
            </a>
          </li>
        ))}

        <li onClick={next}>
          <a
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  rounded-e-lg cursor-pointer"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationArea;
