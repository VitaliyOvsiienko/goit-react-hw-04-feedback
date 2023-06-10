// import { Component } from "react";
// import { Container } from "./App.styled";
// import { Section } from "components/Section";
// import { FeedbackOptions } from "components/FeedbackOptions";
// import { Statistics } from "components/Statistics";
// import { Notification } from "components/Notification";


// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }



//   handleClick = (name) => {
//     this.setState(({ [name]: prev }) => ({
//       [name]: prev + 1
//     }))
//   }


//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = () =>
//     Math.floor((this.state.good / this.countTotalFeedback()) * 100);

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback()
//     const positivePercentage = this.countPositiveFeedbackPercentage(total);

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ?
//             <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
//             : <Notification message='There is no feedback' />
//           }
          
//         </Section>
//       </Container>
//     );
//   }
// };
import { useState } from 'react';
import { Container } from "./App.styled";
import { Section } from "components/Section";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Notification } from "components/Notification";

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleClick = (name) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.floor((feedback.good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
