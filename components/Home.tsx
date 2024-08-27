import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-around">
          <div className="font-semibold text-[32px] text-[#000000]">Blogs</div>
          <div className="flex justify-between items-center gap-10">
            <input
              type="search"
              placeholder="search ..."
              className="border-[#CFCFCF] border-[2px] border-solid text-[#CFCFCF] px-4 py-2 rounded-[30px]"
            />
            <button className="bg-[#264FAD] text-white px-4 py-2 rounded-[20px]">
              + New Blogs
            </button>
          </div>
        </div>
        <div className="border-[0.2px] width-[900px] border-[#CFCFCF]"></div>
      </div>
    </>
  );
};

export default Home;
