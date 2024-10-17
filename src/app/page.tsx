import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/BusinessAgency/MainBanner";
import About from "../components/HomePages/BusinessAgency/About";
import Services from "../components/HomePages/BusinessAgency/Services";
import OurWorks from "../components/HomePages/BusinessAgency/OurWorks";
import WorkProcess from "../components/HomePages/BusinessAgency/WorkProcess";
import Feedback from "../components/Common/Feedback";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";

import PartnerTwo from "../components/Common/PartnerTwo";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";

import Footer from "../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <About />

      <Services />

      <OurWorks />

      <WorkProcess />

      <Feedback />

      <TeamStyleTwo />



      <PartnerTwo />

      <CtaAreaTwo />

      {/* <LatestNewsSlider /> */}

      <Footer />
    </>
  );
}
