import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const personsService = {
	getAll() {
		return axios.get(baseUrl);
	},
	create(newPerson) {
		return axios.post(baseUrl, newPerson);
	},
	delete(id) {
		return axios.delete(`${baseUrl}/${id}`);
	},
};

export default personsService;
