import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

	useEffect(() => {
		personsService.getAll().then((res) => setPersons(res.data));
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (persons.find((person) => person.name === newName))
			return alert(`${newName} is already added to phonebook`);

		personsService
			.create({
				name: newName,
				number: newNumber,
			})
			.then((res) => setPersons(persons.concat(res.data)));

		setNewName('');
		setNewNumber('');
	};

	const handleDelete = (person) => {
		if (!window.confirm(`Delete ${person.name}`)) return;

		personsService.delete(person.id);
		setPersons(persons.filter((p) => p.id !== person.id));
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter
				filter={filter}
				onChange={({ target }) => setFilter(target.value)}
			/>
			<h2>Add a new</h2>
			<PersonForm
				onSubmit={handleSubmit}
				newName={newName}
				onNameChange={({ target }) => setNewName(target.value)}
				newNumber={newNumber}
				onNumberChange={({ target }) => setNewNumber(target.value)}
			/>
			<h2>Numbers</h2>
			<Persons persons={persons} filter={filter} handleDelete={handleDelete} />
		</div>
	);
};

export default App;
