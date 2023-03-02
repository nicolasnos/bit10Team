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

export const ModalShow = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

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
          <Form>
            <Form.Group>
              <FormLabel> Titulo del libro</FormLabel>
              <FormControl type="text" placeholder="Ingrese el titulo" />
            </Form.Group>
            <Form.Group>
              <FormLabel> Autor del libro</FormLabel>
              <FormControl type="text" placeholder="Ingrese el autor" />
            </Form.Group>
            <Form.Group>
              <FormLabel> Género litetario</FormLabel>
              <FormControl type="text" placeholder="Ingrese el género" />
            </Form.Group>
          </Form>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              {" "}
              Cerrar
            </Button>
            <Button variant="primary"> Guardar Cambios</Button>
          </ModalFooter>
        </Modal.Body>
      </Modal>
    </>
  );
};
