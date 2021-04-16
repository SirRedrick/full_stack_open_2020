import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import Filter from './components/Filter';
import List from './components/List';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState('');
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((res) => setCountries(res.data));
	}, []);

	const handleFilter = (event) => {
		setFilter(event.target.value);
		setFiltered(countries.filter((country) => country.name.toUpperCase().includes(filter.toUpperCase())));
	};

	if (filtered.length < 10 && filter.length >= 1) {
		return (
			<div>
				<Filter value={filter} onChange={handleFilter} />
				{filtered.length === 1 ? <Country country={filtered[0]} /> : <List filtered={filtered} />}
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
