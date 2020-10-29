//const link = 'http://localhost:8080';
const link = 'https://ochbackend.herokuapp.com';



const subscription = (params, credentials, token) => {
    return fetch(link + '/api/subscription', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({ id: token, user: params.userId })
    })
        .then((response) => {
            return response.json()
        }).catch((err) => console.log(err))
}


const UserAndSubscription = (params, credentials) => {
    return fetch(link + '/api/subsriber', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({ user: params.userId })
    })
        .then((response) => {
            return response.json()
        }).catch((err) => console.log(err))
}

const plan = (credentials) => {
    return fetch(link + '/api/plan', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
    })
        .then((response) => {
            return response.json()
        }).catch((err) => console.log(err))
}


const ChangeSubscription = (params, credentials, plan_id) => {
    return fetch(link + '/api/subuser', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({ user: params.userId, plan_id: plan_id })
    })
        .then((response) => {
            return response.json()
        }).catch((err) => console.log(err))
}


const Payment = (params, credentials) => {
    return fetch(link + '/api/payment', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({ user: params.userId })
    })
        .then((response) => {
            return response.json()
        }).catch((err) => console.log(err))
}





export {
    subscription,
    UserAndSubscription,
    plan,
    ChangeSubscription,
    Payment
}