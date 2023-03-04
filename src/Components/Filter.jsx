import React from "react";

const Filtros = ({search, setSearch, authorFilter, setAuthorFilter, genreFilter, setGenreFilter}) => {

  const searcherBook = (e) => {
    setSearch(e.target.value);
  };

  const authorFilterHandler = (e) => {
    setAuthorFilter(e.target.value);
  };

  const genreFilterHandler = (e) => {
    setGenreFilter(e.target.value);
  };

  return (
    <>
      <div>
        <input
          value={search}
          onChange={searcherBook}
          type="text"
          placeholder="Filter by Book"
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
    </>
  );
};

export default Filtros;