import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Banner from "./Banner";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "../css/List.css";

const List = () => {
  const [data, setData] = useState(null);
  const [book, setBook] = useState(null);

  const [load, setLoad] = useState(null);
  const [error, setError] = useState(false);

  //vigila a la api
  useEffect(() => {
    showApi();
  }, []);

  //vigila que si api camba de color, active la funcion de card
  useEffect(() => {
    if (data) {
      showBook();
      console.log(data.results);
    }
  }, [data]);

  //funcion que trae api
  const showApi = async () => {
    try {
      setLoad(true);
      const res = await fetch("https://gutendex.com/books/?");
      setData(await res.json());
    } catch (error) {
      setError(true);
    } finally {
    }
  };

  //funcion que maneja la informacion para hacerla una card
  const showBook = () => {
    const arr = data.results.map((item) => {
      console.log(item.formats);
      return (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={item.formats + "image/jpeg"}
            alt={`imagen de ${item.title}`}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.authors[0].name}
            </Card.Subtitle>
            <Card.Text>{item.subjects[0]}</Card.Text>
            <Button variant="primary">Boton de editar</Button>
            <Button variant="danger">Boton de borrar</Button>
          </Card.Body>
        </Card>
      );
    });
    setBook(arr);
  };

  return (
    <section className="main">
      <Banner />
      <section className="cards">{book}</section>
    </section>
  );
};

export default List;

{
  /* pendiente consultar la ruta de la imagen */
}
