//const link = 'http://localhost:8080';
const link = 'https://ochback.herokuapp.com';



const update = (credentials, formData, id) => {
    return fetch(link + '/api/instructor/' + id, {
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

const listById = (id) => {
    return fetch(link + '/api/instructor/' + id, {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

const listInstructor = () => {
    return fetch(link + '/api/instructor', {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

const bookEvent = (params) => {
    return fetch(link + '/api/bookevent', {
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

const findEvent = (params) => {
    return fetch(link + '/api/findevent', {
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
    listById,
    listInstructor,
    update,
    bookEvent,
    findEvent
} 