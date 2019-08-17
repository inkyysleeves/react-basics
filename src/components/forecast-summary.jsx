import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <h1>
    <span className="forecast-summary__date">{props.date}</span>
    <span className="forecast-summary__temperature">{props.temperature}</span>
    <span className="forecast-summary__description">{props.description}</span>
    <span className="forecast-summary__icon">{props.icon}</span>
  </h1>
);


ForecastSummary.propTypes = {
  date: PropTypes.string,
  temperature: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

export default ForecastSummary;
