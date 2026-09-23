const salida10 = document.getElementById('salida10');

let texto10 = "";

for (let i = 0; i < 20; i++){
    for (let j = 0; j < i  ; j++){
        texto10 += "* ";
    }

    texto10+=  "*\n";

}



salida10.textContent = texto10;