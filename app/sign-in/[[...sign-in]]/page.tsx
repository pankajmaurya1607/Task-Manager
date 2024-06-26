"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center h-full" 
    // style={{
    //   // backgroundColor: "red",
    //   backgroundImage: "../public/bg.png",
    //   // backgroundSize: "full",
    //   // backgroundPosition: "center",
    // }}  
    >
      <SignIn />
    </div>
  );
}

export default page;
