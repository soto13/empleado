import { Alert } from 'react-native';
const URL = 'https://empleados-app.herokuapp.com/api/empleado';
// const URL = 'https://jsonplaceholder.typicode.com/users';

export default () => {
	return fetch(URL)
	.then(res => Promise.all([res, res.json()]));
}

export const newEmployee = (req)=>{
  console.log('desde el api:', JSON.stringify(req[0]))
	return fetch(URL, {
		method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
		body: JSON.stringify(req[0])
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

export const updateEmployee = (req)=>{
   URL = URL + '/' + req[0]._id;
   return fetch(URL, {
     method: 'PUT',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(req[0])
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

export const deleteEmloyee = (req)=>{
  URL = URL + '/' + req[0]._id;
  return fetch(URL, {
    method: 'DELETE',
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
    }
  })
  .then((response) => {
    console.log(response);
    return response.json({ message: 'se elimino con exito' })
  })
  .catch((err)=>{ console.log(err) })
}

