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
          <li className=" text-[#565656] font-semibold text-[18px]">Home</li>
          <li className=" text-[#565656] font-semibold text-[18px]">Teams</li>
          <li className="text-[#565656] font-semibold text-[18px]">
            Success Stories
          </li>
          <li className="text-[#565656] font-semibold text-[18px]">About Us</li>
          <li className=" text-[#565656] font-semibold text-[18px]">Blogs</li>
          <li className="text-[#565656] font-semibold text-[18px]">
            Get involved
          </li>
        </ul>
      </div>
      <div className=" ">
        <ul className="flex pt-[47px] gap-7">
          <li className="text-[#3C3C3C]">Login</li>
          <li className="bg-[#264FAD] text-white">Donate</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
