import React from 'react';
import Weather from './Weather';

const Country = ({ country, weather }) => {
	return (
		<div>
			<h1>{country.name}</h1>
			<div>capital {country.capital}</div>
			<div>population {country.population}</div>
			<h2>Languages</h2>
			<ul>
				{country.languages.map((language) => (
					<li key={language.name}>{language.name}</li>
				))}
			</ul>
			<img src={country.flag} width="100px" alt={`flag of ${country.name}`} />
			{weather === null ? <div>'Loading...'</div> : <Weather weather={weather} capital={country.capital} />}
		</div>
	);
};

export default Country;
