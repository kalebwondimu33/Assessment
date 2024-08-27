import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import NavBar from "@/components/NavBar";
import { appendFile } from "fs";
import React from "react";
import Listing from "@/components/Listing";

const page = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Listing />
      <Footer />
    </div>
  );
};

export default page;
