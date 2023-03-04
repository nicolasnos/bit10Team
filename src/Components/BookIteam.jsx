import { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function BookIteam({
  index,
  title,
  authors,
  gender,
  newBook,
  setNewBook,
  editItem,
  setEditItem,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthors, setNewAuthors] = useState(authors);
  const [newGenre, setNewGenre] = useState(gender);

  //Fucncion que elimina la tarjeta
  const handleDelete = () => {
    const updatedBookList = [...newBook];
    updatedBookList.splice(index, 1);
    setNewBook(updatedBookList);
  };

  //Funcion que editar la tarjeta

  const handleEdit = () => {
    setEditItem({ index, title, authors, gender });
  };

  const handleUpdate = () => {
    const updatedList = newBook.map((item, i) => {
      if (i === index) {
        return { title: newTitle, authors: newAuthors, gender: newGenre };
      }
      return item;
    });
    setNewBook(updatedList);
    setEditItem({});
  };

  //Funcion que cancelar el editar

  const handleCancel = () => {
    setNewTitle(title);
    setNewAuthors(authors);
    setNewGenre(gender);
    setEditItem({});
  };

  if (editItem.index === index) {
    return (
      <>
        <Card.Title>
          <input
            className="inputEdit"
            type="text"
            value={newTitle}
            id="title-input"
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Card.Title>
        <Card.Subtitle>
          <input
            className="inputEdit"
            type="text"
            value={newAuthors}
            id="author-input"
            onChange={(e) => setNewAuthors(e.target.value)}
          />
        </Card.Subtitle>
        <Card.Text>
          <input
            className="inputEdit"
            type="text"
            value={newGenre}
            id="genre-input"
            onChange={(e) => setNewGenre(e.target.value)}
          />
        </Card.Text>
        <div>
          <Button className="btn" variant="success" onClick={handleUpdate}>
            guardar
          </Button>{" "}
          <Button className="btn" variant="danger" onClick={handleCancel}>
            {" "}
            cancelar
          </Button>{" "}
        </div>
      </>
    );
  }

  return (
    <>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{authors}</Card.Subtitle>
      <Card.Text>{gender}</Card.Text>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => handleEdit({ title, authors, gender })}
      >
        Editar
      </Button>
      <Button variant="secondary" size="sm" onClick={handleDelete}>
        Eliminar
      </Button>
    </>
  );
}
