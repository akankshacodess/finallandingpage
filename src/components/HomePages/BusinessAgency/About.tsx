"use client";

// import React, { useState } from "react";
// import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from '../../../../public/images/challenges.webp';

const About: React.FC = () => {
  // const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* <FsLightbox
        // toggler={toggler} 
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
        
      /> */}

      <section className="about-area bg-fcfbfb ptb-100" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={650}
                />

                {/* <div className="video-box">
                  <div
                    className="video-btn" style={{backgroundColor:"#0177B6"}}
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play" style={{ color: "#FFFFFF "}}></i>
                  </div>
                </div> */}
              </div>
            </div>

            <div className=" p-4 col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                {/* <div className="section-title">
                  <h2 className="justify-self-center">About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div> */}

                <div className="about-text">
                  <div className="text-black text-center" style={{fontSize: '30px', fontWeight:'bolder' }}>Are you facing these challenges?</div><br/>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="about-text mb-30 text-black text-base">
                      {/* <h4>Our Success</h4> */}
                      <ul>
                        <li>
                          <i className="fa-solid fa-circle-check" style={{ color: "#0177B6" }}></i>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check" style={{ color: "#0177B6" }}></i>
                          It is a long established fact that a reader will be
                          distracted by the readable.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check" style={{ color: "#0177B6" }}></i>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <div className="col-lg-6">
                    <div className="about-text mb-30">
                      <h4>Grow Business</h4>
                      <ul>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          It is a long established fact that a reader will be
                          distracted by the readable.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text.
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

