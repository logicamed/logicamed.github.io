class App {
    constructor() {
        this.azienda = new Contenitore();
    }
}

class Contenitore {
    constructor() {
        this.elementi = [];
    }

    aggiungiElemento(elemento) {
        this.elementi.push(elemento);
    }
}

class Dipedente {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}