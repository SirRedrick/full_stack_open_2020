import React from 'react';
import Person from './Person';

const Persons = ({ persons, filter, handleDelete }) => {
	return (
		<div>
			{persons
				.filter((person) =>
					person.name.toUpperCase().includes(filter.toUpperCase())
				)
				.map((person) => (
					<p key={person.id}>
						<Person
							name={person.name}
							number={person.number}
							onClick={handleDelete}
						/>
						<button type="button" onClick={() => handleDelete(person)}>
							delete
						</button>
					</p>
				))}
		</div>
	);
};

export default Persons;
