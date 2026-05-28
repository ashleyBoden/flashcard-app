export default function Controls( { setQuestionIndex, questionIndex, questions, showAnswer, setShowAnswer } ) {
    return (
        <div className="controls">
            <button onClick={() => {
                setQuestionIndex(Math.max(0, questionIndex - 1));
                setShowAnswer(false);
            }}>Previous</button>
            <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
            <button onClick={() => {
                setQuestionIndex(Math.min(questions.length - 1, questionIndex + 1));
                setShowAnswer(false);
            }}>Next</button>
        </div>
    )
}