import React from 'react';

import ForecastSummary from './forecast-summary';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          temperature={forecast.temperature}
          icon={forecast.icon}
        />
      ))
  }
  </div>
);

export default ForecastSummaries;
