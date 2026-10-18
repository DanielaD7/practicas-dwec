
const frecuencias = new Array(10).fill(0);

for (let i = 0; i < 10000; i++){

let random = Math.floor(Math.random() * 10) + 1;
frecuencias[random - 1]++;

};

for (let i = 0; i < frecuencias.length; i++) {
    document.getElementById("resultado").textContent +=
        "Número " + (i + 1) + ": " + frecuencias[i] + "\n";
}


