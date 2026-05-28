import Flashcard from "./Flashcard";
import questions from "./flashcards"
import { useState } from "react";
import Controls from "./Controls";
import Progress from "./Progress";
import './App.css';

export default function App() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="app">
      <h1>Flashcard App</h1>
      <Progress questionIndex={questionIndex} questions={questions} />
      <Flashcard question={questions[questionIndex].question} answer={questions[questionIndex].answer} showAnswer={showAnswer} setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} questions={questions} setShowAnswer={setShowAnswer} />
    </div>
  )
};