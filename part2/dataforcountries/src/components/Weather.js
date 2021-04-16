import React from 'react';

const Weather = ({ weather, capital }) => {
	console.log(weather.current);
	return (
		<div>
			<h2>Weather in {capital}</h2>
			<p>temperature {weather.current.temperature}</p>
			<img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} />
			<p>
				wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}
			</p>
		</div>
	);
};

export default Weather;
