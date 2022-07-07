import React from "react";

const FeedbackOptions = ({ onClickButton }) => {
    return <>
        <h2>Please leave feedback</h2>
        <ul>
            <li>
                <button type="button" onClick={onClickButton}>good</button>
            </li>
            <li>
                <button type="button" onClick={onClickButton}>neutral</button>
            </li>
            <li>
                <button type="button" onClick={onClickButton}>bad</button>
            </li>
        </ul>
    </>
}

export default FeedbackOptions;