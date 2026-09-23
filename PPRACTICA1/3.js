var mensaje = "Hola";
const salida3 = document.getElementById("salida3");

if (true) {
    let mensaje = "Adiós";
    salida3.textContent = `Dentro del if: ${mensaje}`;
}

salida3.textContent += ` | Fuera del if: ${mensaje}`;


/* Con ambos en let el resultado no cambia 
 con var el resultado de ambas variables es negativo, por lo tanto "Adiós" */

 