import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import About from "./components/About";
import Work from "./components/Work";
import Quote from "./components/Quote"
import Promise from "./components/Promise"
import Trust from "./components/Trust";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div className="bg-dimWhite w-full overflow-hidden">
      <div className="bg-dimWhite sm:px-16 lg:px-6 px-6">
        <div className="xl:max-w-[1280px] w-full">
            <NavBar />
        </div>
        <a href="#main" class="skip-to-main-content-link">
          Skip to main content
        </a>
      </div>


      <main id="main">
        <div className="bg-dimWhite flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>

      <div className="bg-dimWhite flex justify-center items-center">
          <div className=" xl:max-w-[1280px] w-full">
            <Cards />
            <div className="bg">
              <About />
              <Work />
              <Quote />
              </div>
              <Promise />
              <Trust />
            <div className="bg">
              <Footer />
            </div>
          </div>
      </div>
      </main>
    </div>
  );
};

export default App;
