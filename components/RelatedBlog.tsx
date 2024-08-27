import React from "react";
import Image from "next/image";
const RelatedBlog = () => {
  return (
    <div className="w-[300px] h-[520px] shadow">
      <Image
        src="/assets/boximage.svg"
        width={300}
        height={100}
        alt="box image"
      />
      <div className="flex flex-col gap-3 p-3">
        <div className="text-[#5E5873] text-18px pt-2 pb-2">
          Design Liberalized Exchange Rate Management
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src="/assets/box-desc.svg"
            alt="user image"
            width={30}
            height={30}
          />
          <div className="text-[#6E6B7B] text-[12px]">
            {" "}
            <span className="text-[#B9B9C3] text-[10px]  pr-2">by</span>Fred
            Boore
          </div>
          <div className="text-[#B9B9C3] text-[12px]">Jan 10, 2020</div>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#F5F5F5] pl-4 pr-4 pt-1 pb-1 rounded-[20px] text-[12px] flex items-center text-[#8E8E8E]">
            UI/Ux
          </div>
          <div className="bg-[#F5F5F5] pl-4 pr-4 pt-1 pb-1 rounded-[20px] text-[#8E8E8E] text-[12px] flex items-center">
            DEVELOPMENT
          </div>
        </div>
        <div className="text-[#6E6B7B] text-[14px] leading-[21px]">
          A little personality goes a long way, especially on a business blog.
          So don’t be afraid to let loose.
        </div>
        <div className="border-[0.4px] bg-[#EBE9F1]"></div>
        <div className="flex p-2 justify-between">
          <div className="flex gap-2">
            <Image
              src="assets/message.svg"
              width={15}
              height={15}
              alt="message"
            />
            <div className="text-[#5E5873] text-[14px]">2.3k Likes</div>
          </div>
          <div>
            <a href="" className="text-[#7367F0]">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;
