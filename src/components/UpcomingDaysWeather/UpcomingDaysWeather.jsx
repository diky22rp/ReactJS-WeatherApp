import React from 'react';
import PropTypes from 'prop-types';

import UpcomingDaysWeatherItem from '../UpcomingDaysWeatherItem';

import styles from './UpcomingDaysWeather.module.css';

const UpcomingDaysWeather = ({ days }) => (
    <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
        {days.map(day => (
            <UpcomingDaysWeatherItem {...day} key={day.weekday} />
        ))}
    </ul>
);

UpcomingDaysWeather.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDaysWeather;