import { Component } from "react";
import { Container } from "./App.styled";
import { Section } from "components/Section";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Notification } from "components/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }



  handleClick = (name) => {
    this.setState(({ [name]: prev }) => ({
      [name]: prev + 1
    }))
  }


  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () =>
    Math.floor((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {total > 0 ?
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            : <Notification message='There is no feedback' />
          }
          
        </Section>
      </Container>
    );
  }
};