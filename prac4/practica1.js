const palabras = pedirPalabras();


const conjuntoPalabras = new Set(palabras);
const palabrasSinRepetir = [...conjuntoPalabras];
palabrasSinRepetir.sort((a, b) => b.localeCompare(a, "es"));
console.log(palabrasSinRepetir);


document.getElementById("resultado").textContent =
    palabrasSinRepetir.join("\n");


