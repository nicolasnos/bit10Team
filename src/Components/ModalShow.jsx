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
  addBook = { title: "", author: "", gender: "" },
  setaddBook,
  newBook,
  setNewBook,
  totalBooks,
  setTotalBooks,
}) => {
  const [modalShow, setModalShow] = useState(false);

  //Funciones que maneja el modal
  const handleClose = () => {
    setaddBook({ title: "", author: "", gender: "" }), setModalShow(false);
  };
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
    setNewBook(() => [...newBook, addBook]);
    setaddBook({ title: "", authors: "", gender: "" });
    const newList = [...totalBooks, addBook];
    setTotalBooks(newList);
    console.log(totalBooks);
    handleClose();
  };

  return (
    <>
      <div className="  d-grid gap-2 ">
        <Button className="btn-modal" onClick={handleShow}>
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
              <FormLabel className="form-label"> Titulo del libro</FormLabel>
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
                value={addBook.author}
                onChange={handleAuthor}
              />
            </Form.Group>
            <Form.Group>
              <FormLabel className="form-label"> Género litetario</FormLabel>
              <FormControl
                className="form-control"
                type="text"
                placeholder="Ingrese el género"
                required
                value={addBook.gender}
                onChange={handleGender}
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

export default ModalShow
