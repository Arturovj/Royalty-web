import React from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import HeroSection2 from "../HeroSection2";

function Home() {
  return (
    <>
      <HeroSection />
      <div><HeroSection2 /></div>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
