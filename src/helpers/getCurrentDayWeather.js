import moment from 'moment';

const getCurrentDayWeather = (data, title, country) => ({
    weekday: moment(data.applicable_date).format('dddd'),
    date: moment(data.applicable_date).format('MMMM Do'),
    location: title,
    country: country,
    temperature: Math.round(data.the_temp),
    weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    weatherDescription: data.weather_state_name,
    weatherBg: `${data.weather_state_abbr}.svg`,
    humidity: Math.round(data.humidity),
    wind: Math.round(data.wind_speed),

});

export default getCurrentDayWeather;