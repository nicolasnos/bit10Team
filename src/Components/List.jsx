import React, { useState, useEffect } from "react";
import "../css/List.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Banner from "./Banner";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { ModalShow } from "./ModalShow";
import Filter from "./Filter"

const List = () => {
  const [data, setData] = useState(null);
  const [book, setBook] = useState(null);
  const [addBook, setAddBook] = useState({
    title: "",
    author: "",
    gender: "",
  });
  const [newBook, setNewBook] = useState([]);

  const [load, setLoad] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    showApi();
  }, []);

  useEffect(() => {
    if (data) {
      showBook();
    }
  }, [data]);

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

  const showBook = () => {
    const filteredBooks = data.results
      .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))

      .filter((item) =>
        item.authors[0].name.toLowerCase().includes(authorFilter.toLowerCase())
      )
      .filter((item) =>
        item.subjects.some((subject) =>
          subject.toLowerCase().includes(genreFilter.toLowerCase())
        )
      );

    const arr = filteredBooks.map((item) => {
      return (
        <Card key={item.id} style={{ width: "18rem" }} className="card">
          {" "}
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
            <Card.Text>{item.subjects.join(", ")}</Card.Text>
            <Button variant="primary">Edit button</Button>
            <Button variant="danger">Delete button</Button>
          </Card.Body>
        </Card>
      );
    });
    setBook(arr);
  };

  return (
    <>
      <Banner />{" "}
      <Filter />
      <section className="contenedor-main">
        <article>
          <ModalShow
            addBook={addBook}
            setaddBook={setAddBook}
            newBook={newBook}
            setNewBook={setNewBook}
            setBook={setBook}
          />
        </article>
        <article className="card-contenedor">{book}</article>
      </section>
    </>
  );
};
export default List;
