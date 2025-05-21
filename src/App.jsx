import { useState } from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";

function App() {


  return (
    <>
      <div>
        <header>
          <button>User Profile, hard coded, maybe circle</button>
          <label> 31/12/1999</label>
          <h1>The NC Daily</h1>
          <h2>
            <form>
              <button>Topics</button>
              <button>Articles</button>
            </form>
          </h2>
        </header>
        <div>
        <Articles></Articles>
        </div>
        <footer>
          <p1>Copyright, contact etc</p1>
        </footer>
      </div>
    </>
  );
}

export default App;
