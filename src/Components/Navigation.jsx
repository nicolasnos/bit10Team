import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import List from "./List";
import Team from "./Team";
import "../css/Header.css";

function Navigation() {
  return (
    <BrowserRouter>
      <header>
        <Figure className="contenedor">
          <Figure.Image
            className="contenedor_img"
            width={200}
            height={164}
            alt="254x154"
            src="../public/img/bookLogo.png"
          />
        </Figure>
      </header>
      <nav className="py-4 text-center">
        <Link className="px-4" to="/">
          Aplicacion
        </Link>
        <Link className="px-4" to="/team">
          Team
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
