//Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe,
//em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as
//informações deste objeto no console.

class productElec{
    product: string;
    model: string;
    brand: string;
    price: number;

    infos(){
        console.log(`A ${iphone.brand} lançou seu novo aparelho, o ${iphone.product} ${iphone.model}. Em seu lançamento, está sendo vendido pelo valor de R$ ${iphone.price}.`)
    }
}
const iphone = new productElec();
iphone.product = "Iphone";
iphone.model = "12 Pro Max";
iphone.brand = "Apple";
iphone.price = 14.999,99;

iphone.infos();