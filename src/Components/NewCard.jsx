import React from "react";
import { Modal, Button, Form, FormControl, FormGroup } from "react-bootstrap";

function NewCard(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a New Card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.addCard}>
          <FormGroup className="mb-3">
            <Form.Label>Question</Form.Label>
            <FormControl
              placeholder="Enter Question Here ..."
              onChange={props.change}
              name="question"
              value={props.questionInput}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Enter Answer</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Answer Here... "
              onChange={props.change}
              name="answer"
              value={props.answerInput}
            />
          </FormGroup>
          <Button type="submit" id="add-card-button">
            {" "}
            Add Flash Card{" "}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewCard;
