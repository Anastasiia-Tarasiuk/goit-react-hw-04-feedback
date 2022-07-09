import React, { Component } from "react";
import PropTypes from 'prop-types';
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import styles from "./SectionWrapper.module.css"

class Section extends Component {

    static defaultProps = {
        title: ""
    }

    static propTypes = {
        title: PropTypes.string,
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    handleClickButton = ({target: {name}}) => {
        this.setState((prevState) => ({
            [name]: prevState[name] + 1
        }))
    }
    
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

        return <section>
            <h1 className={styles.section__title}>{this.props.title}</h1>
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
        </section>;        
    }
} 

export default Section;