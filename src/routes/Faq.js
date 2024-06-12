import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Accordion from "../components/Accordian";
import Question from "../components/Question";
import Footer from "../components/Footer";
import FaqImg from "../assets/2.jpg";



export default function Faq() {
  return (
      <div>
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={FaqImg}
          title="FAQs"
        />
        <Accordion/>
        <Question/>
        <Footer/>
        <footer className="bg-dark text-center py-3">
            <div className="container">
                <span className="text-muted">©️2024 - EduPeak. All rights reserved.</span>
            </div>
        </footer>
      </div>
      
  );
}
