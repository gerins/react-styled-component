import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/Data";
import ServicesPage from "../components/ServicesPage";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesPage id={"services"} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
