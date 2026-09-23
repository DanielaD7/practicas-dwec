const salida6 = document.getElementById('salida6');

let texto6 = '';

for (let i = 20; i >= 1; i--) {
  if (i % 3 === 0 && i % 5 === 0) {
    texto6 += 'FizzBuzz\n';
  } else if (i % 3 === 0) {
    texto6 += 'Fizz\n';
  } else if (i % 5 === 0) {
    texto6 += 'Buzz\n';
  } else {
    texto6 += i + '\n';
  }
}

salida6.textContent = texto6;
