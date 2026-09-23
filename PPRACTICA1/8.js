const salida8 = document.getElementById('salida8');

let texto8 = "";

for (let i = 0; i < 20; i++){
    for (let j = 0; j < 19 -i ; j++){
        texto8 += " ";
    }

    texto8+=  "*\n";

}



salida8.textContent = texto8;