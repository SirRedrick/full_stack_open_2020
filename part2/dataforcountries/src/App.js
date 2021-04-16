import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import Filter from './components/Filter';
import List from './components/List';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState('');
	const [filtered, setFiltered] = useState([]);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((res) => setCountries(res.data));
	}, []);

	useEffect(() => {
		if (filtered.length === 1) {
			axios
				.get(
					`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${filtered[0].capital}`
				)
				.then((res) => setWeather(res.data));
		}
	}, [filtered]);

	const handleFilter = (event) => {
		setFilter(event.target.value);
		setFiltered(countries.filter((country) => country.name.toUpperCase().includes(filter.toUpperCase())));
	};

	const handleClick = (country) => {
		setFiltered([country]);
	};

	if (filtered.length < 10 && filter.length >= 1) {
		return (
			<div>
				<Filter value={filter} onChange={handleFilter} />
				{filtered.length === 1 ? (
					<Country country={filtered[0]} weather={weather} />
				) : (
					<List filtered={filtered} onClick={handleClick} />
				)}
			</div>
		);
	}
	return (
		<div>
			<Filter value={filter} onChange={handleFilter} />
			{filtered.length === 0 ? null : <div>Too many matches, specify another filter</div>}
		</div>
	);
};

export default App;
