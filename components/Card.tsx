import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="w-[1000px] h-[300px] flex bg-slate-400 items-center justify-between">
      <div>
        <div className="flex gap-4 items-center">
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
        <div>
          The essential guide to Competitive Programming <br></br> Tab System On
          React : 3 ways to do it.{" "}
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,<br></br> quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea{" "}
        </div>
        <div className="flex">
          <div>UX/UI</div>
          <div>Developemt</div>
        </div>
      </div>
      <div>
        <Image src="/assets/cardImage.svg" width={300} height={200} />
      </div>
    </div>
  );
};

export default Card;
