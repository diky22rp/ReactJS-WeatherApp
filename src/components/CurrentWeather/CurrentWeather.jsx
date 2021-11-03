import React from 'react';
import PropTypes from 'prop-types';

import { FaMapMarkerAlt } from "react-icons/fa";
import { GiWindSlap } from "react-icons/gi";
import { GiWaterDrop } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";


import styles from './CurrentWeather.module.css';

const onBack = (e)=>{
    e.preventDefault();
    window.location.reload();
};

const CurrentWeather = ({ weekday, date, location, country, temperature, weatherIcon, weatherDescription, weatherBg, humidity, wind }) => (
    <div className={styles.columnMain}>
        <div className={styles.box}>    
            <header className={styles.header}>
                <i onClick={onBack}><BiArrowBack /></i>
                Weather App              
            </header>
            <section className={styles.weatherPart}>
                <img className={styles.imgIcon} width="45" src={weatherIcon} alt="" />
                <div className={styles.location}>
                    <i><FaMapMarkerAlt /></i>
                    <span>{location}, {country}</span>
                </div>
                <div className={styles.weather}>{weatherDescription}</div>
                <div className={styles.temp}>
                    <span className={styles.numb}>{temperature}</span>
                    <span className={styles.deg}>°</span>C
                </div>
                <img className={styles.imgBackground} src={`/assets/backgrounds/${weatherBg}`}></img>
                <div className={styles.bottomDetails}>
                        <div className={styles.column}>
                            <div className={styles.details}>
                                <div>
                                    <span><i><GiWindSlap /></i>{wind}</span>
                                    km/h
                                </div>
                                <p>Wind</p>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.details}>
                                <span><i><GiWaterDrop /></i>{humidity}%</span>
                                <p>Humidity</p>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    </div>
    // <div className="d-flex">
    //     <div className={styles.img}></div>
    //     <div className={styles.gradient}></div>
    //     <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
    //         <div>
    //             <h2 className="font-weight-bold mb-1">{weekday}</h2>
    //             <p className="mb-0">{date}</p>
    //             <p className="d-flex align-items-baseline font-weight-lighter mb-1">
    //                 <img width="10" height="15" src={locationIcon} className="mr-1" alt="location pin icon" />
    //                 <span>{location}</span>
    //             </p>
    //         </div>
    //         <div>
    //             <img width="45" src={weatherIcon} alt="" />
    //             <h2 className="font-weight-bold mb-1">
    //                 <span>{temperature}</span>°C
    //             </h2>
    //             <h5 className="font-weight-lighter">{weatherDescription}</h5>
    //         </div>
    //     </div>
    // </div>
);

CurrentWeather.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
};

export default CurrentWeather;