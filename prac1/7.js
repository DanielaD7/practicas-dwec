const salida7 = document.getElementById('salida7');

let texto7 = '';

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < i; j++) {
    texto7 += ' ';
  }

  texto7 += '*\n';
}

salida7.textContent = texto7;
