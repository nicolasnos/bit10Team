import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { CiSaveDown1 } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import "../css/Card.css";

export default function BookIteam({
  index,
  title,
  authors,
  subjects,
  newBook,
  setNewBook,
  editItem,
  setEditItem,
  setTotalBooks,
  totalBooks,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(authors);
  const [newGenre, setNewGenre] = useState(subjects);

  //Fucncion que elimina la tarjeta
  const handleDelete = () => {
    const updatedBookList = [...totalBooks];
    updatedBookList.splice(index, 1);
    setTotalBooks(updatedBookList);
  };

  //Funcion que editar la tarjeta

  const handleEdit = () => {
    setEditItem({ index, title, authors, subjects });
  };

  const handleUpdate = () => {
    const updatedList = totalBooks.map((item, i) => {
      if (i === index) {
        return { title: newTitle, authors: newAuthor, subjects: newGenre };
      }
      return item;
    });
    setTotalBooks(updatedList);
    setEditItem({});
  };

  //Funcion que cancelar el editar

  const handleCancel = () => {
    setNewTitle(title);
    setNewAuthor(authors);
    setNewGenre(subjects);
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
            <CiSaveDown1 /> guardar
          </Button>{" "}
          <Button className="btn" variant="danger" onClick={handleCancel}>
            {" "}
            cancelar <ImCancelCircle />
          </Button>{" "}
        </div>
      </>
    );
  }

  return (
    <>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{authors}</Card.Subtitle>
      <Card.Text>{subjects}</Card.Text>
      <Button
        variant="secondary"
        onClick={() => handleEdit({ title, authors, subjects })}>
        <RiEdit2Line />
      </Button>
      <Button variant="secondary" onClick={handleDelete}>
        <RiDeleteBinLine />
      </Button>
    </>
  );
}
