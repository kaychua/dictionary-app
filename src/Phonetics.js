import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
        <i class="fas fa-volume-up"></i>
      </a>
      {props.phonetics[0].text}
    </span>
  );
}
