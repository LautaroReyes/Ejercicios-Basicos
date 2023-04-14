let resto = 0;

do{
    let numero = parseInt(prompt("Ingrese su dni"));
    if (isNaN(numero)){
        alert("No ingreso un numero. Intentalo de nuevo.");
    } 
    else if(numero >= 0 && numero <= 99999999){
        resto = numero % 23;
    }
    switch(resto){
        case 0:
            document.write("Letra T");
        break;
        case 1:
            document.write("Letra R");
        break;
        case 2:
            document.write("Letra W");
        break;
        case 3:
            document.write("Letra A");
        break;
        case 4:
            document.write("Letra G");
        break;
        case 5:
            document.write("Letra M");
        break;
        case 6:
            document.write("Letra Y");
        break;
        case 7:
            document.write("Letra F");
        break;
        case 8:
            document.write("Letra P");
        break;
        case 9:
            document.write("Letra D");
        break;
        case 10:
            document.write("Letra X");
        break;
        case 11:
            document.write("Letra B");
        break;
        case 12:
            document.write("Letra N");
        break;
        case 13:
            document.write("Letra J");
        break;
        case 14:
            document.write("Letra Z");
        break;
        case 15:
            document.write("Letra S");
        break;
        case 16:
            document.write("Letra Q");
        break;
        case 17:
            document.write("Letra V");
        break;
        case 18:
            document.write("Letra H");
        break;
        case 19:
            document.write("Letra L");
        break;
        case 20:
            document.write("Letra C");
        break;
        case 21:
            document.write("Letra K");
        break;
        case 22:
            document.write("Letra E");
        break;
    }
}while(numero !== null);
