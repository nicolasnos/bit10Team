import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../css/Team.css";

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
          <a href="">
            <Card className="contanedor-fotos">
              <Card.Img variant="top" src="../public\img\NicolasOlmos.png" />
              <Card.Body>
                <Card.Title>Nicolás Olmos</Card.Title>
              </Card.Body>
            </Card>
          </a>
          <a href="">
            <Card className="contanedor-fotos">
              <Card.Img variant="top" src="..\public\img\SharonMonroy.png" />
              <Card.Body>
                <Card.Title>Sharon Monroy</Card.Title>
              </Card.Body>
            </Card>
          </a>
          <a href="">
            <Card className="contanedor-fotos">
              <Card.Img variant="top" src="..\public\img\DanielRomero.png" />
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
