import React from "react";
import './SeminarStyles.css';


export default function Descrip(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="img" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>
        <strong>Date:</strong> {props.date}
      </p>
      <p>
        <strong>Time:</strong> {props.timing}
      </p>
      <p>
        <strong>Venue:</strong> {props.venue}
      </p>
    </div>
  );
}
