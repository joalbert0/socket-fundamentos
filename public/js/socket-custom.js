var socket = io();

socket.on('connect', function() {
    console.log(`Conectando al servidor`);
});
//on escuchar , emit emitir
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Eschuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});