import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastSummary from './forecast-summary';

const App = props => {
  return (
    <div className="forecast">
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />
      <ForecastSummary
        date={props.date}
        temperature={props.temperature}
        description={props.description}
        icon={props.icon}
      />
      <ForecastSummaries forecasts={props.forecasts} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
