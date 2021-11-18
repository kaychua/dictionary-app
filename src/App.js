import React from "react";
import "./App.css";
import DictionarySearchEngine from "./DictionarySearchEngine";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionoory App.</h1>
        <h2>Hey, I bet I can tell you what these words mean</h2>
      </header>
      <main>
        <DictionarySearchEngine defaultKeyword="person" />
      </main>
    </div>
  );
}
