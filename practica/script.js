
//PRACTICA DE METODOS ESTATICOS
class Customer{
    constructor({name,email,address,purchases=[]}){
        this.name=name
        this.email=email
        this.address=address
        this.purchases=purchases
    }
}
class Product{
    constructor({name,price,stock}){
        this.name=name
        this.price=`$ ${price}`
        this.stock=`${stock} unidades`
    }
}

//LIST PRODUCTS
const soap = new Product({name:'Jabon de baño',price:20,stock:55})
const detergent = new Product({name:'detergente',price:55,stock:5})
const toothbrushes = new Product({name:'Cepillo de diente',price:6,stock:555})
const paper = new Product({name:'Papel higienico',price:7,stock:654})

const david = new Customer ({name:'David Lopez',email:'davidPL@gmail.com:',address: 'Cll 102#55-56',purchases:[soap,paper]})

console.log(Object.keys(david))
console.log(Object.entries(david))
console.log(Object.getOwnPropertyDescriptors(david))
console.log(Object.defineProperty(david,'descuentos',{value:'20% en jabones de baño',enumerable:true ,writable:false,configurable:true}))
console.log(Object.keys(david))
console.log(Object.getOwnPropertyNames(david))
