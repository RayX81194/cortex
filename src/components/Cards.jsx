import React from "react";
import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";

const Cards = () => {
  return (
    <div className="my-9 mx-0 xs:mx-2 lg:mb-28 xs:mb-12 items-center flex flex-col justify-center text-dimWhite">
      <div className="grid xs:grid-cols-1 lg:grid-cols-3 lg:mx-32 gap-9">
        <div className="bg-dimBlack flex lg:flex-col xs:flex-row  items-center justify-center lg:text-center xs:text-start lg:px-12 xs:px-5 lg:p-6 xs:p-6 pt-12 pb-20">
          <p className="font-vulfBold lg:mt-10 lg:mb-10 hidden lg:block  ">1</p>
          <img
            src={card1}
            className="lg:w-[100px] xs:w-[70px] xs:h-[50px] mx-2 lg:hidden lg:block lg:h-[80px] "
          />
          <h2 className="font-vulfBold text-[35px] hidden lg:block mb-10">
            Websites
          </h2>
          <div className="items-center justify-center flex flex-col">
            <img
              src={card1}
              className="w-[100px] hidden lg:block h-[80px] lg:mb-16"
            />
            <div className="xs:items-start xs:pl-2 xs:justify-start">
              <h2 className="font-vulfBold lg:text-[35px] xs:text-[20px] lg:hidden lg:block xs:mb-2 lg:mb-10">
                Websites
              </h2>
              <p className="font-vulfMed lg:mb-10 lg:text-[16px] xs:text-[15px] text-pink lg:max-w-[280px] xs:max-w-[500px]">
                Beautiful websites expertly built to make your brand shine and
                your content editors smile.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dimBlack flex lg:flex-col xs:flex-row  items-center justify-center lg:text-center xs:text-start lg:px-12 xs:px-5 lg:p-6 xs:p-6 pt-12 pb-20">
          <p className="font-vulfBold lg:mt-10 lg:mb-10 hidden lg:block  ">2</p>
          <img
            src={card2}
            className="lg:w-[100px] xs:w-[70px] xs:h-[50px] mx-2 lg:hidden lg:block lg:h-[80px] "
          />
          <h2 className="font-vulfBold text-[35px] hidden lg:block mb-10">
            Applications
          </h2>
          <div className="items-center justify-center flex flex-col">
            <img
              src={card2}
              className="w-[100px] hidden lg:block h-[80px] lg:mb-16"
            />
            <div className="xs:items-start xs:pl-2 xs:justify-start">
              <h2 className="font-vulfBold lg:text-[35px] xs:text-[20px] lg:hidden lg:block xs:mb-2 lg:mb-10">
                Applications
              </h2>
              <p className="font-vulfMed lg:mb-10 lg:text-[16px] xs:text-[15px] text-pink lg:max-w-[280px] xs:max-w-[500px]">
              We develop secure, scalable web apps to help you sell products, run businesses, teach students.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dimBlack flex lg:flex-col xs:flex-row  items-center justify-center lg:text-center xs:text-start lg:px-12 xs:px-5 lg:p-6 xs:p-6 pt-12 pb-20">
          <p className="font-vulfBold lg:mt-10 lg:mb-10 hidden lg:block  ">3</p>
          <img
            src={card3}
            className="lg:w-[100px] xs:w-[70px] xs:h-[50px] mx-2 lg:hidden lg:block lg:h-[80px] "
          />
          <h2 className="font-vulfBold text-[35px] hidden lg:block mb-10">
            Agencies
          </h2>
          <div className="items-center justify-center flex flex-col">
            <img
              src={card3}
              className="w-[100px] hidden lg:block h-[80px] lg:mb-16"
            />
            <div className="xs:items-start xs:pl-2 xs:justify-start">
              <h2 className="font-vulfBold lg:text-[35px] xs:text-[20px] lg:hidden lg:block xs:mb-2 lg:mb-10">
                Agencies
              </h2>
              <p className="font-vulfMed lg:mb-10 lg:text-[16px] xs:text-[15px] text-pink lg:max-w-[280px] xs:max-w-[500px]">
              We’re trusted by the world’s most respected creative and digital for development projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
