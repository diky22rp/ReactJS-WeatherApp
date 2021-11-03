import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import CurrentWeather from '../CurrentWeather';
import CurrentWeatherDetail from '../CurrentWeatherDetail';
import UpcomingDaysWeather from '../UpcomingDaysWeather';

import styles from './Forecast.module.css';

const Forecast = ({ forecast }) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={6}>
                <div className={styles.card}>
                    <CurrentWeather {...forecast.currentDay} />
                </div>
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column justify-content-between">
                <div className={styles.cardOther}>
                        <CurrentWeatherDetail forecast={forecast.currentDayDetails} />
                        <UpcomingDaysWeather days={forecast.upcomingDays} /> 
                </div>                    
            </Col>
        </Row>
    </Container>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetails: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
};

export default Forecast;