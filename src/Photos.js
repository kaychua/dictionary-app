import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos img-fluid">
        {props.photos.map(function (photo, index) {
          return (
            <span>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} key={index} alt={props} />
              </a>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
