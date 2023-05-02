import { Container } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <Container>
      <Button onClick={onGood} name="good">
        Good
      </Button>
      <Button onClick={onNeutral} name="neutral">
        Neutral
      </Button>
      <Button onClick={onBad} name="bad">
        Bad
      </Button>
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onMark: PropTypes.func,
};