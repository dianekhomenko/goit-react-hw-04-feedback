import { Container } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <Container>
      <Button onClick={onGood}>Good</Button>
      <Button onClick={onNeutral}>Neutral</Button>
      <Button onClick={onBad}>Bad</Button>
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onNeutral: PropTypes.func,
  onBad: PropTypes.func,
};