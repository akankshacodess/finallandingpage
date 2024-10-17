"use client";

import AOS from "aos";
import React from "react";
import "../../../node_modules/aos/dist/aos.css";
  
const AosAnimation = () => {
 
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div></div>
  );
};

export default AosAnimation;
