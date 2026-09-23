var nota = 5;
const salida4 = document.getElementById('salida4');


if(nota >= 9){
    salida4.textContent = "Sobresaliente, felicidades";
} else if (nota >= 7 || nota <= 8 ) {
salida4.textContent = "Notable";
} else if (nota >= 5 || nota <= 6){
    salida4.textContent = "Aprobado";
} else {
    salida4.textContent = "Suspenso";
};




