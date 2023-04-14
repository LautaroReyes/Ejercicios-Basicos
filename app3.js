let num;
let suma = 0;
do {
    num = prompt("Ingresa un numero");
    if(num === null){
      break;
    }
    else if (isNaN(num)) {
      alert("No ingreso un numero. Intentalo de nuevo.");
    } 
    else{
      suma += parseInt(num);
    }
  } while(true);
document.write(suma);
