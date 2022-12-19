import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FlashCard from "./Components/FlashCard";
import cardInfo from "./Components/cardInfo.js";
import NewCard from "./Components/NewCard";
import Button from "react-bootstrap/Button";
import AlertComponent from "./Components/alert";
import ButtonGroup from "react-bootstrap/ButtonGroup";

let cardNumberIndex = 0;

function App() {
  const [question, questionUpdate] = useState(
    cardInfo[cardNumberIndex].question
  );
  const [answer, answerUpdate] = useState(cardInfo[cardNumberIndex].answer);
  const [newQuestion, newQuestionEdit] = useState("");
  const [newAnswer, newAnswerEdit] = useState("");
  const [alertText, alertTextEdit] = useState("");
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function cardTraversal(event) {
    event.preventDefault();
    const { name: buttonName } = event.target;
    if (buttonName === "Next") {
      if (cardNumberIndex + 1 < cardInfo.length) {
        cardNumberIndex++;
        questionUpdate(cardInfo[cardNumberIndex].question);
        answerUpdate(cardInfo[cardNumberIndex].answer);
      } else {
        alertTextEdit(
          "This is the end of the deck, please select a different option"
        );
        setShow(true);
      }
    } else if (buttonName === "Previous") {
      if (cardNumberIndex === 0) {
        alertTextEdit(
          "This is the start of the deck, please select a different option"
        );
        setShow(true);
      } else {
        cardNumberIndex--;
        questionUpdate(cardInfo[cardNumberIndex].question);
        answerUpdate(cardInfo[cardNumberIndex].answer);
      }
    } else if (buttonName === "Random") {
      //Random option, Needs refactoring can get the same random number
      cardNumberIndex = Math.floor(Math.random() * cardInfo.length);
      console.log(cardNumberIndex);
      questionUpdate(cardInfo[cardNumberIndex].question);
      answerUpdate(cardInfo[cardNumberIndex].answer);
    }
  }

  function addCard(event) {
    event.preventDefault();
    cardInfo.push({
      question: newQuestion,
      answer: newAnswer,
    });
    alert("Card Successsfully Added");
    newQuestionEdit("");
    newAnswerEdit("");
  }

  const change = (event) => {
    event.target.name === "question"
      ? newQuestionEdit(event.target.value)
      : newAnswerEdit(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">Flashy Cards</h1>
        <span className="current-index-text">
          {cardNumberIndex + 1} / {cardInfo.length}
        </span>
      </div>
      <AlertComponent
        alertHeading="Sorry, You Cannot Do This !"
        alertText={alertText}
        show={show}
        setShow={setShow}
      />
      <FlashCard
        question={question}
        answer={answer}
        questionNumber={cardNumberIndex + 1}
      />
      <ButtonGroup className="position-absolute top-50 start-50 translate-middle btn-margin">
        <Button
          name="Previous"
          onClick={cardTraversal}
          className="btn-dark btn-lg"
        >
          Previous Card
        </Button>
        <Button
          name="Random"
          onClick={cardTraversal}
          className="btn-dark btn-lg "
        >
          Random Card
        </Button>
        <Button name="Next" onClick={cardTraversal} className="btn-dark btn-lg">
          Next Card
        </Button>
      </ButtonGroup>
      <NewCard
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        addCard={addCard}
        questionInput={newQuestion}
        answerInput={newAnswer}
        change={change}
      />
      <Button
        className="position-absolute top-50 start-50 translate-middle add-card-btn-margin "
        variant="danger"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add Card
      </Button>

      <p className="footer">
        Made by <a href="https://github.com/laziman5898">Lerai Foulkes</a>
      </p>
    </div>
  );
}

export default App;
