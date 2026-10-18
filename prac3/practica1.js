for (let i = 0; i < 50; i++) {
    const numeros = [];

    while (numeros.length < 6) {
        let random = Math.floor(Math.random() * 49) + 1;

        if (numeros.includes(random) === false) {
            numeros.push(random);
        }
    }

    document.getElementById("resultado").textContent += numeros + "\n";
}