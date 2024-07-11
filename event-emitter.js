const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`welcome ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
  console.log('another super')
})

customEmitter.emit('response', 'Tom', 33)