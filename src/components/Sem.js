import React from "react";
import "./SeminarStyles.css";
import Descrip from "./Descrip";
import Card1 from "../assets/card1.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";
import Card4 from "../assets/card4.jpg";
import Card5 from "../assets/card5.jpg";
import Card6 from "../assets/card6.jpg";

export default function Sem() {
  return (
    <div className="seminar">
      <h1>Recent seminars</h1>
      <p>Unlocking Knowledge, Inspiring Growth</p>
      <div className="seminar-card">
        <Descrip
          image={Card1}
          title="Seminar on AI and Machine Learning"
          description="An in-depth seminar on the latest trends in AI and Machine Learning."
          timing="10:00 AM - 2:00 PM"
          venue="Auditorium ,City University"
          date="March 15, 2024"
        />

        <Descrip
          image={Card2}
          title="Seminar on Data Analytics"
          description="Exploring the power of data analytics in shaping industries and decision-making."
          timing="2:00 PM - 5:00 PM"
          venue="Conference Room,University of Dhaka"
          date="April 5, 2024"
        />
        <Descrip
          image={Card3}
          title="Seminar on Modern Art"
          description="Explore the evolution of modern art and its impact on society."
          timing="3:00 PM - 6:00 PM"
          venue="Art Gallery,University of Art"
          date="June 10, 2024"
        />
      </div>
      <div className="seminar-card">
        <Descrip
          image={Card4}
          title="AI in Education"
          description="Understanding the impact of artificial intelligence on modern education systems and learning methodologies."
          timing="10:00 AM - 1:00 PM"
          venue="Lecture Hall,GreenTech Institute"
          date="May 15, 2024"
        />

        <Descrip
          image={Card5}
          title="Sustainable Business Practices"
          description="Exploring sustainable business strategies and their role in promoting environmental and social responsibility."
          timing="11:00 AM - 2:00 PM"
          venue="Conference Room,Institute of Business Studies"
          date="June 10, 2024"
        />
        <Descrip
          image={Card6}
          title="Advances in Biotechnology"
          description="A seminar on the latest advancements in biotechnology and their applications in medicine and agriculture."
          timing="3:00 PM - 6:00 PM"
          venue="Seminar Hall,National Biotech University"
          date="July 22, 2024"
        />
      </div>
    </div>
  );
}
