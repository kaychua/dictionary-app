import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./DictionarySearch.css";

export default function DictionarySearchEngine(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
          <button type="submit">🔎</button>
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return <div> Loading.. </div>;
  }
}
