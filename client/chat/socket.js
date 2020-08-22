import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8080');

function showMessage(cb, conversation) {
  socket.emit('show_message', conversation)
  socket.on('messages', cb)
}

function sendMessage(conversation) {
  socket.emit('send_message', conversation)
}

export {
  showMessage,
  sendMessage
}