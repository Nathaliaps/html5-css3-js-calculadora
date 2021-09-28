const displayValorAnterior= document.getElementById('valor-anterior');
const displayValorActual= document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display (displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
 boton.addEventListener('click', () =>  display.agregarNumero(boton.innerHTML));

});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click',() => display.computar(boton.value) )

});
 
alert( '¡Te damos la bienvenida a tu calculadora virtual!')
var nombre = prompt ('Ingrese su nombre aquí para continuar: ');
document.write('¡Gracias por preferirnos!'+ nombre) 
