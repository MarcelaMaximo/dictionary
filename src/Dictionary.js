import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary (props) {

  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search (){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

function load (){
  setLoaded(true);
  search();
}

  if (loaded) {
    return (
      <div className="Dictionary"> 
        <div className="row">
          <div className="col-8">
            <section> 
              <form onSubmit={handleSubmit}>
                <input type="search" placeholder="What word do you want to look up?" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
              </form>
            </section>
            <Results results={results}/>
          </div>
          <div className="col-4"> 
          
          </div>
        </div>
      </div>
    );
  } else {
    load();

  }
}
