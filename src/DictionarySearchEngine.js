import React, { useState } from "react";
import axios from "axios";

export default function DictionarySearchEngine() {
  const [define, setDefine] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${define}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    event.preventDefault();
    setDefine(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={search}>
        <input
          type="search"
          autofocus="on"
          placeholder="Search for a word"
          onChange={handleChange}
        />
        <button type="submit">🔎</button>
      </form>
    </div>
  );
}
