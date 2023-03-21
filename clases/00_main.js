console.log('hola');
const titulo = document.querySelector('.titulos')
titulo.innerText = 'holaa'

//METODOS ESTATICOS DE JAVASCRIPT
    //Como sabemos en javascript tenemos un prototipo por defecto del cual desprenden todos nuestro objetos, ya sean instancias de una clase o objetos literales, este prototipo se conoce como Object, y tiene la capacidad de que con cierta sintaxis es capaz de generar resultados, visualizaciones o modificaciones a nuestros objetos
const juan={
    name:'Juanito',
    age:18,
    approvedCourses:[],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
}
//Object.keys es una propiedad que permite visualizar las llaves o los nombres clave de los atributos de in objeto, en forma de array
console.log(Object.keys(juan))//[ 'name', 'age', 'approvedCourses', 'addCourse' ]

//Object.getOwnPropertyNames es una propiedad que devuelve las llaves o nombres clave del objeto, pero como se vera adelante , este tambien permite ver las llaves las cuales no tienen la propiedad enumerable de cada atributo
console.log(Object.getOwnPropertyNames(juan))//[ 'name', 'age', 'approvedCourses', 'addCourse' ]

//Object.entries es una propiedad que permite ver el tanto las llaves como los valores del objeto en forma de arrays encapsulados dentro de otro array
    //OJO, este tiene una particularidad, y es que como transforma los atributos como arrays y encapsula su contenido, el acceder o usar los metodos como en le ejemplo (addCourse), no sera posible debido a la nueva organizacion en forma de array y reglas de scope
console.log(Object.entries(juan))/*[
    [ 'name', 'Juanito' ],
    [ 'age', 18 ],
    [ 'approvedCourses', [] ],
    [ 'addCourse', [Function: addCourse] ]
]*/

//Object.getOwnPropertyDescriptors es una propiedad que retorna un objeto con los atributos del objeto llamado, pero este contiene las propiedades configurables 
console.log(Object.getOwnPropertyDescriptors(juan))/*{
    name: {
      value: 'Juanito',
      writable: true,
      enumerable: true,
      configurable: true
    },
    age: { value: 18, writable: true, enumerable: true, configurable: true },
    approvedCourses: { value: [], writable: true, enumerable: true, configurable: true },
    addCourse: {
      value: [Function: addCourse],
      writable: true,
      enumerable: true,
      configurable: true
    }
}*/

//Object.defineProperty esta es una propiedad bastante importante debido a que con esta se puede crear atributos para un objeto,pero de una manera mas personalizada y con asignacion de permisos
    //¿Cómo?, se debe de pasar el nombre del objeto como primer parametro, despues el nombre de si key y por ultimo un objeto con el value y las caracteristicas de permisos que tendra el atributo
        //PERMISOS DE UN ATRIBUTO
            //enumerable, es un permiso que permite que un atributo sea visible desde las herramientas del navegador, la unica forma de ver este atributo seria llamdolo en la consola con el metodo Object.getOwnPropertyNames()
Object.defineProperty(juan,'navigator',{value:'Chrome',enumerable:false,writable:true,configurable:true})
            //
Object.defineProperty(juan,'PruebaNasa',{value:'extraterrestres',enumerable:false,writable:false,configurable:false})
            //writable, es un permiso que permite que el valor o value del atributo sea reescrito mediante la sintaxis normal. 
            //EJEMPLO: nombre_del_objeto.atributo='nuevo valor'
Object.defineProperty(juan,'editor',{value:'VScode',enumerable:true,writable:false,configurable:true})
            //configurable, es un permiso que da la lacapacidad de elimar un atribuo de un objeto
            // ejemplo  de lo que no permite: delete nombre_del_objeto.atributo.atributo
Object.defineProperty(juan,'Terminal',{value:'wsl',enumerable:true,writable:true,configurable:false})
console.log('__________________________-');
console.log(Object.getOwnPropertyDescriptors(juan))