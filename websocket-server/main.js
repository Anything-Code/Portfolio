const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

const app = express()
const server = http.createServer(app)
const io = socketIO(server, {
  pingInterval: 1000,
  pingTimeout: 1000,
})

app.get('/', (req, res) => {
  res.send('Test');
});

server.listen(80);

const randomUserName = {
  dictionaries: [adjectives, colors, animals],
  separator: '-',
  length: 3,
};

const Messages = new Array
let clients = new Object

io.on('connection', socket => {
  clients[socket.id] = uniqueNamesGenerator(randomUserName)

  io.emit('clients-changed', clients)

  socket.on('last-messages', response => {
    response({
      clients,
      userName: clients[socket.id],
      messages: Messages.slice(-50)
    })
  })

  socket.on('new-message', message => {
    const Message = {
      date: new Date,
      text: message.text,
      userName: message.userName
    }
    addMessage(Message)
    io.emit('new-message', Message)
  })

  socket.on('disconnect', () => {
    delete clients[socket.id]
    io.emit('clients-changed', clients)
  })
});

const addMessage = message => {
  if (Messages.length >= 50) {
    Messages.shift()
    Messages.push(message)
  } else {
    Messages.push(message)
  }
}
