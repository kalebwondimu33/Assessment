import React from "react";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav className="w-full h-[118px] flex  gap-[160px]">
      <div className="pt-[34px] pl-[48px]">
        <Image width={197} height={50} alt="logo" src="/assets/logo.svg" />
      </div>
      <div className="">
        <ul className="flex justify-between pt-[47px] gap-7">
          <li className=" text-[#565656] font-semibold text-[18px] hover:[#fff]">
            <a href="" className="hover:text-blue-500 ">
              Home
            </a>
          </li>
          <li className=" text-[#565656] font-semibold text-[18px]">
            <a href="" className="hover:text-blue-500 ">
              Teams
            </a>
          </li>
          <li className="text-[#565656] font-semibold text-[18px]">
            <a href="" className="hover:text-blue-500 ">
              Success Stories
            </a>
          </li>
          <li className="text-[#565656] font-semibold text-[18px]">
            <a href="" className="hover:text-blue-500 ">
              About Us
            </a>
          </li>
          <li className=" text-[#565656] font-semibold text-[18px]">
            <a href="" className="hover:text-blue-500 ">
              Blogs
            </a>
          </li>
          <li className="text-[#565656] font-semibold text-[18px]">
            <a href="" className="hover:text-blue-500 ">
              Get involved
            </a>
          </li>
        </ul>
      </div>
      <div className=" ">
        <ul className="flex pt-[47px] gap-7 ">
          <li className="text-[#3C3C3C]">Login</li>
          <li className="bg-[#264FAD] py-2 px-4 text-white rounded-[10px]">
            Donate
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
