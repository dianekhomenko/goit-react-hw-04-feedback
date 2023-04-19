import { Container } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onMark }) => {
  return (
    <Container>
      <Button onClick={onMark} name="good">
        Good
      </Button>
      <Button onClick={onMark} name="neutral">
        Neutral
      </Button>
      <Button onClick={onMark} name="bad">
        Bad
      </Button>
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onMark: PropTypes.func,
};