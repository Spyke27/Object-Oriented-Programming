//Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe,
//em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as 
//informações deste objeto no console.

class cliente {
    name: string;
    age: number;
    city: string;

    dadosCliente(){
        console.log(`Nome: ${ivan.name}\nIdade: ${ivan.age}\nCidade: ${ivan.city}`)
    }
}
const ivan = new cliente();
ivan.name = "Ivanilson";
ivan.age = 23;
ivan.city = "Ceará";

ivan.dadosCliente();
