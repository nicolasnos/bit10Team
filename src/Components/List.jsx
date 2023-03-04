import React, { useState, useEffect } from "react";
import "../css/List.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Banner from "./Banner";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { ModalShow } from "./ModalShow";
import BookList from "./BookList";

const List = () => {
  const [data, setData] = useState(null);
  const [book, setBook] = useState(null);
  const [totalBooks, setTotalBooks] = useState([]);
  const [addBook, setAddBook] = useState({
    title: "",
    author: "",
    gender: "",
  });
  const [newBook, setNewBook] = useState([]);

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
    console.log("totalbooks:", totalBooks);
  }, [totalBooks]);

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
    setTotalBooks(data.results);
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
    const arr = totalBooks.map((item, i) => {
      return (
        <Card key={i} style={{ width: "18rem" }} className="card">
          {" "}
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.authors[0].name}
            </Card.Subtitle>
            <Card.Text>{item.subjects.join(", ")}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
    setBook(arr);
  };

  return (
    <>
      <Banner />{" "}
      <section className="contenedor-main">
        <article>
          {" "}
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
        </article>
        <article>
          <ModalShow
            addBook={addBook}
            setaddBook={setAddBook}
            newBook={newBook}
            setNewBook={setNewBook}
            setBook={setBook}
            totalBooks={totalBooks}
            setTotalBooks={setTotalBooks}
          />
        </article>
        {/*         <article>
          <BookList newBook={newBook} setNewBook={setNewBook} />
        </article> */}

        <article className="card-contenedor">
          {" "}
          {book}
          <BookList
            totalBooks={totalBooks}
            setTotalBooks={setTotalBooks}
            newBook={newBook}
            setNewBook={setNewBook}
          />
        </article>
      </section>
    </>
  );
};
export default List;
