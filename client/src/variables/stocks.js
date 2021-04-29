fetch('https://regres.in/api/users'), {
  method: 'GET',
}
   .then(res => {
     return res.json()
     })
   .then(data => console.log(data))
   .catch(error => console.log('ERROR'))
   


