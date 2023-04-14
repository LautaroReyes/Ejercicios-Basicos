let nota = parseInt(prompt("Ingrese su nota"));
if(nota < 3){
    document.write("Nota muy deficiente");
}
else if(nota >= 3 && nota <= 5){
    document.write("Nota insuficiente");
}
else if(nota >= 5 && nota <= 6){
    document.write("Nota suficiente");
}
else if(nota >= 6 && nota <= 7){
    document.write("Bien");
}
else if(nota >= 7 && nota <= 9){
    document.write("Notable");
}
else if(nota >= 9 && nota <= 10){
    document.write("Sobresaliente");
}
