import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="flex justify-between p-3 mb-5">
        <div>
          <Image
            src="/assets/footer-image.svg"
            width={200}
            height={150}
            alt="footer image"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-semibold text-[24px]">
            Get involved in improving tech <br /> education in Africa!
          </div>
          <div className="flex ">
            <button className="bg-[#264FAD] pl-8 pr-8 rounded-[10px] pt-2 pb-2 text-white">
              Support Us
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-semibold text-[20px]">Links</p>
          <ul className="flex flex-col gap-3">
            <li className="text-[#000000]">Home</li>
            <li>Sucess Stories</li>
            <li>About Us</li>
            <li>Get involved</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-semibold text-[20px]">Teams</p>
          <ul className="flex flex-col gap-3">
            <li>Board Members</li>
            <li>Advisors/Mentors</li>
            <li>Executives</li>
            <li>Staffs</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-[20px]">Blogs</p>
          <ul className="flex flex-col gap-3">
            <li>Recent Blogs</li>
            <li>New Blog</li>
          </ul>
        </div>
      </div>
      <div className="border-[0.3px] bg-[border:#C7C7C7] w-full "></div>
      <div className="flex justify-between p-6 items-center">
        <div className="flex  gap-2">
          <Image
            src="/assets/copy-right.svg"
            width={25}
            height={25}
            alt="copy-right image"
          />{" "}
          2020 Africa to Silicon Valley, Inc. All right reserved.
        </div>
        <div>
          <ul className="flex gap-8">
            <li>
              <Image
                src="/assets/Twitter.svg"
                width={25}
                height={25}
                alt="twitter image"
              />
            </li>
            <li>
              <Image
                src="/assets/facebook.svg"
                width={25}
                height={25}
                alt="facebook image"
              />
            </li>
            <li>
              <Image
                src="/assets/youtube.svg"
                width={25}
                height={25}
                alt="youtube image"
              />
            </li>
            <li>
              <Image
                src="/assets/linkedin.svg"
                width={25}
                height={25}
                alt="linkedin image"
              />
            </li>
            <li>
              <Image
                src="/assets/instagram.svg"
                width={25}
                height={25}
                alt="instagram image"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
