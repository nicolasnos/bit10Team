import React from "react";
import { useState } from "react";
import BookIteam from "./BookIteam";
import Card from "react-bootstrap/Card";

export default function BookList({ newBook, setNewBook }) {
  const [editItem, setEditItem] = useState({});
  const cardBookElemento = newBook.map((item, i) => (
    <Card key={i} style={{ width: "18rem" }} className="card">
      <BookIteam
        index={i}
        title={item.title}
        authors={item.authors[0].name}
        gender={item.gender}
        newBook={newBook}
        setNewBook={setNewBook}
        editItem={editItem}
        setEditItem={setEditItem}
      />
    </Card>
  ));
  return <Card.Body>{cardBookElemento}</Card.Body>;
}
