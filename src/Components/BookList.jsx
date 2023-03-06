import React from "react";
import { useState } from "react";
import BookIteam from "./BookIteam";
import Card from "react-bootstrap/Card";
import "../css/List.css";
import "../css/Card.css";

const BookList = ({ newBook, setNewBook, totalBooks, setTotalBooks }) => {
  const [editItem, setEditItem] = useState({});
  const cardBookElemento = totalBooks.map((item, i) => (
    <Card key={i} style={{ width: "18rem" }} className="card">
      <BookIteam
        index={i}
        title={item.title}
        authors={item.authors[0].name ? item.authors[0].name : item.authors}
        subjects={item.subjects}
        newBook={newBook}
        setNewBook={setNewBook}
        editItem={editItem}
        setEditItem={setEditItem}
        setTotalBooks={setTotalBooks}
        totalBooks={totalBooks}
      />
    </Card>
  ));
  return <Card.Body className="card-contenedor">{cardBookElemento}</Card.Body>;
};

export default BookList;
