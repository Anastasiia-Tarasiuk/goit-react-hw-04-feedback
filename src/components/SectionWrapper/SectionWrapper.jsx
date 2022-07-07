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

    countTotalFeedback = ({ good, neutral, bad }) => {
        return good + neutral + bad;
    }
    
    countPositiveFeedbackPercentage = ({good}, countTotalFeedback ) => {
        return (good / countTotalFeedback * 100).toFixed(2);
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
                total={this.countTotalFeedback(this.state)}
                positivePercentage={this.countPositiveFeedbackPercentage(this.state, this.countTotalFeedback(this.state))}
            />          
        </>;        
    }
} 

export default Section;