import { Alert } from 'react-native';
const URL = 'https://empleados-app.herokuapp.com/api/empleado';
// const URL = 'https://jsonplaceholder.typicode.com/users';

export default () => {
	return fetch(URL)
	.then(res => Promise.all([res, res.json()]));
}

export const newEmployee = (req)=>{
  console.log('desde el api:', req)
	return fetch(URL, {
		method: 'POST',
    headers: {
       'Accept': 'application/x-www-form-urlencoded',
       'Content-Type': 'application/x-www-form-urlencoded',
     },
		body: JSON.stringify(req)
	})
  .then((response) => {
    console.log(response);
    return response.json(response)
  })
  .then((resJson)=>{
    console.log(resJson);
  })
  .catch((err)=>{ console.log(err) })
}
