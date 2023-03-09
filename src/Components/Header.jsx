import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import List from "./List";
import Team from "./Team";
import "../css/Header.css";
import Logo from "../assets/img/bookLogo.png";

const Header = () => {
  return (
    <BrowserRouter>
    <FaBeer/>
      <header>
        <nav className="navbar bg-body-tertiary">
          <Figure className="contenedor">
            <Figure.Image
              className="img"
              width={130}
              height={154}
              alt="imagen de fondo"
              src={Logo}
            />
          </Figure>
          <div className="container-link">
            <Link className="link px-5" to="/">
              Inicio
            </Link>
            <Link className="link px-5" to="/team">
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
