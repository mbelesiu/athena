import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function QuestionPrompt({ promptsCount, addToPrompts, finalQuestion, setFinalQuestion, showQuestions, submitPrompts, setFlag }) {
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [time, setTime] = useState('');
  // const [flag, setFlag] = useState(false);
  const currentQuestion = `question${promptsCount}`;

  const handleSubmit = (event, boo, booboo) => {
    event.preventDefault();
    console.log(boo);
    const promptToAdd = finalQuestion ? time : currentPrompt;
    addToPrompts(prevPrompts => [...prevPrompts, promptToAdd]);
    setCurrentPrompt('');
    if(boo){
      setFinalQuestion(true);
    }
    if(booboo){
      setFlag(true)
    }


    // useEffect(()=>{
    //   if(finalQuestion){
    //     setFlag(true);
    //   }
    // },[currentPrompt])

  }
  if (!showQuestions) {
    return null;
  }
  if (finalQuestion) {
    return (
      <Modal>
        <ModalContent>
          <form onSubmit={(e)=>{handleSubmit(e, true, true)}}>
            <label> What Time of day would you like to be prompted with these questions?
          <input
                name="EOD"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <button>Submit!</button>
          </form>
        </ModalContent>
      </Modal>

    )
  }

  return (
    <Modal>
      <ModalContent>
        <form onSubmit={(e)=>{handleSubmit(e, false, false)}}>
          <label> Question {promptsCount}
            <input
              name={currentQuestion}
              value={currentPrompt}
              onChange={(e) => setCurrentPrompt(e.target.value)}
            />
          </label>
          <button>Add Another Prompt</button><button onClick={(e)=>{handleSubmit(e, true, false)}}>Set Time of Day</button>
        </form>
      </ModalContent>
    </Modal>

  )
}

const Modal = styled.div`

  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;


export default QuestionPrompt;