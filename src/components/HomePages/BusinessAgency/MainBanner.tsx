"use client";

import FsLightbox from "fslightbox-react";

import Link from "next/link";
import React, { useState } from "react";
// import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      {/* <Swiper
        autoHeight={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="hero-slider"
      > */}
        {/* <SwiperSlide>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/images/hero-banner11.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content left">
                    <h1>Business Agency</h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div>
                      <Link href="/contact-us/" className="btn btn-primary">
                        Contact Us
                      </Link>

                      <button
                        onClick={() => setToggler(!toggler)}
                        className="btn btn-secondary"
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/images/emailol1.webp)`
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container pb-4">
                  <div className="main-banner-content left">
                    <h1>Email Management using AI</h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div>
                      <Link href="/contact-us/" className="btn btn-primary">
                        Book a Free Consultation
                      </Link>

                      <button
                        onClick={() => setToggler(!toggler)}
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-play me-1"></i><Link href="https://www.youtube.com/embed/bk7McNUjWgw"> How it works</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/images/hero-banner13.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content left">
                    <h1>Start Your Business</h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div>
                      <Link href="/contact-us/" className="btn btn-primary">
                        Contact Us
                      </Link>

                      <button
                        onClick={() => setToggler(!toggler)}
                        className="btn btn-secondary"
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      {/* </Swiper> */}
    </>
  );
};

export default MainBanner;

