//const link = 'http://localhost:8080';
const link = 'https://ochbackend.herokuapp.com';



const sendMessage = (chatData) => {
    return fetch(link + '/api/message', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chatData)
    })
        .then((response) => {
            return response.json()
        }).catch((err) => console.log(err))
}


export {
    sendMessage
}