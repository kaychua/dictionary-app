import React from "react";

export default function DictionarySearchEngine() {
  return (
    <div className="DictionarySearch">
      <form>
        <input type="search" autofocus="on" placeholder="Search for a word" />
        <button type="submit">🔎</button>
      </form>
    </div>
  );
}
