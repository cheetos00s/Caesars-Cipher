let abecedario = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z"];

rot13("SERR PBQR PNZC");
rot13("SERR YBIR?");
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

function rot13(str) {
  let letra;
  let posicion;
  let result = "";
  for(let i=0; i < str.length; i++){
    letra = str[i];
    posicion = abecedario.indexOf(letra) + 13;
    if(posicion > 25){
      posicion -= 26;
    }
    if(letra == " "){
      result += " ";
    }else if(!(/[a-zA-Z]/.test(letra))){
      result += letra;
    }else{
      result += abecedario[posicion];
    }
    
  }
  console.log(result);
  //return result;
}