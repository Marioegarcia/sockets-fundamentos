var socket = io();

socket.on("connect", function () {
  console.log("Conectado en el servidor");
});

//escuchar
socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

//enviar informacion
socket.emit(
  "enviarMensaje",
  {
    usuario: "Mario",
    mensaje: "mensaje",
  },
  function (resp) {
    console.log("respuesta del server: ", resp);
  }
);

//escuchar informacion
socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor: ", mensaje);
});
