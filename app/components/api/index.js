const URL = 'http://empleados-app.herokuapp.com/api/empleado';
// const URL = 'https://jsonplaceholder.typicode.com/users';

export default () => {
	return fetch(URL)
	.then(res => Promise.all([res, res.json()]));
}

