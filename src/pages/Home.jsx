import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Slider from "../Components/Slider.jsx";
import Section from "../Components/Section.jsx";
import About from "../Components/About.jsx";
import Event from "../Components/Event.jsx";
import Admission from "../Components/Admission.jsx";
import Ourteam from "../Components/Ourteam.jsx";
import FeatureCourse from "../Components/FeatureCourse.jsx";
import RecentActivity from "../Components/RecentActivity.jsx";
import Calender from "../Components/Calender.jsx";
import VideoTour from "../Components/VideoTour.jsx";
import OnlineClass from "../Components/OnlineClass.jsx";
import Testiminol from "../Components/Testiminol.jsx";
import Gallery from "../Components/Gallery.jsx";
import Award from "../Components/Award.jsx";
import Hero from "../Components/Hero.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Section />
      <About />
      <VideoTour />
      <Hero />
      <Event />
      <Admission />
      <Ourteam />
      <FeatureCourse />
      <RecentActivity />
      <VideoTour />
      <Calender />
      <OnlineClass />
      <Testiminol />
      <Gallery />
      <Award />
      <Footer />
    </>
  );
};

export default Home;
