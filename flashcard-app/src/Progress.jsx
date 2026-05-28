export default function Progress({ questionIndex, questions }) {

    const percentage = Math.round(((questionIndex + 1) / questions.length) * 100);

    return (
        <div className="progressBarWrapper">
            <div className="progressOuterBar">
                <div className="progressInnerBar" style={{ width: `${percentage}%` }}></div>
                <div className="progressText">{percentage}%</div>
                <div className="progressCount">{questionIndex + 1} of {questions.length}</div>
            </div>
            
        </div>
        
    )
};