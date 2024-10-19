// "use client";

// import React from "react";
// import Link from "next/link";

// const CtaAreaTwo: React.FC = () => {
//   return (
//     <div><div style={{backgroundColor: "white"}}>
//       <div className="cta-area-two ptb-100" >
//         <div className="container">
//           <div className="cta-content">
//             <span
//               data-aos="fade-in"
//               data-aos-duration="1000"
//               data-aos-delay="100"
//             >
//               So What is Next?
//             </span>
//             <h3
//               data-aos="fade-in"
//               data-aos-duration="1000"
//               data-aos-delay="200"
//             >
//               Are You Ready? Let&apos;s get to work!
//             </h3>
//           </div>

//           <div
//             className="cta-btn-box"
//             data-aos="fade-in"
//             data-aos-duration="1000"
//             data-aos-delay="300"
//           >
//             <Link href="/contact-us/" className="btn btn-primary">
//               Book our Free Consultation
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div></div>
//   );
// };

// export default CtaAreaTwo;


"use client";

import React from "react";
import Link from "next/link";

const CtaAreaTwo: React.FC = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #0177B6, #014C87, #023C77)", // Gradient blue shades
        padding: "100px 0", // Ensure padding is retained
      }}
    >
      <div className="container">
        <div className="cta-content" style={{ textAlign: "center" }}>
          <span
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }} // Added styles for visibility
          >
            So What is Next?
          </span>
          <h3
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{
              color: "white", // Optional: Change text color for better contrast
              margin: "1rem 0", // Margin for spacing
            }}
          >
            Are You Ready? Let&apos;s get to work!
          </h3>
        </div>

        <div
          className="cta-btn-box"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="300"
          style={{ textAlign: "center" }} // Center the button
        >
          <Link href="/contact-us/" className="btn btn-primary" style={{
              display: "inline-block",
              padding: "10px 20px", // Button padding
              backgroundColor: "transparent", // Make background transparent
              color: "white", // Default text color
              textDecoration: "none", // Remove underline
              transition: "all 0.3s ease", // Smooth transition
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "white"; // Text color on hover
              e.currentTarget.style.border = "2px solid white"; // Border on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "white"; // Reset text color
              e.currentTarget.style.border = "none"; // Reset border color
            }}>
            Book our Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaAreaTwo;
