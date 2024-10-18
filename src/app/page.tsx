import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/BusinessAgency/MainBanner";
import About from "../components/HomePages/BusinessAgency/About";
import Services from "../components/HomePages/BusinessAgency/Services";
import OurWorks from "../components/HomePages/BusinessAgency/OurWorks";

// import TeamStyleTwo from "../components/Common/TeamStyleTwo";

import Faq from "@/components/Faq/Faq";

import PartnerTwo from "../components/Common/PartnerTwo";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";

import Footer from "../components/Layouts/Footer";
import ClientFeedback from "@/components/HomePages/AppShowcase/ClientFeedback";
import TeamStyleFour from "../components/Common/TeamStyleFour";



export default function Page() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <About />

      <Services />

      <OurWorks />

      {/* <WorkProcess /> */}

      <ClientFeedback />

      {/* <TeamStyleTwo /> */}

      <TeamStyleFour/>
      <PartnerTwo />
      <Faq/>

      <CtaAreaTwo />

      {/* <LatestNewsSlider /> */}

      <Footer />
    </>
  );
}
