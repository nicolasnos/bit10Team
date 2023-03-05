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
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newGenre, setNewGenre] = useState(gender);

  //Fucncion que elimina la tarjeta 
  const handleDelete = () => {
    const updatedBookList = [...newBook];
    updatedBookList.splice(index, 1);
    setNewBook(updatedBookList);
  };

  //Funcion que editar la tarjeta 

  const handleEdit = () => {
    setEditItem({ index, title, author, gender });
  };

  const handleUpdate = () => {
    const updatedList = newBook.map((item, i) => {
      if (i === index) {
        return { title: newTitle, author: newAuthor, gender: newGenre };
      }
      return item;
    });
    setNewBook(updatedList);
    setEditItem({});
  };

//Funcion que cancelar el editar

  const handleCancel = () => {
    setNewTitle(title);
    setNewAuthor(author);
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
            value={newAuthor}
            id="author-input"
            onChange={(e) => setNewAuthor(e.target.value)}
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