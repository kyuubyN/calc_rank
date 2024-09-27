class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "arma desconhecida";
        }
        print(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

const heroi1 = new Heroi("Aragorn", 30, "Guerreiro");
heroi1.atacar();
const heroi2 = new Heroi("Gandalf", 100, "Mago");
heroi2.atacar();
const heroi3 = new Heroi("Bruce", 25, "Ninja");
heroi3.atacar();
const heroi4 = new Heroi("Li", 40, "Monge");
heroi4.atacar();
