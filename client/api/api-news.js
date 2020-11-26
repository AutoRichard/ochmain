//const link = 'http://localhost:8080';
const link = 'https://ochbackend.herokuapp.com';


const listById = (id) => {
    return fetch(link + '/api/news/' + id, {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}


const listNews = () => {
    return fetch(link + '/api/news', {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}

export {
    listById,
    listNews,
}  