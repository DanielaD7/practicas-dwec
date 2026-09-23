const salida9 = document.getElementById('salida9');

let texto9 = "";

for (let i = 0; i < 20; i++){
    for (let j = 0; j < 19-i  ; j++){
        texto9 += "* ";
    }

    texto9+=  "*\n";

}



salida9.textContent = texto9;