import React, { useState, useEffect } from "react";
import "../css/List.css";
import Card from "react-bootstrap/Card";
import Banner from "./Banner";
import ModalShow from "./ModalShow";
import BookList from "./BookList";
import Filters from "./Filters";

const List = () => {
  const [data, setData] = useState(null);
  const [book, setBook] = useState(null);
  const [totalBooks, setTotalBooks] = useState([]);
  const [addBook, setAddBook] = useState({
    title: "",
    author: "",
    genre: "",
  });
  const [newBook, setNewBook] = useState([]);

  useEffect(() => {
    console.log("totalbooks:", totalBooks);
  }, [totalBooks]);

  useEffect(() => {
    showApi();
  }, []);

  useEffect(() => {
    if (data) {
      showBook(data.results);
    }
  }, [data]);

  const showApi = async () => {
    try {
      const res = await fetch("https://gutendex.com/books/?");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const showBook = (results) => {
    const arr = results.map((item, i) => {
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
    setTotalBooks(results);
  };

  const handleFilterChange = (filterType, filterValue) => {
    let filteredBooks = data.results.filter((book) => {
      if (filterType === "title") {
        return book.title.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterType === "author") {
        return book.authors[0].name
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      } else if (filterType === "genre") {
        return book.subjects.some((subject) =>
          subject.toLowerCase().includes(filterValue.toLowerCase())
        );
      }
    });

    setTotalBooks(filteredBooks);
    showBook(filteredBooks);
  };

  return (
    <>
      <Banner />
      <section className="contenedor-main">
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
        <article>
          <Filters handleFilter={handleFilterChange} />
        </article>
        <article>
          <BookList newBook={newBook} setNewBook={setNewBook} />
        </article>
        <article className="card-contenedor">{book}</article>
      </section>
    </>
  );
};

export default List;