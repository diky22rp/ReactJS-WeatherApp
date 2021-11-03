import { useState } from "react"
import axios from 'axios';

import getCurrentDayWeather from "../helpers/getCurrentDayWeather";
import getCurrentDayDetailedWeather from "../helpers/getCurrentDayDetailedWeather";
import getUpcomingDaysWeather from "../helpers/getUpcomingDaysWeather";

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {

    const [forecast, setForecast] = useState(null);
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const getWoeid = async (location) => {
        //get woeid
        var arrayLatLong = location.split(',');
        console.log(arrayLatLong.length)
        if (arrayLatLong.length === 2) {

            const { data } = await axios(`${REQUEST_URL}/search`, { params: { lattlong: arrayLatLong[0] + ',' + arrayLatLong[1] } });
            if (!data || data.length === 0) {
                setError("City name not found!");
                setLoading(false);
                return;
            }
            return data[0];

        } else {
            const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
            if (!data || data.length === 0) {
                setError("City name not found!");
                setLoading(false);
                return;
            }
            return data[0];

        }
    }

    const getForecastData = async (woeid) => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);
        if (!data || data.length === 0) {
            setError("Something went wrong");
            setLoading(false);
            return;
        }
        return data;
    }

    const sendForecastData = (data) => {

        const currentDay = getCurrentDayWeather(data.consolidated_weather[0], data.title, data.parent.title)
        const currentDayDetails = getCurrentDayDetailedWeather(data.consolidated_weather[0])
        const upcomingDays = getUpcomingDaysWeather(data.consolidated_weather)

        setForecast({ currentDay, currentDayDetails, upcomingDays })
        setLoading(false)
    }

    //call the api
    const submitRequest = async location => {
        setLoading(true);
        setError(false);

        const response = await getWoeid(location);
        if (!response?.woeid) return;
        const data = await getForecastData(response.woeid);
        if (!data) return;
        console.log(data);

        sendForecastData(data);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    }


}

export default useForecast