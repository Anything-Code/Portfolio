import http from 'http'
import socketIO from 'socket.io'
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'

export default function () {
  this.nuxt.hook('render:before', renderer => {
    const server = http.createServer(this.nuxt.renderer.app)
    const io = socketIO(server, {
      pingInterval: 1000,
      pingTimeout: 1000,
    })

    // overwrite nuxt.server.listen()
    this.nuxt.server.listen = (port, host) => new Promise(resolve => server.listen(port || 3000, host || 'localhost', resolve))
    // close this server on 'close' event
    this.nuxt.hook('close', () => new Promise(server.close))

    // Add socket.io events
    const RandomUserName = {
      dictionaries: [adjectives, colors, animals],
      separator: '-',
      length: 3,
    };

    const Messages = new Array
    let clients = new Object

    io.on('connection', socket => {
      clients[socket.id] = uniqueNamesGenerator(RandomUserName)

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
    })

    function addMessage (message) {
      if (Messages.length >= 50) {
        Messages.shift()
        Messages.push(message)
      } else {
        Messages.push(message)
      }
    }
  })
}
