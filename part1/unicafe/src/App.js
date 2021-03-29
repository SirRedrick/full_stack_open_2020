import React, { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Feedback = ({ onGoodClick, onNeutralClick, onBadClick }) => (
	<div>
		<h1>Give Feedback</h1>
		<Button onClick={onGoodClick} text="Good"></Button>
		<Button onClick={onNeutralClick} text="Neutral"></Button>
		<Button onClick={onBadClick} text="Bad"></Button>
	</div>
);

const Statistic = ({ text, value }) => (
	<tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr>
);

const Statistics = ({ good, neutral, bad }) => {
	const average = (good - bad) / (good + neutral + bad);
	const positive = (good / (good + neutral + bad)) * 100;

	if (good || neutral || bad) {
		return (
			<div>
				<h1>Statistics</h1>
				<table>
					<tbody>
						<Statistic text="good" value={good} />
						<Statistic text="neutral" value={neutral} />
						<Statistic text="bad" value={bad} />
						<Statistic text="avarage" value={average} />
						<Statistic text="positive" value={positive + ' %'} />
					</tbody>
				</table>
			</div>
		);
	}
	return (
		<div>
			<h1>Statistics</h1>
			<p>No feedback given</p>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodClick = () => setGood(good + 1);
	const handleNeutralClick = () => setNeutral(neutral + 1);
	const handleBadClick = () => setBad(bad + 1);

	return (
		<div>
			<Feedback onGoodClick={handleGoodClick} onNeutralClick={handleNeutralClick} onBadClick={handleBadClick} />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
