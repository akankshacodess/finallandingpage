"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "../../../../public/images/saas-startup/saas-banner.png";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="saas-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="saas-banner-content">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Mastork Business Process Digitization & Automation
                </h1>
                
                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Leveraging MICROSOFT
                </p>

                <Link
                  href="/contact-us/"
                  className="default-btn-two"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Get Started <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="saas-banner-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src={bannerImg}
                  alt="image"
                  width={928}
                  height={502}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
