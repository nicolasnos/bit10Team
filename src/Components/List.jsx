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

  const handleEdit = () => {
    console.log("editando");
  };

  const handleDelete = (id) => {
    const bookIndex = totalBooks.findIndex((book) => book.id === id);
    const newList = [...totalBooks];
    newList.splice(bookIndex, 1);
    setTotalBooks(newList);
  };

  const showBook = () => {
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
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => handleDelete(item.id)}>eliminar</button>
        </Card>
      );
    });
    setBook(arr);
  };

  const handleFilterChange = (filterType, filterValue) => {
    let filteredBooks = totalBooks.filter((book) => {
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
      console.log(filteredBooks);
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
