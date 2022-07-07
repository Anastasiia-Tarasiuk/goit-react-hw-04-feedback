import React from "react";
import styles from './Statistics.module.css';
import Notification from "components/Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div>
        <h2 className={styles.statistics__title}>Statistics</h2>
        {total !== 0
            ? <ul>
                <li>Good:<span className={styles.statistics__value}>{good}</span></li>
                <li>Neutral:<span className={styles.statistics__value}>{neutral}</span></li>
                <li>Bad:<span className={styles.statistics__value}>{bad}</span></li>
                <li>Total:<span className={styles.statistics__value}>{total}</span></li>
                <li>Positive feedback:<span className={styles.statistics__value}>{positivePercentage}</span>%</li>
            </ul>
            : <Notification message="There is no feedback"/> }        
    </div>    
}

export default Statistics;