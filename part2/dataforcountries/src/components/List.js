import React from 'react';

const List = ({ filtered, onClick }) => {
	return (
		<div>
			{filtered.map((country) => (
				<div key={country.numericCode}>
					{country.name}
					<button onClick={() => onClick(country)}>show</button>
				</div>
			))}
		</div>
	);
};

export default List;
