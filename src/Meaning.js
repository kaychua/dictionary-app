import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}.</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p className="definition">
              <strong>Definition: </strong>
              {definitions.definition}
              <br />
            </p>
            <p className="example">
              <em> e.g. {definitions.example}</em>
            </p>
            <Synonym synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
