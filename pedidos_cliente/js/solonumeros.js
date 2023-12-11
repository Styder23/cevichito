function solonumeros(e){
 key=e.keycode || e.which;
 teclado=String.fromCharCode(key);
 numero="0123456789";
 especiales="8-37-38-46";
 teclasespeciales=false;

  for(var i in especiales){
      if(key==especiales[i]){
          teclasespeciales=true;
      }
  }
  if(numero.indexOf(teclado)==-1 && !teclasespeciales){
      return false;
  }
    var myString = teclado;
    teclado
    var output = [];
    var teclado = 4;
    var i = 0;

while(i < myString.length){
    console.log(i);
    var initIndex = i;
    var endIndex = i + numero;
    output.push(myString.substring(initIndex, endIndex));
    i = endIndex;
}
}

