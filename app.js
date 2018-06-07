var texto = prompt("Digite uma palavra para criptografar");
var maiuscula;

var palavra = "";
for (i = 0; i < texto.length; i++){
  var letra;
  var codigo;
  //  Transformando letra em UpperCase
  letra = texto[i].toUpperCase();
  // verificando se letra inicial era maiuscula ou minuscula
   if (letra === texto[i]){
   codigo = criptografarMaiuscula(letra);
  }else {
    codigo = criptografarMinuscula(texto[i]);
  }
   palavra = palavra + codigo;
  console.log(palavra);
  
}
  
 

function criptografarMaiuscula(letra){
  var letterAsc;
  var result;
  letterAsc = letra.charCodeAt();
  var encoded;
  encoded = (letterAsc - 65 + 7)%26 + 65;
  var result;
  result = String.fromCharCode(encoded);
  return result;
}




function criptografarMinuscula(letra){
  var letterAsc;
  var result;
  letterAsc = letra.charCodeAt();
  var encoded;
  encoded = (letterAsc - 97 + 7)%26 + 97;
  var result;
  result = String.fromCharCode(encoded);
  return result;
}

