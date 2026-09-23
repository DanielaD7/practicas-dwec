let suma = 0;

for (let i = 0; i <=50; i++){
    if(i % 4 == 0){
        suma+=i;
    }
}







const salida5 = document.getElementById('salida5');
let texto5 = `Suma: ${suma}`;
salida5.textContent = texto5;