import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      {/*  <Header /> */}
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
