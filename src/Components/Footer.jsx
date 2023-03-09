import React from "react";
import Figure from "react-bootstrap/Figure";
import "../css/footer.css";

export const Footer = () => {
  return (
    <footer>
      <Figure className="contenedor">
        <a href="https://github.com/nicolasnos/bit10Team">
          <Figure.Image
            className="contenedor_img"
            width={254}
            height={154}
            alt="254x154"
            src="../public/img/teamLogoBlanco.png"
          />
        </a>
        <Figure.Caption className="texto_integrantes">
          Nicolás Olmos <span>|</span> Sharon Monroy <span>|</span> Daniel
          Romero
        </Figure.Caption>
        <section className="redes">
          <div>
            <a href="https://github.com/nicolasnos" target={"_blank"}>
              <img src="../public/img/github.svg"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-olmos-a7a1ba261/"
              target={"_blank"}>
              <img src="../public/img/linkedin.svg"></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/Sharontatiana" target={"_blank"}>
              <img src="../public/img/github.svg" target={"_blank"}></img>
            </a>
            <a href="https://www.linkedin.com/in/sharon-manco">
              <img src="../public/img/linkedin.svg" target={"_blank"}></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/3lD4n1el">
              <img src="../public/img/github.svg" target={"_blank"}></img>
            </a>
            <a href="https://www.linkedin.com/in/daniel-romero-programador/">
              <img src="../public/img/linkedin.svg" target={"_blank"}></img>
            </a>
          </div>
        </section>
        <p className="texto_derechos">
          ©️ TODOS LOS DERECHOS RESERVADOS 2023 DESARROLLADO POR TELE Y TRABAJO
        </p>
      </Figure>
    </footer>
  );
};
