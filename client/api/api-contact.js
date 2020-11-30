//const link = 'http://localhost:8080';
const link = 'https://ochback.herokuapp.com';

const create = (params) => {
    return fetch(link + '/api/contact', {
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
    create
}