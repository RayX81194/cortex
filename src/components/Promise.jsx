import React from "react";
import "../App.css";
import Button from "./Button";

const Promise = () => {
  return (
    <div className="p-20 lg:px-36 xs:px-5 flex flex-col">
      <p className="font-vulfMono tracking-wider text-dimBlack">OUR PROMISE</p>
      <hr className="w-full h-1 my-4 bg-black "></hr>
      <div className="flex lg:flex-row xs:flex-col">
        <div>
          <h1 className="lg:mt-16 xs:mt-12 font-extrabold lg:text-[70px] xs:text-[40px] sm:text-[50px] xs:leading-[45px] lg:leading-[75px] sm:leading-[52px] text-dimBlack">
            The<br></br>
            <span className="text-pink font-vulfMed">Be Nice,Be Good™</span>
            <br></br>Guarantee
          </h1>
          <p className="text-[22px] text-dimBlack lg:max-w-[500px] sm:max-w-[650px] mt-12 font-vulf">
            We stand by our word. We've even written it into our contracts.
            Here's what you can expect when you work with Cortex:
          </p>
          <Button className="mt-12">LEARN MORE ABOUT US</Button>
        </div>

        <div className="grid lg:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:mt-0 xs:mt-10 lg:relative lg:top-[60px] lg:left-[250px]">
          <div className="flex flex-row">
            <p className="xs:pr-5 xs:pt-6 sm:p-6 font-vulfBold">01</p>
            <div className="flex flex-col">
              <h1 className="lg:text-[40px] sm:text-[35px] xs:text-[30px] text-pink font-vulfBold">Accountability</h1>
              <p  className="font-vulfMed">We do what we say we will</p>
              <hr className="w-[300px] lg:h-[2px] sm:h-[1px] xs:my-5  sm:my-10 bg-pink "></hr>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="xs:pr-5 xs:pt-6 sm:p-6  font-vulfBold">02</p>
            <div className="flex flex-col">
              <h1 className="lg:text-[40px] sm:text-[35px] xs:text-[30px] text-pink font-vulfBold">Advocacy</h1>
              <p className="font-vulfMed">We make your goals our marching orders</p>
              <hr className="w-[300px] lg:h-[2px] sm:h-[1px] xs:my-5 sm:my-10 bg-pink"></hr>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="xs:pr-5 xs:pt-6 sm:p-6  font-vulfBold">03</p>
            <div className="flex flex-col">
              <h1 className="lg:text-[40px] sm:text-[35px] xs:text-[30px] text-pink font-vulfBold">Availibility</h1>
              <p className="font-vulfMed">We will not go silent on you</p>
              <hr className="w-[300px] lg:h-[2px] sm:h-[1px] xs:my-5 sm:my-10 bg-pink "></hr>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="xs:pr-5 xs:pt-6 sm:p-6  font-vulfBold">03</p>
            <div className="flex flex-col">
              <h1 className="lg:text-[40px] sm:text-[35px] xs:text-[30px] text-pink font-vulfBold">Authority</h1>
              <p className="font-vulfMed">We focus our strengths to help you grow</p>
              <hr className="w-[300px] lg:h-[2px] sm:h-[1px] xs:my-5 sm:my-10 bg-pink "></hr>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Promise;
