import React from "react";
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
        item.authors && item.authors[0].name
          ? item.authors[0].name
          : item.authors.toLowerCase().includes(authorFilter.toLowerCase())
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

    // funcion que re ordena los libros por titulo
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
  /*   const handleSubmit = (event) => {
    event.preventDefault();
    const filteredBooks = totalBooks
      .filter((item) =>
        item.title.toLowerCase().includes(titleFilter.toLowerCase())
      )
      .filter((item) =>
        item.authors && item.authors[0].name
          ? item.authors[0].name
          : item.authors.toLowerCase().includes(authorFilter.toLowerCase())
      )
      .filter((item) =>
        item.subjects.some((subject) =>
          subject.toLowerCase().includes(genreFilter.toLowerCase())
        )
      );
    console.log("filtrado", filteredBooks);
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
    console.log("mapeo", arr);

  };
    setTotalBooks(arr); */

  return (
    <div className="filters">
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className=" btn btn-primary">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Filters;
