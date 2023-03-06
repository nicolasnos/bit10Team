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
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <Figure className="contenedor">
            <Figure.Image
              className="contenedor_img"
              width={120}
              height={154}
              alt="imagen de fondo"
              src="../public/img/bookLogo.png"
            />
          </Figure>
          <div className="container-link">
            <Link className="px-4" to="/">
              Inicio
            </Link>
            <Link className="px-5" to="/team">
              Team
            </Link>
          </div>
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
