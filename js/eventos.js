var teclas = {
	arriba : 38,
	abajo : 40,
	izquierda : 37,
	derecha: 39
};

document.addEventListener("keyup", dibujarTeclado);
var canvas = document.getElementById("areaDibujo");
var papel = canvas.getContext("2d");
var x = 150;
var y = 150;

dibujarLinas("#DF01A5",149,149,151,151,papel);

function dibujarLinas(color,xinicial,yinicial,xfinal,yfinal,lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
function dibujarTeclado(evento){
	var colorcito = "#DF01A5";
	var movimiento = 10;
	switch(evento.keyCode){
		
		case teclas.arriba:
			dibujarLinas(colorcito,x,y,x,y - movimiento,papel);
			y = y - movimiento;
		break;
		case teclas.abajo:
			dibujarLinas(colorcito,x,y,x,y + movimiento,papel);
			y = y + movimiento;
		break;
		break;
		case teclas.izquierda:
			dibujarLinas(colorcito,x,y,x - movimiento,y,papel);
			x = x - movimiento;
		break;
		break;
		case teclas.derecha:
			dibujarLinas(colorcito,x,y,x + movimiento,y,papel);
			x = x + movimiento;
		break;
		default:
		console.log("otra tecla");
		break;
	}
}