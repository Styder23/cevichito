
function openModal(){
    document.getElementById('main').style.display='none';
    document.getElementById('modal').style.display='block';
}

function closeModal(){
    document.getElementById('modal').style.display='none';
    document.getElementById('main').style.display='flex';
}


function tarjeta(){
    let nroTarjet = document.getElementById('nroCuenta').value;
    let feTarjet = document.getElementById('nroFVen').value;
    let ccv = document.getElementById('nroCVC').value;
    
    if(nroTarjet=='' || feTarjet=='' || ccv=='' ){
        alert("Please llene todos los campos")
    }else {
        location.href="../pedido_cliente/php/acceso.php?TipoPago=2"
    }


}


function efectivo(){
   
    let montoPagar = document.getElementById('montoCompleto').value;

    if(montoPagar==''){
        alert("Please llene todos los campos")
    }else {
         location.href="../pedido_cliente/php/acceso.php?TipoPago=1"
    }
}