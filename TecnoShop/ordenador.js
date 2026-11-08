class Ordenador {
    constructor(marca, modelo, precio, ram = 4, disco = 512, pulgadas = 17 ) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = validar(precio, 0);
        this.ram = validar(ram, 4);
        this.disco = validar(disco, 512);
        this.pulgadas = validar(pulgadas, 17);
    }

    comparar(otro){
        if (this.precio < otro.precio){
            return "Más barato";
        } else if(this.precio > otro.precio){
            return "Más caro";
        } else {
            return "Mismo precio";
        }

    }

    toString(){
        return `${this.marca} ${this.modelo} · ${this.ram} GB RAM · ${this.disco} GB · ${this.pulgadas}"`
    }


}


function validar (propiedad, valorDefecto){
    if (propiedad > 0){
        return propiedad;
    } else {
        return valorDefecto;
    }
}

