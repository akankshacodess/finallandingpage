import ClientFeedback from "../components/HomePages/AppShowcase/ClientFeedback";
import About from "../components/HomePages/BusinessAgency/About";
import MainBanner from "../components/HomePages/BusinessAgency/MainBanner";
import OurWorks from "../components/HomePages/BusinessAgency/OurWorks";
import Services from "../components/HomePages/BusinessAgency/Services";

import Footer from "../components/Layouts/Footer";

// import TeamStyleTwo from "../components/Common/TeamStyleTwo";



import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import PartnerTwo from "../components/Common/PartnerTwo";

import TeamStyleFour from "../components/Common/TeamStyleFour";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import FaqContent from "@/components/Faq/FaqContent";
import FaqForm from "@/components/Faq/FaqForm";



export default function Page() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <About />

      <Services />

      <CtaAreaTwo />
      <OurWorks />

      {/* <WorkProcess /> */}

      <ClientFeedback />

      {/* <TeamStyleTwo /> */}

      <TeamStyleFour/>
      <PartnerTwo />
      <FaqForm/>
      <FaqContent/>


      {/* <LatestNewsSlider /> */}

      <Footer />
    </>
  );
}
