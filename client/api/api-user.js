//const link = 'http://localhost:4000';
const link = 'https://ochbackend.herokuapp.com';

const create = (user) => {
  return fetch(link + '/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}

const list = () => {
  return fetch(link + '/api/users', {
    method: 'GET',
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const read = (params, credentials) => {
  return fetch(link + '/api/users/' + params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const update = (params, credentials, user) => {
  return fetch(link + '/api/users/' + params.userId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify(user)
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const remove = (params, credentials) => {
  return fetch(link + '/api/users/' + params.userId, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}


const password = (params, credentials, user) => {
  return fetch(link + '/api/password/' + params.userId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify(user)
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

export {
  create,
  list,
  read,
  update,
  remove,
  password
}
