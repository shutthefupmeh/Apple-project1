import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Performance from "./components/three/Performance";
import Features from "./components/three/Features";
import Highlights from "./components/three/Highlights";
import Footer from "./components/three/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/three/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
