import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <div>
        <span>Good:</span>
        <span>{good}</span>
      </div>
      <div>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </div>
      <div>
        <span>Bad:</span>
        <span>{bad}</span>
      </div>
      <div>
        <span>Total:</span>
        <span>{total}</span>
      </div>
      <div>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};