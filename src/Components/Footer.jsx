import React from "react";
import Figure from "react-bootstrap/Figure";
import "../css/footer.css";
import LogoEquipo from "../assets/img/teamLogoBlanco.png";
import LogoGit from "../assets/img/github.svg";
import LogoLink from "../assets/img/linkedin.svg";

export const Footer = () => {
  return (
    <footer>
      <Figure className="contenedor">
        <a href="https://github.com/nicolasnos/bit10Team" target={"_blank"}>
          <Figure.Image
            className="contenedor_img"
            width={254}
            height={154}
            alt="254x154"
            src={LogoEquipo}
          />
        </a>
        <Figure.Caption className="texto_integrantes">
          Nicolás Olmos <span>|</span> Sharon Monroy <span>|</span> Daniel
          Romero
        </Figure.Caption>
        <section className="redes">
          <div>
            <a href="https://github.com/nicolasnos" target={"_blank"}>
              <img src={LogoGit}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-olmos-a7a1ba261/"
              target={"_blank"}
            >
              <img src={LogoLink}></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/Sharontatiana" target={"_blank"}>
              <img src={LogoGit}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/sharon-manco"
              target={"_blank"}
            >
              <img src={LogoLink}></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/3lD4n1el" target={"_blank"}>
              <img src={LogoGit}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-romero-programador/"
              target={"_blank"}
            >
              <img src={LogoLink}></img>
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
