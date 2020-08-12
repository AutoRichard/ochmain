//const link = 'http://localhost:8080';
const link = 'https://ochbackend.herokuapp.com';

const createLink = (credentials, formData) => {
  return fetch(link + '/api/links', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: formData
  })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
} 

/*const removeLink = (params, credentials) => {
  return fetch(link + '/api/link/' + params.Id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}*/

const checkLink = (params) => {
  return fetch(link + '/api/checkLink', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const updateLinkStatus = (params, credentials, links) => {
  return fetch(link + '/api/link/' + params.linkId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: links
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}




/*const list = () => {
  return fetch(link + '/api/users', {
    method: 'GET',
  }).then(response => {
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
}*/

export {
  createLink,
  checkLink,
  updateLinkStatus
}
