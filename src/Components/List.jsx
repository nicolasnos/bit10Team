import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

const List = () => {
  const [data, setData] = useState(null);
  const [book, setBook] = useState(null);

  const [load, setLoad] = useState(null);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const searcherBook = (e) => {
    setSearch(e.target.value);
  };

  const authorFilterHandler = (e) => {
    setAuthorFilter(e.target.value);
  };

  const genreFilterHandler = (e) => {
    setGenreFilter(e.target.value);
  };

  useEffect(() => {
    showApi();
  }, []);

  useEffect(() => {
    if (data) {
      showBook();
    }
  }, [data, search, authorFilter, genreFilter]);

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
      .filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
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
    <section>
      <div>
        <input
          value={search}
          onChange={searcherBook}
          type="text"
          placeholder="Search"
          className="form-control"
        />
      </div>
      <div>
        <input
          value={authorFilter}
          onChange={authorFilterHandler}
          type="text"
          placeholder="Filter by author"
          className="form-control"
        />
      </div>
      <div>
        <input
          value={genreFilter}
          onChange={genreFilterHandler}
          type="text"
          placeholder="Filter by Genero"
          className="form-control"
          />
          </div>
      {book}
      </section>
  )}
  export default List