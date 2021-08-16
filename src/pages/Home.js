import React, { useState } from "react";
import About from "../components/About/About";
import Choice from "../components/choice/Choice";
import Comments from "../components/Comments/Comments";
import Contact from "../components/Contact/Contact";
import Courses from "../components/Courses/Courses";
import Events from "../components/Events/Events";
import Feature from "../components/Features/Feature";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Programme from "../components/Programme/Programme";
import SchoolInfo from "../components/SchoolInfo/SchoolInfo";
import Sidebar from "../components/Sidebar/Sidebar";
import { EventData } from "../data/EventData";
import { ProgrammeData } from "../data/ProgrammeData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebarMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} closeSideMenu={closeSidebarMenu} />
      <Navbar toggleSideMenu={handleIsOpen} />
      <Hero />
      <Courses />
      <Programme ProgrammeData={ProgrammeData} />
      <About />
      <Feature />
      <Events events={EventData} />
      <Choice />
      <Comments />
      <Gallery />
      <Contact />
      <SchoolInfo />
      <Footer />
    </>
  );
};

export default Home;
