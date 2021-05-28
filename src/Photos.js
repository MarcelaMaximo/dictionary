import React from "react";
import "./Photos.css";

export default function Photos (props) {
  if (props.photos) {
    console.log(props.photos)
    return (
      <section className="Photos">
        {props.photos.map(function(photo, index){
          return(
            <div className="link" key={index}>
              <a href={photo.src.original} target="_blank">
                <img src={photo.src.landscape} className="img-fluid" rel="noreferrer"/>
              </a>
            </div>
            )
        })}
      </section>);
  } else {
    return null;
  }
}