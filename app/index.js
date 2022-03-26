const socket = io('ws://localhost:8080')

socket.on('message', text => {
    const li = document.createElement('li')
    li.innerHTML = text
    document.querySelector('ul').appendChild(li)
})

document.querySelector('.btn-nome').onclick = () => {
    
    document.querySelector('.login').style.display = 'none'
    const nome = document.querySelector('.input-nome').value
    console.log(`nome = ${nome}`)
    socket.emit('name', nome)

}

document.getElementById('btn-enviar-mensagem').onclick = () => {
    input = document.getElementById('input-mensagem')
    const text = input.value
    input.value = ''
    socket.emit('message', text)
}
