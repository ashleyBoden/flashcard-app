import Controls from "./Controls";

export default function Flashcard( {question, answer, showAnswer, setQuestionIndex, questionIndex, questions, setShowAnswer} ) {
    return (
        <div className="flashcard">
            <p>{showAnswer ? answer : question}</p>
            <Controls setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} questions={questions} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
        </div>
    )
};