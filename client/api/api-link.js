//const link = 'http://localhost:8080';
const link = 'https://ochback.herokuapp.com';

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

const updateLinkAudio = (credentials, linkData) => {
  return fetch(link + '/api/linkAudio', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify(linkData)
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const deleteLinkAudio = (credentials, linkData) => {
  return fetch(link + '/api/linkAudio', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify(linkData)
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}


const updateLinkVideo = (credentials, linkData) => {
  return fetch(link + '/api/linkVideo', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: linkData
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const deleteLinkVideo = (credentials, linkData) => {
  return fetch(link + '/api/linkVideo', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify(linkData)
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}



export {
  createLink,
  checkLink,
  updateLinkStatus,
  updateLinkAudio,
  deleteLinkAudio,
  updateLinkVideo,
  deleteLinkVideo
}
