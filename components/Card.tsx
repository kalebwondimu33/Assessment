import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="w-[1000px] h-[300px] flex justify-between ">
      <div>
        <div className="flex gap-4 items-center pt-2 pb-4 ">
          <Image
            src="/assets/user.svg"
            alt="user image"
            height={45}
            width={45}
          />

          <div>
            Yididiya Kebede
            <p className="text-[10px] text-[#9C9C9C]">SOFTWARE ENGINEER</p>
          </div>
          <div className="text-[10px] text-[#9C9C9C] ">Apr 16, 2022</div>
        </div>
        <div className="pb-3 text-[#000000] leading-[25px]">
          The essential guide to Competitive Programming <br></br> Tab System On
          React : 3 ways to do it.{" "}
        </div>
        <div className="pb-4 text-[#737373] leading-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,<br></br> quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea{" "}
        </div>
        <div className="flex gap-10 pl-6">
          <div className="w-[100px] h-[40px] bg-[#F5F5F5] flex items-center justify-center rounded-[25px] text-[#8E8E8E] text-[14px]">
            UX/UI
          </div>
          <div className="w-[120px] h-[40px] bg-[#F5F5F5] flex items-center justify-center rounded-[25px]  text-[#8E8E8E] text-[14px]">
            Developemt
          </div>
        </div>
      </div>
      <div className="pt-[50px]">
        <Image
          src="/assets/cardImage.svg"
          width={300}
          height={200}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Card;
