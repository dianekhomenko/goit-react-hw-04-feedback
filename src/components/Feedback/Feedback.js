import { useMemo, useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Title/Title';
import { Container } from './Feedback.styled';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = useMemo(() => {
    const total = good + neutral + bad;
    const positive = good + neutral;
    return Math.floor((positive * 100) / total);
  }, [good, neutral, bad]); ;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onGood={() => setGood(good + 1)}
          onNeutral={() => setNeutral(neutral + 1)}
          onBad={() => setBad(bad + 1)}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
};
