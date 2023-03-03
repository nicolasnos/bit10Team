import { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function BookIteam({
  index,
  title,
  author,
  gender,
  newBook,
  setNewBook,
  editItem,
  setEditItem,
}) {
  //Fucncion que elimina la tarjeta creada
  const handleDelete = () => {
    const updatedBookList = [...newBook];
    updatedBookList.splice(index, 1);
    setNewBook(updatedBookList);
  };
  return (
    <>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
      <Card.Text>{gender}</Card.Text>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => handleEdit({ title, author, gender })}>
        Editar
      </Button>
      <Button variant="secondary" size="sm" onClick={handleDelete}>
        Eliminar
      </Button>
    </>
  );
}
