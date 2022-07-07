import React, {Component} from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

class Section extends Component {

    static defaultProps = {
        title: ""
    }

    // static propTypes = {

    // }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    handleClickButton = (e) => {
        const targetName = e.currentTarget.name;
        this.setState((prevState) => {
            for (const key in prevState) {
                if (key === targetName) {
                    return prevState[key] += 1;                    
                }                 
            }   
        })
    }
    
    // countTotalFeedback = ({ good, neutral, bad }) => {
    //     return good + neutral + bad;
    // }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return (good / this.countTotalFeedback() * 100).toFixed(2);
    }

    render() { 
        const options = Object.keys(this.state);
        const { good, neutral, bad } = this.state;

        return <>
            <h1>{this.props.title}</h1>
            <FeedbackOptions
                onLeaveFeedback={this.handleClickButton}
                options={options}
            />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
            />          
        </>;        
    }
} 

export default Section;