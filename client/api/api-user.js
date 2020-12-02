//const link = 'http://localhost:8080';
const link = 'https://ochback.herokuapp.com';

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

const listUser = () => {
  return fetch(link + '/api/users', {
    method: 'GET',
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const read = (params) => {
  return fetch(link + '/api/users/' + params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const image = (params, credentials, formData) => {
  return fetch(link + '/api/image/' + params.userId, {
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

const payout = (params, credentials, order, token) => {
  return fetch(link + '/api/credit', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({ amount: order.amount, credit: order.credit, id: token, user: params.userId })
  })
    .then((response) => {
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


const follow = (params, credentials, followId) => {
  return fetch(link + '/api/userfollow/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({ userId: params.userId, followId: followId })
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const unfollow = (params, credentials, unfollowId) => {
  return fetch(link + '/api/userunfollow/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({ userId: params.userId, unfollowId: unfollowId })
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const findFollower = (params, credentials) => {
  return fetch(link + '/api/listuser/' + params.userId, {
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


export {
  create,
  list,
  read,
  update,
  remove,
  password,
  image,
  payout,
  listUser,
  follow,
  unfollow,
  findFollower
}
