const URL = 'http://empleados-app.herokuapp.com/api/empleado';

export default () => {
	return fetch(URL)
	.then((res)=>{
		Promise.all([res, res.json()])
	})
}

