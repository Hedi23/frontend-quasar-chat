import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

const socket = io("http://localhost:3030", { // eslint-disable-line
  transports: ['websocket']
})

window.feathersClient = feathers() // eslint-disable-line
  .configure(socketio(socket, { timeout: 300000 }))
  .configure(auth({ storage: window.localStorage }))

export default feathersClient; // eslint-disable-line
