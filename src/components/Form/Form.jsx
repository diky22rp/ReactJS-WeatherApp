import React,{useState} from 'react';
import PropTypes from 'prop-types';


import styles from './Form.module.css';

const Form = ({submitSearch}) => {
    const[location, setLocation] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!location || location === '') return;
        submitSearch(location)
    };

    const onGetLocation = (e) => {
        e.preventDefault();
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                submitSearch(`${position.coords.latitude},${position.coords.longitude}`)
              });
          } else {
             alert("Not Available");
          }
          
       
    }
    
    return (
        <div>
        <form onSubmit={onSubmit}>
            <header className={styles.header}>
            Weather App              
            </header>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Enter city name"
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            {/* <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button> */}
            <div className={styles.separator}></div>

        </form>
        <button className={styles.button} onClick={onGetLocation}>Get Device Location</button>


        </div>
    );
};

Form.propTypes = {
    submitSearch : PropTypes.func.isRequired,
};

export default Form;