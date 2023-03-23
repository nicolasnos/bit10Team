import { useState } from "react";
import { Card, Button, Figure } from "react-bootstrap";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import "../css/Card.css";

export default function BookIteam({
  index,
  title,
  authors,
  subjects,
  url,
  bookImage,
  editItem,
  setEditItem,
  setTotalBooks,
  totalBooks,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(authors);
  const [newGenre, setNewGenre] = useState(subjects);
  const [link, setLink] = useState(url);
  const [newImage, setNewImage] = useState(bookImage);

  //Fucncion que elimina el libro
  const handleDelete = () => {
    const updatedBookList = [...totalBooks];
    updatedBookList.splice(index, 1);
    setTotalBooks(updatedBookList);
  };

  //Funcion que edita y actualiza el libro
  const handleEdit = () => {
    setEditItem({ index, title, authors, subjects });
  };

  const handleUpdate = () => {
    const updatedList = totalBooks.map((item, i) => {
      if (i === index) {
        return {
          title: newTitle,
          authors: newAuthor,
          subjects: newGenre,
          formats: {
            "image/jpeg": newImage,
            "text/html": link,
          },
        };
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
    setLink(url);
    setNewImage(!bookImage ? newImage : bookImage);
    setEditItem({});
  };

  if (editItem.index === index) {
    return (
      <>
        <Card.Text>
        <label htmlFor="titulo-input" >
        Título
          </label>
          <input
            className="inputEdit"
            type="text"
            value={newTitle}
            id="title-input"
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Card.Text>
        <Card.Text>
        <label htmlFor="autor-input" >
          Autor
          </label>
          <input
            className="inputEdit"
            type="text"
            value={newAuthor}
            id="author-input"
            onChange={(e) => setNewAuthor(e.target.value)}
          />
        </Card.Text>
        <Card.Text>
        <label htmlFor="genero-input" >
            Genero
          </label>
          <input
            className="inputEdit"
            type="text"
            value={newGenre}
            id="genre-input"
            onChange={(e) => setNewGenre(e.target.value)}
          />
        </Card.Text>
        <Card.Text>
          <label htmlFor="link-input" className="labelEdit">
            Pon el link para encontrar tu libro
          </label>
          <input
            className="inputEdit"
            type="text"
            value={link}
            id="link-input"
            onChange={(e) => setLink(e.target.value)}
          />
        </Card.Text>
        <Card.Text>
          <label htmlFor="image-input"  className="labelEdit">
            Pon la url para encontrar la imagen del libro
          </label>
          <input
            className="inputEdit"
            type="text"
            value={newImage}
            id="image-input"
            onChange={(e) => setNewImage(e.target.value)}
          />
        </Card.Text>
        <div className="contenedor-btn-card">
          <Button className="btn" variant="success" onClick={handleUpdate}>
            Guardar
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
      <Card.Title className="titulo">{title}</Card.Title>
      <Card.Subtitle className="autor mb-2 text-muted">{authors}</Card.Subtitle>
      <a href={url} target="_blank">
        <Figure>
          <Figure.Image
            width={111}
            height={120}
            alt="Link al libro de ${title}"
            src={bookImage}
          />
          <Figure.Caption>Link al libro de {title}</Figure.Caption>
        </Figure>
      </a>
      <Card.Text className="genero mb-2 text-muted">{subjects}</Card.Text>
      <div className="contenedor-btn-card">
        <Button
          variant="outline-warning"
          onClick={() => handleEdit({ title, authors, subjects })}
        >
          <RiEdit2Line />
        </Button>
        <Button variant="outline-danger" onClick={handleDelete}>
          <RiDeleteBinLine />
        </Button>
      </div>
    </>
  );
}
