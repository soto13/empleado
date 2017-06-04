import { Alert } from 'react-native';
const URL = 'http://empleados-app.herokuapp.com/api/empleado';
// const URL = 'https://jsonplaceholder.typicode.com/users';

export default () => {
	return fetch(URL)
	.then(res => Promise.all([res, res.json()]));
}

export const newEmployee = (req)=>{
	return fetch(URL, {
		method: 'POST',
		body: JSON.stringify({
			firstname: req.firstname,
			lastname: req.lastname,
			photo: req.photo,
			longitude: req.longitude,
			latitude: req.latitude
		})
	}).then((employee) => { Alert.alert(JSON.stringify(employee)); return employee.json(employee) })
	.done();
}
