var socket = io();
// ON = escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Mauricio',
    mensaje: 'Hola Mundo'
}, function() {
    console.log('Se disparó el callback');
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});