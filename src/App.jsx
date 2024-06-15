import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import DrifterDoppKit from "./components/DrifterDoppKit";
import TannerCollections from "./components/TannerCollections/TannerCollections";
import AOS from "aos";
import "aos/dist/aos.css";
import TopScrollBtn from "./components/TopScrollBtn";
import { Link } from "react-scroll";

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const [show, setShow] = useState(false);

  const updateScrollPosition = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 450) {
      //up
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
  });

  return (
    <div className=" relative  ">
      <div className=" absolute max-sm:relative max-sm:bg-[#B8A47F]/60 w-full top-[-40px] max-sm:top-[-30px] z-30">
        <NavBar />
      </div>
      {show && (
        <div className="  cursor-pointer right-[5%] animate-bounce z-50 fixed   bottom-[1%] bg-[#B8A47F] w-[5%] max-sm:w-[10%]  rounded-full ">
          <Link to="Top" smooth={true} spy={true}>
            <TopScrollBtn />
          </Link>
        </div>
      )}
      <Hero />
      <DrifterDoppKit />
      <TannerCollections />
    </div>
  );
};

export default App;
