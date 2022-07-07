import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback,  options }) => {

    return <div className={styles.feedback}>
        <h2 className={styles.feedback__title}>Please leave feedback</h2>
        <ul className={styles.feedback__list}>
            <li className={styles.feedback__item}>
                <button className={styles.feedback__button} type="button" name={options[0]} onClick={onLeaveFeedback}>Good</button>
            </li>
            <li className={styles.feedback__item}>
                <button className={styles.feedback__button} type="button" name={options[1]} onClick={onLeaveFeedback}>Neutral</button>
            </li>
            <li className={styles.feedback__item}>
                <button className={styles.feedback__button} type="button" name={options[2]} onClick={onLeaveFeedback}>Bad</button>
            </li>
        </ul>
    </div>
}

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
}