let listaCompra = ['leche', 'pan', 'huevos'];
let lista = document.getElementById('lista');
let contador = document.getElementById('contador');

//función recorrer lista / añadir <li> /eliminar elemento concreto
function recorrerLista(listaCompra) {
  lista.textContent = '';
  listaCompra.forEach((producto) => {
    let elementoLista = document.createElement('li');
    elementoLista.addEventListener('click', () => {
      console.log(producto);
      let posicion = listaCompra.indexOf(producto);
      listaCompra.splice(posicion, 1);
      recorrerLista(listaCompra);
    });
    elementoLista.textContent = producto;
    lista.append(elementoLista);
  });
  contadorProductos();
}
recorrerLista(listaCompra);

let input_producto = document.getElementById('input-producto');
let btn_agregar = document.getElementById('btn-agregar');
let btn_eliminar = document.getElementById('btn-eliminar');

//función añadir elemento
function añadir() {
  let valor_texto = input_producto.value.trim();

  if (valor_texto != '' && !listaCompra.includes(valor_texto)) {
    listaCompra.push(valor_texto);
  } else {
    console.log('Campo vacio');
  }
  input_producto.value = '';
  recorrerLista(listaCompra);
}

//funcion eliminar elemento

function eliminar() {
  listaCompra.pop();
  recorrerLista(listaCompra);
}

//función contador

function contadorProductos() {
  let numProductos = listaCompra.length;
  if (numProductos > 1) {
    contador.textContent = `Tienes ${numProductos} productos en la lista`;
  } else if (numProductos === 1) {
    contador.textContent = `Tienes ${numProductos} producto en la lista`;
  } else {
    contador.textContent = 'La lista está vacía';
  }
}

//funcion buscar

let buscador = document.getElementById('buscador');

function buscar(listaCompra) {
  lista.textContent = '';
  listaCompra.forEach((producto) => {
    if (producto.toLowerCase().includes(buscador.value.toLowerCase())) {
      let elementoLista = document.createElement('li');

      elementoLista.textContent = producto;
      lista.append(elementoLista);
    }
  });
}

//función ordenar

let btn_ordenar = document.getElementById('btn-ordenar');

function ordenar() {
  listaCompra.sort();
  recorrerLista(listaCompra);
}

//eventos

btn_agregar.addEventListener('click', añadir);
btn_eliminar.addEventListener('click', eliminar);
buscador.addEventListener('input', () => {
  buscar(listaCompra);
});
input_producto.addEventListener('keydown', (evento) => {
  if (evento.key === 'Enter') {
    añadir();
  }
});
btn_ordenar.addEventListener('click', ordenar);
