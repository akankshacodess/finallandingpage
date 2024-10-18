import ClientFeedback from "../components/HomePages/AppShowcase/ClientFeedback";
import About from "../components/HomePages/BusinessAgency/About";
import MainBanner from "../components/HomePages/BusinessAgency/MainBanner";
import OurWorks from "../components/HomePages/BusinessAgency/OurWorks";
import Services from "../components/HomePages/BusinessAgency/Services";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";

// import TeamStyleTwo from "../components/Common/TeamStyleTwo";

import Faq from "@/components/Faq/Faq";

import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import PartnerTwo from "../components/Common/PartnerTwo";

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
