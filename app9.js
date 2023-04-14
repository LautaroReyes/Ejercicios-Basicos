let filas = parseInt(prompt("Ingrese el numero de filas"));
let columnas = parseInt(prompt("Ingrese el numero de columnas"));
let multiplicacion = filas * columnas;
for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        document.write(multiplicacion);
        multiplicacion--;
    }
    document.write("<br>")    
}
