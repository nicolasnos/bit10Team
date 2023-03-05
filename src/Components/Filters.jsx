import React from "react";
import { Card, Button } from "react-bootstrap";

const Filters = ({
  setAuthorFilter,
  setGenreFilter,
  setTitleFilter,
  titleFilter,
  authorFilter,
  genreFilter,
  totalBooks,
  setTotalBooks,
  setBook,
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

    const filteredBooks = totalBooks
      .filter((item) =>
        item.title.toLowerCase().includes(titleFilter.toLowerCase())
      )
      .filter((item) =>
        item.authors[0].name.toLowerCase().includes(authorFilter.toLowerCase())
      )
      .filter((item) =>
        item.subjects.some((subject) =>
          subject.toLowerCase().includes(genreFilter.toLowerCase())
        )
      );
    const arr = filteredBooks.map((item, i) => {
      return (
        <Card key={i} style={{ width: "18rem" }}>
          <Card.Title> {item.title} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {item.authors[0].name || item.authors}
          </Card.Subtitle>
          <Card.Text>{item.subjects.join(", ")}</Card.Text>
          <Button variant="primary">Edit button</Button>
          <Button variant="danger">Delete button</Button>
        </Card>
      );
    });
    setTotalBooks(arr);
  };

  return (
    <div className="filters">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={titleFilter}
            onChange={searcherBook}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Autor:</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={authorFilter}
            onChange={authorFilterHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genero:</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            value={genreFilter}
            onChange={genreFilterHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Filters;
