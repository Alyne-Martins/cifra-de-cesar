var text = prompt("Digite uma palavra para criptografar");
if (text == ''){
	alert('Você precisa digitar uma palavra');
	parent.location="javascript:location.reload()";
}else {
  var finalCode = "";
  var letters;
  var code;
  
  for (i = 0; i < text.length; i++){
    
    letters = text[i].toUpperCase();
    
    if (letters === text[i]){
      code = encryptUppercase(letters);
    }else {
      code = encryptLowercase(text[i]);
    }
    finalCode = finalCode + code;
    document.getElementById("message").innerHTML = finalCode;
  }
}  

function encryptUppercase(letra){
  var letterAsc;
  var result;
  var encoded;
  letterAsc = letra.charCodeAt();
  encoded = (letterAsc - 65 + 7)%26 + 65;
  result = String.fromCharCode(encoded);
  return result;
}

function encryptLowercase(letra){
  var letterAsc;
  var result;
  var encoded;
  letterAsc = letra.charCodeAt();
  encoded = (letterAsc - 97 + 7)%26 + 97;
  result = String.fromCharCode(encoded);
  return result;
}

function decrypt(){
  var finalDecode = "";
  var decode;
  
  for (i = 0; i < finalCode.length; i++){
    
    letters = finalCode[i].toUpperCase();
  
    if (letters === finalCode[i]){
      decode = decryptUppercase(letters);
    }else {
      decode = decryptLowercase(finalCode[i]);
    }
    finalDecode = finalDecode + decode;
  }
  alert(finalDecode);

  function decryptUppercase(letra){
    var letterAsc;
    var result;
	var encoded;
    letterAsc = letra.charCodeAt();
    encoded = (letterAsc - 20)%26 + 65;
    result = String.fromCharCode(encoded);
    return result;
  }

  function decryptLowercase(letra){
    var letterAsc;
    var result;
    var encoded;
    letterAsc = letra.charCodeAt();
    encoded = (letterAsc - 26)%26 + 97;
    result = String.fromCharCode(encoded);
    return result;
  }
}
 
