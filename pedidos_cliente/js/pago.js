
// DATOS DE COMPRA
let montoPagar = document.getElementById('total').value;

let nroTarjet = document.getElementById('nroCuenta').value;
let nroFVen = document.getElementById('#nroFVen');
let nroCVC = document.getElementById('#nroCVC');



console.log(nroTarjet);

function abreTarjeta(){
    document.getElementById('pagoTarjeta').style.display='block';
    document.getElementById('pagoEfectivo').style.display='none';
}

function abreEfectivo(){    
    document.getElementById('pagoEfectivo').style.display='block';
    document.getElementById('pagoTarjeta').style.display='none';
    document.getElementById('montoCompleto').value = montoPagar;
}

function mostrarDatos(){
    console.log(nroTarjet);
    
}

function soloNumeros(e){

	var key = window.Event ? e.which : e.keyCode

	return (key >= 48 && key <= 57)

}





