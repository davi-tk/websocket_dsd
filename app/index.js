const socket = io('ws://localhost:8080')

socket.on('message', text => {
    const li = document.createElement('li')
    li.innerHTML = text
    document.querySelector('ul').appendChild(li)
})

document.getElementById('btn-enviar-mensagem').onclick = () => {
    input = document.getElementById('input-mensagem')
    const text = input.value
    input.value = ''
    socket.emit('message', text)
} 