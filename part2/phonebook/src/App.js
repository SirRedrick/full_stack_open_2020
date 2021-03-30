import React, { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		if (persons.find((person) => person.name === newName)) return alert(`${newName} is already added to phonebook`);

		setPersons(persons.concat({ name: newName, number: newNumber }));
		setNewName('');
		setNewNumber('');
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filter={filter} onChange={({ target }) => setFilter(target.value)} />
			<h2>Add a new</h2>
			<PersonForm
				onSubmit={handleSubmit}
				newName={newName}
				onNameChange={({ target }) => setNewName(target.value)}
				newNumber={newNumber}
				onNumberChange={({ target }) => setNewNumber(target.value)}
			/>
			<h2>Numbers</h2>
			<Persons persons={persons} filter={filter} />
		</div>
	);
};

export default App;
