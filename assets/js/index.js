function attR() {
var data = new Date();
var hora = data.getHours();
var minutos = data.getMinutes();
var segundos = data.getSeconds();
var hor = document.getElementById("hor");
var min = document.getElementById("min");
var seg = document.getElementById("seg");
if (hora < 10) hora = "0" + hora;
if (minutos < 10) minutos = "0" + minutos;
if (segundos < 10) segundos = "0" + segundos;
hor.innerHTML = `${hora}`;
min.innerHTML = `${minutos}`;
seg.innerHTML = `${segundos}`;
}
attR()
setInterval(attR, 1000);