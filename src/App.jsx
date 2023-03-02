import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { ModalShow } from "./Components/ModalShow";

function App() {
  return (
    <div className="App">
      <Header />
      <ModalShow />
      <Footer />
    </div>
  );
}

export default App;
