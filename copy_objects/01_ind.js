const obj = {
    a:'a',
    b:'b',
    c:{
        d:'d',
        e:'e'
    },
    editA(){
        this.a='AAAAA'
    }
}

//Sabemos que con la copia normal de objetos tendriamos errores
    //const obj2 = obj


//Por esa razon podemos hacer una copia de direfentes maneras
const obj3 ={}

for (prop in obj){
    obj3[prop]=obj[prop]
}
    //Esta es la opcion menos funcional, debido a que con esta solucionariamos inicialmente el problema con las caracteristicas a y b pero no con las que estan dentro de c, debido a eso no es una opcion conveniente

//Esta opción funciona igual que con el ciclo for, pero con la diferencia de que se ahorran bastantes lineas de codigo
const obj4 = Object.assign({},obj)

//Originalmente esta propiedad retorna un objeto bacio, pero dentro de su proto, podremos encontrar los valores de obj
    //Esta soluciona parcialmete nuestro problema, pero no de todo
        //Con esta propiedad ya no tendremos el problema de que si se edita una propiedad de obj5(ó el objeto copiado), esta afecte al objeto original, pero si se modifica obj(objeto original), esta si afectara a sus objetos copia
const obj5 = Object.create(obj)

//JSON.stringify y JSON.parse con dos metodos que permiten al usuario poder psar de un objeto a un string y de un string a un objeto respectivamente
    //Entonces se puede hacer:
const stringifyObj= JSON.stringify(obj)//'{"a":"a","b":"b","c":{"d":"d","e":"e"}}'
const obj6 = JSON.parse(stringifyObj)
    //Esta seria una buena opcion ya que en este caso no se tiene ningun problema al modificar la copia o el original
        //  PERO: estas propiedades no pueden copiar metodos entonces no se podria hacer una copia 100% real de objeto.