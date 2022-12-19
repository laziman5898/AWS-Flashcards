import React from "react";

function FlashCard(props) {
  return (
    <div class="cardBox">
      <div class="card">
        <div className="question-content">
          <span>{props.question}</span>
        </div>
        <div class="content">
          <h3>Answer</h3>
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
