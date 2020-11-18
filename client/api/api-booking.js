//const link = 'http://localhost:8080';
const link = 'https://ochbackend.herokuapp.com';

const createBooking = (credentials, formData) => {
    return fetch(link + '/api/booking', {
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

const checkBooking = (params) => {
    return fetch(link + '/api/checkBooking', {
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


const listBooking = (params) => {
    return fetch(link + '/api/listBooking', {
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



export {
    createBooking,
    checkBooking,
    listBooking
}