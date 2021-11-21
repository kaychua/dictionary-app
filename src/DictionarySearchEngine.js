import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./DictionarySearch.css";

export default function DictionarySearchEngine(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let pexelsApiKey = `563492ad6f9170000100000168c81db63fbc47b58942caca15615c70`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9
`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="DictionarySearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus="on"
            placeholder="Search for a word"
            onChange={handleChange}
          />
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
        <div className="row">
          <div className="col-md-7">
            <Results results={results} />
          </div>
          <div className="col-md-5">
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return <div> Loading.. </div>;
  }
}
