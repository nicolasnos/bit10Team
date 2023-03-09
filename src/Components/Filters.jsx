import React from "react";
import Button from "react-bootstrap/Button";
import "../css/Filters.css";

const Filters = ({
  setAuthorFilter,
  setGenreFilter,
  setTitleFilter,
  titleFilter,
  authorFilter,
  genreFilter,
  totalBooks,
  setTotalBooks,
  book,
}) => {
  // funciones actulizadoras de los inputs
  const searcherBook = (e) => {
    setTitleFilter(e.target.value);
  };

  const authorFilterHandler = (e) => {
    setAuthorFilter(e.target.value);
  };

  const genreFilterHandler = (e) => {
    setGenreFilter(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    //filtro de los libros
    const filteredBooks = totalBooks
      .filter((item) =>
        item.title.toLowerCase().includes(titleFilter.toLowerCase())
      )
      .filter((item) =>
        (item.authors[0].name ? item.authors[0].name : item.authors)
          .toLowerCase()
          .includes(authorFilter.toLowerCase())
      )
      .filter((item) =>
        item.subjects.some((subject) =>
          subject.toLowerCase().includes(genreFilter.toLowerCase())
        )
      );
    //funcion que filtra los libros
    const arr = filteredBooks.map((item, i) => {
      return {
        title: item.title,
        authors:
          item.authors && item.authors[0].name
            ? item.authors[0].name
            : item.authors,
        subjects: item.subjects,
      };
    });

    // funcion que re ordena los libros por titulo, autor y genero
    const sortedBooks = [...totalBooks];
    sortedBooks.sort((a, b) => {
      const aMatch = filteredBooks.includes(a);
      const bMatch = filteredBooks.includes(b);
      if (aMatch && bMatch) {
        return 0;
      } else if (aMatch) {
        return -1;
      } else if (bMatch) {
        return 1;
      } else {
        return 0;
      }
    });

    setTotalBooks(sortedBooks);
  };

  return (
    <div className="filters">
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="label-filters">
            Titulo:
          </label>
          <input
            type="text"
            className="form-control-filtro"
            id="title"
            value={titleFilter}
            onChange={searcherBook}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author" className="label-filters">
            Autor:
          </label>
          <input
            type="text"
            className="form-control-filtro"
            id="author"
            value={authorFilter}
            onChange={authorFilterHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre" className="label-filters">
            Genero:
          </label>
          <input
            type="text"
            className="form-control-filtro"
            id="genre"
            value={genreFilter}
            onChange={genreFilterHandler}
          />
        </div>
        <div className="contendor-btn">
          <Button type="submit" className="btn-buscar">
            Buscar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
