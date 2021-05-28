import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary (props) {

  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  
  
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse (response) {
    setPhotos(response.data.photos)
  }

  function search (){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f917000010000018abde7563bde44d592f666e9a8750412";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=5`;
    let headers = {Authorization: `bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
       
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
            <section> 
              <form onSubmit={handleSubmit}>
                <input type="search" placeholder="What word do you want to look up?" autoFocus={true} onChange={handleKeywordChange}/>
              </form>
            </section>
        <div className="row">
          <div className="col-8">
            <Results results={results}/>
          </div>
          <div className="col-4"> 
          <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();

  }
}
