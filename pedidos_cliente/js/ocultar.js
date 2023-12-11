let contador = 0;
function mostrarCompra (){
    
    contador += 1;
    if((contador%2)!=0){
    document.getElementById("carrito").style.display = "inline-block";
    document.getElementById("letras").style.display="block";
    document.getElementById("lista-carrito").style.marginLeft="-30px";
    }
    if((contador%2)==0){
        document.getElementById("carrito").style.display="none";
        document.getElementById('header').style.width="100%";
    }
    console.log(contador);
}

function ocultalcabecera(){
    document.getElementById("carrito").style.display="none";
    // document.getElementById('header').style.width="100%";
}
function relizarcompra1(){
    document.getElementById('modal').style.display="block"
}