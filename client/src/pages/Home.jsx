// Hoze.js
import React from "react";
import Button from "../components/Button";
import ImageCarousel from "../components/Carousel";
import Hero from "../components/sections/Hero";
import LatestProducts from "../components/LatestProducts";
import About from "../components/sections/About";
import { useLocation } from "react-router-dom";

function Home({ getAllProducts }) {
  return (
    <>
      <Hero />
      <LatestProducts getAllProducts={getAllProducts} />
      <About />
    </>
  );
}

export default Home;
