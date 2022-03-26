const http = require('http').createServer()

const io = require('socket.io')(http, {
    cors: {origin: '*'}
})

const nomes = {}

io.on('connection', (socket) => {
    console.log('usuário conectado')

    socket.on('message', message => {
        console.log(message)
        io.emit('message', `${nomes[socket.id.substr(0,7)]} -> ${message}`)
    })

    socket.on('name', nome => {
        console.log(nome)
        nomes[socket.id.substr(0,7)] = nome
    })
})



http.listen(8080, () => console.log('escutando em http://localhost:8080'))