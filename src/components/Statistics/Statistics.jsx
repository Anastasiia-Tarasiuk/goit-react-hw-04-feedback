import React from "react";
import Notification from "components/Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div>
        <h2>Statistics</h2>
        {total !== 0
            ? <ul>
                <li>Good:<span>{good}</span></li>
                <li>Neutral:<span>{neutral}</span></li>
                <li>Bad:<span>{bad}</span></li>
                <li>Total:<span>{total}</span></li>
                <li>Positive feedback:<span>{positivePercentage}</span>%</li>
            </ul>
            : <Notification message="There is no feedback"/> }        
    </div>    
}

export default Statistics;