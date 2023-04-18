import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Title/Title';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positive = this.state.good + this.state.neutral;
    return Math.floor((positive * 100) / total);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.onGood}
            onNeutral={this.onNeutral}
            onBad={this.onBad}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
