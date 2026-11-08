const catalogo = [
    new Ordenador("HP", "Pavilion", 650),
    new Ordenador("Lenovo", "IdeaCentre", 800, 16, 1024, 24),
    new Ordenador("Asus", "ExpertCenter", 550),

    new Portatil("Acer", "Aspire", 600),
    new Portatil("Lenovo", "IdeaPad", 750, 8, 512, 15, 6),
    new Portatil("Asus", "ZenBook", 1000, 16, 1024, 14, 10)
];

const carrito = new Carrito();
let ordenar = false;


function pintarCatalogo(productos) {
    const contenedor = document.querySelector("#catalogo");
    contenedor.textContent = "";

    for (const producto of productos) {
        const tarjeta = document.createElement("div");

        const tipo = document.createElement("p");

        if (producto instanceof Portatil) {
            tipo.textContent = "Portátil";
        } else {
            tipo.textContent = "Sobremesa";
        }

        const titulo = document.createElement("h3");
        titulo.textContent = `${producto.marca} ${producto.modelo}`;

        const detalles = document.createElement("p");
        detalles.textContent = producto.toString();

        const precio = document.createElement("p");
        precio.textContent = `${producto.precio.toFixed(2)} €`;

        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = "Añadir";

        boton.addEventListener("click", () => {
            carrito.agregar(producto);
            pintarCarrito();
        });

        tarjeta.appendChild(tipo);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(detalles);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
    }
}


function pintarCarrito() {
    const contenedor = document.querySelector("#carrito");
    contenedor.textContent = "";

    const productos = carrito.getProductos();

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        const linea = document.createElement("div");

        const texto = document.createElement("p");
        texto.textContent =
            `${producto.marca} ${producto.modelo}: ${producto.precio.toFixed(2)} €`;

        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = "Quitar";

        boton.addEventListener("click", () => {
            carrito.quitar(i);
            pintarCarrito();
        });

        linea.appendChild(texto);
        linea.appendChild(boton);

        contenedor.appendChild(linea);
    }

    if (productos.length === 0) {
        contenedor.textContent = "El carrito está vacío.";
    }

    document.querySelector("#cantidad-carrito").textContent =
        carrito.getCantidad();

    document.querySelector("#total-carrito").textContent =
        carrito.getTotal().toFixed(2);
}


document.querySelector("#vaciar-carrito").addEventListener("click", () => {
    carrito.vaciar();
    pintarCarrito();
});


function actualizarCatalogo() {
    const tipo = document.querySelector("#filtro-tipo").value;

    let productos = [...catalogo];

    if (tipo === "portatil") {
        productos = productos.filter(producto => {
            return producto instanceof Portatil;
        });
    } else if (tipo === "sobremesa") {
        productos = productos.filter(producto => {
            return !(producto instanceof Portatil);
        });
    }

    if (ordenar) {
        productos.sort((a, b) => {
            return a.precio - b.precio;
        });
    }

    pintarCatalogo(productos);
}


document.querySelector("#filtro-tipo").addEventListener("change", () => {
    actualizarCatalogo();
});


document.querySelector("#ordenar-precio").addEventListener("click", () => {
    ordenar = true;
    actualizarCatalogo();
});


function leerOpcional(selector) {
    const valor = document.querySelector(selector).value;

    if (valor === "") {
        return undefined;
    } else {
        return Number(valor);
    }
}


function actualizarAutonomia() {
    const tipo = document.querySelector("#tipo").value;
    const campo = document.querySelector("#autonomia");

    if (tipo === "portatil") {
        campo.disabled = false;
    } else {
        campo.disabled = true;
    }
}

document.querySelector("#tipo").addEventListener("change", () => {
    actualizarAutonomia();
});


const formulario = document.querySelector("#formulario-producto");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const mensaje = document.querySelector("#mensaje-formulario");
    mensaje.textContent = "";

    const tipo = document.querySelector("#tipo").value;
    const marca = document.querySelector("#marca").value.trim();
    const modelo = document.querySelector("#modelo").value.trim();
    const precioTexto = document.querySelector("#precio").value;

    if (marca === "" || modelo === "" || precioTexto === "") {
        mensaje.textContent = "Completa la marca, el modelo y el precio.";
        return;
    }

    const precio = Number(precioTexto);

    if (!(precio > 0)) {
        mensaje.textContent = "El precio debe ser mayor que cero.";
        return;
    }

    const ram = leerOpcional("#ram");
    const disco = leerOpcional("#disco");
    const pulgadas = leerOpcional("#pulgadas");

    let producto;

    if (tipo === "portatil") {
        const autonomia = leerOpcional("#autonomia");

        producto = new Portatil(
            marca, modelo, precio, ram, disco, pulgadas, autonomia
        );
    } else {
        producto = new Ordenador(
            marca, modelo, precio, ram, disco, pulgadas
        );
    }

    catalogo.push(producto);

    formulario.reset();
    actualizarAutonomia();
    actualizarCatalogo();

    mensaje.textContent = "Producto añadido correctamente.";
});


actualizarCatalogo();
pintarCarrito();
actualizarAutonomia();