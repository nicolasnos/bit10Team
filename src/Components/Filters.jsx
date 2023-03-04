import React, { useState } from "react";

const Filters = ({ handleFilter }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const filters = {
      title: titleFilter,
      author: authorFilter,
      genre: genreFilter,
    };
    handleFilter(filters);
  };

  return (
    <div className="filters">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={titleFilter}
            onChange={(event) => setTitleFilter(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={authorFilter}
            onChange={(event) => setAuthorFilter(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            value={genreFilter}
            onChange={(event) => setGenreFilter(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Filter
        </button>
      </form>
    </div>
  );
};

export default Filters;