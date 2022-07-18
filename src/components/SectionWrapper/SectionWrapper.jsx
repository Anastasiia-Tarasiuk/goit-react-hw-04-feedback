import {useState} from "react";
import PropTypes from 'prop-types';
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import styles from "./SectionWrapper.module.css"

export default function Section({ title }) {
    const [goodFeedbackValue, setGoodFeedbackValue] = useState(0);
    const [neutralFeedbackValue, setNeutralFeedbackValue] = useState(0);
    const [badFeedbackValue, setBadFeedbackValue] = useState(0);

    const handleClickButton = (e) => {
        const { name } = e.target;
       
        switch (name) {
            case 'good': setGoodFeedbackValue(goodFeedbackValue + 1);
                break;
            case 'neutral': setNeutralFeedbackValue(neutralFeedbackValue + 1);
                break;
            case 'bad': setBadFeedbackValue(badFeedbackValue + 1);
                break;
            default: return;
        }     
    }

    const countTotalFeedback = () => goodFeedbackValue + neutralFeedbackValue + badFeedbackValue;
    
    const countPositiveFeedbackPercentage = () => (goodFeedbackValue / countTotalFeedback() * 100).toFixed(2);

    const buttons = {
        good: goodFeedbackValue,
        neutral: neutralFeedbackValue,
        bad: badFeedbackValue,
    }    
    
    const options = Object.keys(buttons);

    return <section>
        <h1 className={styles.section__title}>{title}</h1>
                <FeedbackOptions 
                    onLeaveFeedback={handleClickButton}
                    options={options}
                />
                <Statistics
                    good={goodFeedbackValue}
                    neutral={neutralFeedbackValue}
                    bad={badFeedbackValue}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />          
            </section>;   
    
}


Section.propTypes = {
    title: PropTypes.string,
}


// class OldSection extends Component {

//     // static defaultProps = {
//     //     title: ""
//     // }

//     // static propTypes = {
//     //     title: PropTypes.string,
//     // }

//     // state = {
//     //     good: 0,
//     //     neutral: 0,
//     //     bad: 0
//     // }
    
//     handleClickButton = ({target: {name}}) => {
//         this.setState((prevState) => ({
//             [name]: prevState[name] + 1
//         }))
//     }
    
//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     }
    
//     countPositiveFeedbackPercentage = () => {
//         const { good } = this.state;
//         return (good / this.countTotalFeedback() * 100).toFixed(2);
//     }

//     render() { 
//         const options = Object.keys(this.state);
//         const { good, neutral, bad } = this.state;

//         return <section>
//             <h1 className={styles.section__title}>{this.props.title}</h1>
//             <FeedbackOptions 
//                 onLeaveFeedback={this.handleClickButton}
//                 options={options}
//             />
//             <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//             />          
//         </section>;        
//     }
// } 

// export default Section;