import React from 'react';
import Person from './Person';

const Persons = ({ persons, filter }) => {
	return (
		<div>
			{persons
				.filter((person) => person.name.toUpperCase().includes(filter.toUpperCase()))
				.map((person) => (
					<Person key={person.name} name={person.name} number={person.number} />
				))}
		</div>
	);
};

export default Persons;
