//const link = 'http://localhost:8080';
const link = 'https://ochback.herokuapp.com';

const createNews = (params) => {
    return fetch(link + '/api/newsletter', {
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
    createNews
}