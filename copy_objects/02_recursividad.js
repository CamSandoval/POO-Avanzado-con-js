//RECURSIVIDAD:
    //Esta es la dorma en la que podemos emular el comporatmiento de un ciclo pero con funciones

const numeros=[5,24,63,85,76,5,66]
let numerito=0
for (let i = 0; i< numeros.length;i++){
    numerito= numeros[i]
    console.log({i,numerito})// {i: 0, numerito: 5} {i: 1, numerito: 24} {i: 2, numerito: 63} {i: 3, numerito: 85} {i: 4, numerito: 76} {i: 5, numerito: 5} {i: 6, numerito: 66}
}

//EJEMPLO:
function recursiva(arrayNumeros) {
    if(arrayNumeros.length !== 0){
        const primerNumero = arrayNumeros[0];
        console.log(primerNumero)
        arrayNumeros.shift();
        return recursiva(arrayNumeros)}
    else{
        return 'Fin del array'}
}

recursiva(numeros)// 5 24 63 85 76 5 66

/*class Obj{
    constructor({name,age,skills={}}){
        this.name=name
        this.age=age
        this.skills= skills
    }
}

const juan = new Obj({name:'juan',age:25,skills:{soft:'pubic speak'}})
const ana = Object.create(juan)
ana.name= 'ana'
ana.skills.soft='escribir'
console.log(juan);
console.log(ana);*/