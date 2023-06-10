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



// import { useState } from 'react';
// import { Section } from "../Section/Section";
// import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
// import { Statistics } from "../Statistics/Statistics";
// import { Container } from './App.styled';
// import { Notification } from '../Notification';

// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleClick = (name) => {
//     if (name === 'good') setGood(prev => prev + 1);
//     if (name === 'neutral') setNeutral(prev => prev + 1);
//     if (name === 'bad') setBad(prev => prev + 1);
//   };

//   const countTotalFeedback = () => {
//     return (good + neutral + bad);
//   };

//   const countPositiveFeedbackPercentage = (total) => {
//     return (
//       total > 0 ? Math.round((good * 100) / total) : 0
//     );
//   };

//     const total = countTotalFeedback();
//     const positivePercentage = countPositiveFeedbackPercentage(total);
  
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={handleClick}/>
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ?
//             <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
//             : <Notification message='There is no feedback' />
//           }
          
//         </Section>
//       </Container>
//   );
// };