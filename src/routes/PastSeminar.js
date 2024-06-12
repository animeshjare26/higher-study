import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Sem from '../components/Sem';
import PastImg from "../assets/3.jpg";


export default function PastSeminar() {
  return (
    <div>
        <Navbar/>
        <Hero
          cName="hero-mid"
          heroImg={PastImg}
          title="Explore Our Past Seminars"
        />
        <Sem/>
      <Footer/>
      <footer className="bg-dark text-center py-3">
            <div className="container">
                <span className="text-muted">©️2024 - EduPeak. All rights reserved.</span>
            </div>
        </footer>
    </div>
  );
}
