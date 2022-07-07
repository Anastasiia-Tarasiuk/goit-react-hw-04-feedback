import React from "react";

const FeedbackOptions = ({ onLeaveFeedback,  options }) => {

    return <>
        <h2>Please leave feedback</h2>
        <ul>
            <li>
                <button type="button" name={options[0]} onClick={onLeaveFeedback}>Good</button>
            </li>
            <li>
                <button type="button" name={options[1]} onClick={onLeaveFeedback}>Neutral</button>
            </li>
            <li>
                <button type="button" name={options[2]} onClick={onLeaveFeedback}>Bad</button>
            </li>
        </ul>
    </>
}

export default FeedbackOptions;