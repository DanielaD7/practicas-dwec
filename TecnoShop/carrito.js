class Carrito{
    #productos = [];

    agregar(producto){
        this.#productos.push(producto);
    }

    quitar(indice){
        this.#productos.splice(indice, 1);
    }

    vaciar(){
        this.#productos = [];
    }

    getProductos(){
        return [...this.#productos];
    }

    getCantidad(){
        return this.#productos.length;
    }

   getTotal() {
    return this.#productos.reduce((acumulado, producto) => {
        return acumulado + producto.precio;
    }, 0);
}
}