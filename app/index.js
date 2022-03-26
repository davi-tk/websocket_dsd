const socket = io('ws://localhost:8080')

socket.on('message', text => {
    const li = document.createElement('li')
    li.innerHTML = text
    document.querySelector('ul').appendChild(li)
})

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value
    socket.emit('message', text)
} 