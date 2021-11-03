import React from 'react';
import PropTypes from 'prop-types';

import CurrentWeatherDetailtem from '../CurrentWeatherDetailtem';

const CurrentWeatherDetail = ({ forecast }) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {forecast.map(item => (
                <CurrentWeatherDetailtem {...item} key={item.name} />
            ))}
        </div>
    </div>
);

CurrentWeatherDetail.propTypes = {
    forecast: PropTypes.array,
};

export default CurrentWeatherDetail;