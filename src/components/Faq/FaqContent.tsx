"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../../public/images/faq-img.jpg";

const FaqContent: React.FC = () => {
  return (
    <>
  <div style ={{
        background: "linear-gradient(110deg, black, navy)",
        
      }}>
    {/* css not working */}
    <h2
  className="justify-self-center font-bold text-white text-2xl text-center"
  style={{ color: "#0177B6", padding:"50px 0 0 0", fontSize: "2rem"}} // Adjusting color and margin
>
  Frequently Asked Questions
    </h2>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img">
                <Image src={faqImg} alt="Image" width={800} height={534} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                    <AccordionItemButton
                        style={{
                          backgroundColor: "white", // Set the background color
                           // Set text color
                          border: "1px solid #ccc", // Add a border
                          padding: "15px",
                          borderRadius: "5px",
                          transition: "background-color 0.3s, color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#0177B6"; // Change background on hover
                          e.currentTarget.style.color = "white"; // Change text color on hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "white"; // Reset background on leave
                          e.currentTarget.style.color = "#0177B6"; // Reset text color on leave
                        }}
                      >
                        What access do I have on the free plan?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                    <AccordionItemButton
                        style={{
                          backgroundColor: "white", // Set the background color
                           // Set text color
                          border: "1px solid #ccc", // Add a border
                          padding: "15px",
                          borderRadius: "5px",
                          transition: "background-color 0.3s, color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#0177B6"; // Change background on hover
                          e.currentTarget.style.color = "white"; // Change text color on hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "white"; // Reset background on leave
                          e.currentTarget.style.color = "#0177B6"; // Reset text color on leave
                        }}
                      >
                        What access do I have on a free trial?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                    <AccordionItemButton
                        style={{
                          backgroundColor: "white", // Set the background color
                           // Set text color
                          border: "1px solid #ccc", // Add a border
                          padding: "15px",
                          borderRadius: "5px",
                          transition: "background-color 0.3s, color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#0177B6"; // Change background on hover
                          e.currentTarget.style.color = "white"; // Change text color on hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "white"; // Reset background on leave
                          e.currentTarget.style.color = "#0177B6"; // Reset text color on leave
                        }}
                      >
                        Does the price go up as my team gets larger?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                    <AccordionItemButton
                        style={{
                          backgroundColor: "white", // Set the background color
                           // Set text color
                          border: "1px solid #ccc", // Add a border
                          padding: "15px",
                          borderRadius: "5px",
                          transition: "background-color 0.3s, color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#0177B6"; // Change background on hover
                          e.currentTarget.style.color = "white"; // Change text color on hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "white"; // Reset background on leave
                          e.currentTarget.style.color = "#0177B6"; // Reset text color on leave
                        }}
                      >
                        How can I cancel/pause my subscription?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                    <AccordionItemButton
                        style={{
                          backgroundColor: "white", // Set the background color
                           // Set text color
                          border: "1px solid #ccc", // Add a border
                          padding: "15px",
                          borderRadius: "5px",
                          transition: "background-color 0.3s, color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#0177B6"; // Change background on hover
                          e.currentTarget.style.color = "white"; // Change text color on hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "white"; // Reset background on leave
                          e.currentTarget.style.color = "#0177B6"; // Reset text color on leave
                        }}
                      >
                        Can I pay via an invoice?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default FaqContent;
