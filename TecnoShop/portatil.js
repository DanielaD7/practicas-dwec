class Portatil extends Ordenador {
    constructor(marca, modelo, precio, ram = 4, disco = 256, pulgadas = 12, autonomia = 4){
        super(marca, modelo, precio, ram, disco, pulgadas);
        this.autonomia = autonomia;

    }

    toString(){
        return (`${super.toString()} ${this.autonomia} horas de autonomía.`);
    }
    
}