function pedirPalabras (){
    const palabras = [];
let palabra;

do{
palabra = prompt("Introduce una palabra");
if (palabra !== null && palabra !== "") {
        palabras.push(palabra);
    }

} while(palabra !== null && palabra !== "");

return palabras;
}