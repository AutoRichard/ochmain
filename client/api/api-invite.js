const link = 'http://localhost:8080';
//const link = 'https://ochbackend.herokuapp.com';

const create = (params) => {
    return fetch(link + '/api/invite', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const listInviteByUser = (userId) => {
    return fetch(link + '/api/invite/' + userId, {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

const deleteInvite = (params) => {
    return fetch(link + '/api/deleteinvite', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

const listContact = (params) => {
    return fetch(link + '/api/invitecontact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then((response) => {
        return response.json()
    }).catch((err) => console.log(err))
}

export {
    create, listInviteByUser, listContact, deleteInvite
}