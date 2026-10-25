const palabras = pedirPalabras();

function mapa (lista){
    const mapa = new Map();

    lista.forEach(palabra => {
        if(mapa.has(palabra)){
            mapa.set(palabra, mapa.get(palabra) + 1);
        } else {
            mapa.set(palabra, 1);
        }
        
    });
    


    return mapa;
}

const resultado = mapa(palabras);

const salida = document.getElementById("resultado");

resultado.forEach((cantidad, palabra) => {
    salida.textContent += palabra + ": " + cantidad + "\n";
});