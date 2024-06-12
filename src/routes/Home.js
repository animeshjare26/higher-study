import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HomeImg from '../assets/1.jpg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
      cName ="hero"
      heroImg = {HomeImg}
      title = "Empowering Your Academic Journey" 
      text = "Your Guide to Higher Education Success."
      buttonText = "Get Started"
      url = "/"
      btnClass = "show"
      />
      <Footer/>
      <footer className="bg-dark text-center py-3">
            <div className="container">
                <span className="text-muted">©️2024 - EduPeak. All rights reserved.</span>
            </div>
        </footer>
    </>
  );
}
