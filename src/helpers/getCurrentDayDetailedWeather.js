const currentDayWeather = data => [
    {
        name: 'predictability',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'air pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayWeather;