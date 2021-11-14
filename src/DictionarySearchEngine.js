import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function DictionarySearchEngine() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={search}>
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
}
