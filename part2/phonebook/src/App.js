import React, { useState } from 'react';

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
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				filter shown with: <input value={filter} onChange={({ target }) => setFilter(target.value)} />
			</div>
			<h2>Add a new</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name: <input value={newName} onChange={({ target }) => setNewName(target.value)} />
				</div>
				<div>
					number: <input value={newNumber} onChange={({ target }) => setNewNumber(target.value)} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons
				.filter((person) => person.name.toUpperCase().includes(filter.toUpperCase()))
				.map((person) => (
					<p key={person.name}>
						{person.name} {person.number}
					</p>
				))}
		</div>
	);
};

export default App;
