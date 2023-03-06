import React, { useState, useEffect } from "react";
import "../css/List.css";
import Card from "react-bootstrap/Card";
import Banner from "./Banner";
import { ModalShow } from "./ModalShow";
import BookList from "./BookList";
import Filters from "./Filters";

const List = () => {
  const [data, setData] = useState(null);
  const [book, setBook] = useState(null);
  const [totalBooks, setTotalBooks] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
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
      /* showBook(data.results); */
    }
  }, [data, totalBooks]);

  const showApi = async () => {
    try {
      const res = await fetch("https://gutendex.com/books/?");
      const data = await res.json();
      setData(data);
      setTotalBooks(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  /*   const showBook = () => {
    const arr = totalBooks.map((item, i) => {
      return (
        <Card key={i} style={{ width: "18rem" }} className="card">
          {" "}
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.authors[0].name}
            </Card.Subtitle>
            <Card.Text>{item.subjects}</Card.Text>
          </Card.Body>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => handleDelete(item.id)}>eliminar</button>
        </Card>
      );
    });
    setBook(arr);
  }; */

  const handleFilterChange = () => {
    let filteredBooks = totalBooks.filter((totalBooks) => {
      if (titleFilter === "title") {
        return console.log(
          totalBooks.title.toLowerCase().includes(filterValue.toLowerCase())
        );
      } else if (authorFilter === "authors") {
        return totalBooks.authors[0].name
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      } else if (genreFilter === "subject") {
        return totalBooks.subjects.some((subject) =>
          subject.toLowerCase().filter(filterValue.toLowerCase())
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
          <Filters
            handleFilter={handleFilterChange}
            setAuthorFilter={setAuthorFilter}
            setGenreFilter={setGenreFilter}
            setTitleFilter={setTitleFilter}
            genreFilter={genreFilter}
            authorFilter={authorFilter}
            titleFilter={titleFilter}
            totalBooks={totalBooks}
            setTotalBooks={setTotalBooks}
            setBook={setBook}
          />
        </article>
        <article className="card-contenedor">
          {" "}
          {/* {book} */}
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
