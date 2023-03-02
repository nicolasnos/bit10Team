import React from "react";
import Navigation from "./Navigation";
import Figure from "react-bootstrap/Figure";
import "../css/Header.css";

const Header = () => {
  return (
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
      <Navigation />
    </header>
  );
};

export default Header;
