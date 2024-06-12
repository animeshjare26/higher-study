import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import AboutImg from "../assets/about.jpg";


export default function About() {
  return (
    <div>
        <Navbar/>
        <Hero
          cName="hero-mid"
          heroImg={AboutImg}
          title="About Us"
        />
        <AboutUs/>
      <Footer/>
      <footer className="bg-dark text-center py-3">
            <div className="container">
                <span className="text-muted">©️2024 - EduPeak. All rights reserved.</span>
            </div>
        </footer>
    </div>
  );
}
