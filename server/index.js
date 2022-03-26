const http = require('http').createServer()

const io = require('socket.io')(http, {
    cors: {origin: '*'}
})

io.on('connection', (socket) => {
    console.log('usuário conectado')

    socket.on('message', message => {
        console.log(message)
        io.emit('message', `${socket.id.substr(0,2)} -> ${message}`)
    })
})

http.listen(8080, () => console.log('escutando em http://localhost:8080'))