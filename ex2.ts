//Crie uma classe avião e apresente os atributos e métodos referentes a esta classe,
//em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as
//informações deste objeto no console.

class Aviao{
    model: string;
    year: number;
    capacitymax: number;

    infos(){
        console.log(`O ${boeing.model} foi criado em ${boeing.year}, com capacidade máxima de ${boeing.capacitymax} passageiros.`);
    }
}

const boeing = new Aviao();
boeing.model = "Boeing 747";
boeing.year = 1970;
boeing.capacitymax = 585;

boeing.infos();
