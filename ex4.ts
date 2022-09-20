//Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe,
//em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as
//informações deste objeto no console.

class Funcionario{
    fname: string;
    lname: string;
    age: number;
    sal: number;

    infos(){
        console.log(`
        Nome Completo: ${func.fname} ${func.lname};
        Idade: ${func.age};
        Salário atual: ${func.sal};
        `)
    }
}
const func = new Funcionario();
func.fname = "Rodrigo";
func.lname = "Daniel";
func.age = 21;
func.sal = 5.299;

func.infos();