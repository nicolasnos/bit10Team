import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  Form,
  FormControl,
  FormLabel,
  Modal,
  ModalFooter,
  ModalTitle,
} from "react-bootstrap";
import "../css/ModalShow.css";

const ModalShow = ({
  addBook = {
    title: "",
    authors: "",
    subjects: "",
    formats: {
      "image/jpeg": "",
      "text/html": "",
    },
  },
  setaddBook,
  newBook,
  setNewBook,
  totalBooks,
  setTotalBooks,
}) => {
  const [modalShow, setModalShow] = useState(false);

  //Funciones que maneja el modal
  const handleClose = () => {
    setaddBook({
      title: "",
      authors: "",
      subjects: "",
      formats: {
        "image/jpeg": "",
        "text/html": "",
      },
    }),
      setModalShow(false);
  };
  const handleShow = () => setModalShow(true);

  //agrega valor al titulo de nuevo libro
  const handleTitle = (event) => {
    const newObj = {
      title: event.target.value,
      authors: addBook.authors,
      subjects: addBook.subjects,
    };
    setaddBook(newObj);
  };

  //agrega valor al autor de nuevo libro
  const handleAuthors = (event) => {
    const newobj = {
      title: addBook.title,
      authors: event.target.value,
      subjects: addBook.subjects,
    };
    setaddBook(newobj);
  };

  //agrega valor al genero de nuevo libro
  const handleSubjects = (event) => {
    const newobj = {
      title: addBook.title,
      authors: addBook.authors,
      subjects: [event.target.value],
      formats: {
        "image/jpeg": addBook.image,
        "text/html": addBook.link,
      },
    };
    setaddBook(newobj);
  };

  //agrega valor a la imágen del nuevo libro
  const handleImage = (event) => {
    const newObj = {
      title: addBook.title,
      authors: addBook.authors,
      subjects: addBook.subjects,
      formats: {
        "image/jpeg": event.target.value,
        "text/html": addBook.formats["text/html"],
      },
    };
    setaddBook(newObj);
  };
  //agrega valor a la link del nuevo libro
  const handleLink = (event) => {
    const newObj = {
      title: addBook.title,
      authors: addBook.authors,
      subjects: addBook.subjects,
      formats: {
        "image/jpeg": addBook.formats["image/jpeg"],
        "text/html": event.target.value,
      },
    };
    setaddBook(newObj);
  };

  //Agrega el nuevo libro al array existente
  const handleSubmit = (event) => {
    event.preventDefault();
    setNewBook((prevBooks) => [...newBook, addBook]);
    setaddBook({
      title: "",
      authors: "",
      subjects: "",
      formats: {
        "image/jpeg": "",
        "text/html": "",
      },
    });
    const updatedBookList = [...totalBooks];
    updatedBookList.push(addBook);
    setTotalBooks(updatedBookList);
    handleClose();
  };

  return (
    <>
      <div className="d-grid gap-2 col-6 mx-auto ">
        <Button className="btn-modal btn btn-lg" onClick={handleShow}>
          Agregar
        </Button>
      </div>
      <Modal size="lg" show={modalShow} onHide={handleClose}>
        <Modal.Header className="modal-header " closeButton>
          <ModalTitle className="titulo">Nuevo Libro</ModalTitle>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <FormLabel className="form-label"> Título del libro</FormLabel>
              <FormControl
                className="form-control"
                type="text"
                placeholder="Ingrese el titulo"
                required
                value={addBook.title}
                onChange={handleTitle}
              />
            </Form.Group>
            <Form.Group>
              <FormLabel className="form-label"> Autor del libro</FormLabel>
              <FormControl
                className="form-control"
                type="text"
                placeholder="Ingrese el autor"
                required
                value={addBook.authors}
                onChange={handleAuthors}
              />
            </Form.Group>
            <Form.Group>
              <FormLabel className="form-label"> Género litetario</FormLabel>
              <FormControl
                className="form-control"
                type="text"
                placeholder="Ingrese el género"
                required
                value={addBook.subjects}
                onChange={handleSubjects}
              />
            </Form.Group>
            <Form.Group>
              <FormLabel className="form-label"> Link del libro</FormLabel>
              <FormControl
                className="form-control"
                type="text"
                placeholder="Ingrese el link para encontrar el libro"
                value={addBook.image}
                onChange={handleLink}
              />
            </Form.Group>
            <Form.Group>
              <FormLabel className="form-label">
                Imágen del libro (opcional)
              </FormLabel>
              <FormControl
                className="form-control"
                type="text"
                placeholder="Ingrese la imágen del libro (opcional)"
                value={addBook.link}
                onChange={handleImage}
              />
            </Form.Group>
            <div className="btn-contenedor">
              <Button variant="primary" type="submit" className="btn-guardar">
                {" "}
                Guardar Cambios
              </Button>
            </div>
          </Form>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal.Body>
      </Modal>
    </>
  );
};
export { ModalShow };
