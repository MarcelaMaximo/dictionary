import React from "react";
import "./Photos.css";

export default function Photos (props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function(photo, index){
          return(
            <div className="link" key={index}>
              <a href={photo.src.original} target="_blank" rel="noopener noreferrer">
                <img src={photo.src.landscape} className="img-fluid" alt=" " rel="noopener noreferrer"/>
              </a>
            </div>
            )
        })}
      </section>);
  } else {
    return null;
  }
}