import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Routes>
        <Route path="/home/world" element={"<p>This is nested raoute </p>"} />
      </Routes>
    </div>
  );
}

export default Home;
