import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import List from "./List";
import Team from "./Team";
import "../css/Header.css";

const Header = () => {
  return (
    <BrowserRouter>
      <header>
        <Figure className="contenedor">
          <Figure.Image
            className="contenedor_img"
            width={254}
            height={154}
            alt="imagen de fondo"
            src="../public/img/bookLogo.png"
          />
        </Figure>
        <nav className="py-4 text-center">
          <Link className="px-4" to="/">
            Inicio
          </Link>
          <Link className="px-4" to="/team">
            Team
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
