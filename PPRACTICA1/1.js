var nombreVar = 'Ana';
let nombreLet = 'Pedro';
const nombreConst = 'Juan';


nombreVar = 'Paco';
nombreLet = 'Marta';
nombreConst = "Miguel";

const salida1 = document.getElementById('salida1');
let texto1 = `var: ${nombreVar}, let: ${nombreLet}, const: ${nombreConst}`;
salida1.textContent = texto1;