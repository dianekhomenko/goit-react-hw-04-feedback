import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onNeutral: PropTypes.func,
  onBad: PropTypes.func,
};