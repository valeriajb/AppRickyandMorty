import React from "react";
import Nav from "../components/Nav/Nav";
import Slider from "../components/Slider/Slider";
import Resume from '../components/Resume/Resume';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Slider/>
      <Resume/>
    </>
  );
}

export default Home;
