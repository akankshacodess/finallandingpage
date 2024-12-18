"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";
import MegaMenu from "./MegaMenu";
import { menus } from "../../../libs/menus";

import logo from "../../../public/images/image (11).png";
import whiteLogo from "../../../public/images/image (9).png";

const NavbarTwo: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    };
  
    document.addEventListener("scroll", handleScroll);
    
    // Cleanup function
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md  navbar-light">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <Image
                src={logo}
                className="black-logo"
                alt="logo"
                width={150}
                height={40}
              />
              <Image
                src={whiteLogo}
                className="white-logo"
                alt="logo"
                width={150}
                height={40}
              />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              
            >
              <span className="icon-bar top-bar" style={{ backgroundColor: "#0177B6" }}></span>
              <span className="icon-bar middle-bar" style={{ backgroundColor: "#0177B6" }}></span>
              <span className="icon-bar bottom-bar" style={{ backgroundColor: "#0177B6" }}></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <MegaMenu />

                {menus.map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
              </ul>

              <div className="others-options">
                <Link href="/contact-us/" className="btn btn-primary ">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarTwo;

