import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../css/Team.css";
import FotoDaniel from "../assets/img/DanielRomero.png";
import FotoSharon from "../assets/img/SharonMonroy.png";
import FotoNicolas from "../assets/img/NicolasOlmos.png";

const Team = () => {
  return (
    <>
      <section className="contenedor-fondo">
        <div className="contenedor-nosotros">
          <h1 className="nosotros-titulo">SOBRE NOSOTROS</h1>
          <p className="nosotros-parrafo">
            Como desarrolladores, somos expertos en programación y diseño web,
            capaces de crear soluciones de software personalizadas para
            satisfacer las necesidades específicas de los clientes. Siempre
            enfocados en la calidad y la eficiencia, podemos resolver problemas
            técnicos complejos y cumplir con los plazos establecidos para los
            proyectos. Además, nuestras habilidades de comunicación y trabajo en
            equipo aseguran una contribución significativa a cualquier proyecto
            en el que participemos.
          </p>
        </div>
      </section>
      <section>
        <CardGroup className="contanedor-fotos">
          <a href="https://nicolasnos.github.io/bit07me/" target={"_blank"}>
            <Card className="contanedor-fotos">
              <Card.Img variant="top" src={FotoNicolas} />
              <Card.Body>
                <Card.Title>Nicolás Olmos</Card.Title>
              </Card.Body>
            </Card>
          </a>
          <a href="https://sharontatiana.github.io/bit07me/" target={"_blank"}>
            <Card className="contanedor-fotos">
              <Card.Img variant="top" src={FotoSharon} />
              <Card.Body>
                <Card.Title>Sharon Monroy</Card.Title>
              </Card.Body>
            </Card>
          </a>
          <a href="https://3ld4n1el.github.io/bit07me/" target={"_blank"}>
            <Card className="contanedor-fotos">
              <Card.Img variant="top" src={FotoDaniel} />
              <Card.Body>
                <Card.Title>Daniel Romero</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </CardGroup>
      </section>
    </>
  );
};

export default Team;
