import React from 'react';

const List = ({ filtered }) => {
	return (
		<div>
			{filtered.map((country) => (
				<div key={country.numericCode}>{country.name}</div>
			))}
		</div>
	);
};

export default List;
