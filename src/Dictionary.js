import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary () {

  let [keyword, setKeyword] = useState(null);

  function search(event){
    event.preventDefault();
    alert (`Searching for ${keyword}`);
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value)
  }

  return (
    <div className="Dictionary"> 
      <form onSubmit={search}>
        <input type="search" placeholder="Enter a word" autoFocus={true} onChange={handleKeywordChange}/>
        <input type="submit" value="Enter"/>
      </form>
    </div>
  );
}