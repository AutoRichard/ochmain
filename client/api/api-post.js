//const link = 'http://localhost:8080';
const link = 'https://ochbackend.herokuapp.com';

const create = (credentials, formData) => {
    return fetch(link + '/api/post', {
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


const listByUser = (userId) => {
    return fetch(link + '/api/post/' + userId, {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

const postComment = (credentials, params) => {
    return fetch(link + '/api/postComment', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(params)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}


const list = () => {
    return fetch(link + '/api/post', {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

export {
    create,
    listByUser,
    postComment,
    list
} 