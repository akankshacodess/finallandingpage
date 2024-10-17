"use client";

import React, { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState<boolean>(false);

  // Auto Play Video
  const videoEl = useRef<HTMLVideoElement>(null);

  const attemptPlay = () => {
    videoEl.current?.play().catch((error) => {
      console.error("Error attempting to play", error);
    });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <div className="hero-banner video-studio overly-6">
        <div className="video-background">
          <video
            playsInline
            loop
            muted
            src="/video/baner.mp4"
            ref={videoEl}
          />
        </div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      Turning Vision into Reality
                    </h1>
                    <p
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      Mastork unlocks potential. We provide automation, provide data insights & security solutions to streamline workflows, empower informed decisions & safeguard your business.
                    </p>

                    <Link
                      href="/contact-us/"
                      className="btn btn-primary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="600"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div
                    className="video-box"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                  >
                    {/* <button
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="fa-solid fa-play"></i>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
