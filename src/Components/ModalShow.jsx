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

export const ModalShow = ({
  addBook = { title: "", author: "", gender: "" },
  setaddBook,
  newBook,
  setNewBook,
}) => {
  const [modalShow, setModalShow] = useState(false);

  //Funciones que maneja el modal
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const handleTitle = (event) => {
    const newObj = {
      title: event.target.value,
      author: addBook.author,
      gender: addBook.gender,
    };
    setaddBook(newObj);
  };

  const handleAuthor = (event) => {
    const newobj = {
      title: addBook.title,
      author: event.target.value,
      gender: addBook.gender,
    };
    setaddBook(newobj);
  };

  const handleGender = (event) => {
    const newobj = {
      title: addBook.title,
      author: addBook.author,
      gender: event.target.value,
    };
    setaddBook(newobj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewBook([...newBook, addBook]);
    setaddBook({ title: "", author: "", gender: "" });
    handleClose();
    console.log(newBook);
  };

  return (
    <>
      <div className=" d-grid gap-2 ">
        <Button onClick={handleShow}>Agregar</Button>
      </div>

      <Modal size="lg" show={modalShow} onHide={handleClose}>
        <Modal.Header>
          <ModalTitle>Nuevo Libro</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <FormLabel> Titulo del libro</FormLabel>
              <FormControl
                type="text"
                placeholder="Ingrese el titulo"
                required
                value={addBook.title}
                onChange={handleTitle}
              />
            </Form.Group>
            <Form.Group>
              <FormLabel> Autor del libro</FormLabel>
              <FormControl
                type="text"
                placeholder="Ingrese el autor"
                required
                value={addBook.author}
                onChange={handleAuthor}
              />
            </Form.Group>
            <Form.Group>
              <FormLabel> Género litetario</FormLabel>
              <FormControl
                type="text"
                placeholder="Ingrese el género"
                required
                value={addBook.gender}
                onChange={handleGender}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {" "}
              Guardar Cambios
            </Button>
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
