import React, {Component} from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

class Section extends Component {

    static defaultProps = {
        title: "",
    }

    // static propTypes = {

    // }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    handleClickButton = (e) => {
        const target = e.currentTarget.textContent;
        this.setState((state) => {
            for (const key in state) {
                if (key === target) {
                    return state[key] += 1;                    
                }                 
            }
        })
    }

    render() {
        return <>
            <h1>{this.props.title}</h1>
            <FeedbackOptions onClickButton={this.handleClickButton} />
            <Statistics state={this.state} />
        </>;        
    }
} 

export default Section;