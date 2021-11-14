import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetics[0].text}
    </div>
  );
}
