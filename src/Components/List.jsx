import React, { useState, useEffect } from "react";
import "../css/List.css";
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
      setBook(data.results);
    } catch (error) {
      console.log(error);
    }
  };

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
  };

  return (
    <>
      <Banner />
      <section className="contenedor-main">
        <article className="contenedor-filtros">
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
            book={book}
          />
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
        <article className="card-contenedor">
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
