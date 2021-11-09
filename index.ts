console.log('TypeScript');

function soma (a:number, b:number){
    return a + b;
}//soma
//type
//interface


interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;

}//IAnimal



interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}//IFelino

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}//ICanino

type IDomestico = ICanino |IFelino;


const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true,
    
    
}//const animal



