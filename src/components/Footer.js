import React from "react";
import "./FooterStyles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>EduPeak</h1>
          <p>Your Guide to Higher Education Success.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
            <h4>Quick Links</h4>
            <a href="/">Top Courses</a>
            <a href="/">Online Training</a>
            <a href="/">Why study Higher</a>
            <a href="/">PTE Coaching</a>
            <a href="/">Testimonials</a>
        </div>
        <div>
            <h4>Services</h4>
            <a href="/">Admission & University Selection</a>
            <a href="/">Scholar Assistance</a>
            <a href="/">Education Loan</a>
            <a href="/">Visa Process</a>
            <a href="/">Pre & Post Departure Services</a>
        </div>
        <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Contact Us</h4>
            <a href="/">call Us:+91 9687324589</a>
            <a href="/">Email :info@edupeak.co.in</a>
            <a href="/">Payment Terms Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">News & Updates</a>
        </div>
      </div>
    </div>
  );
}
