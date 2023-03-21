
const objetito ={
    a:'a',
    b:'b',
    c:{
        d:'d',
        e:'e'
    },

    editA(){
        this.a= 'AAAAA'
    }
}

const isObject = (subj)=>{
    return typeof subj == 'object'
}
const isArray = (subj)=>{
    return Array.isArray(subj)
}

//Esta es una funcion RECURSIVA, dentro se esta función aplicaremos una logica que permite copiar de manera profunda un objeto, iniciando con la validación del tipo de dato del parametro dado, para posterior mente asignar ese tipo de dato a una variable interna que sera la que retornaremos al final del proceso
const deepCopy = (subject) => {
    let copysubject;

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)

    if (subjectIsArray){
        copysubject =[]
    }else if(subjectIsObject){
        copysubject={}
    }else{
        return subject
    }

    //Despues de identificada el tipo de dato del objeto se empezara a validar cada uno de los items dentro del objeto o array para poder ser copiados, si se llega al caso de que el item del objeto tambien sea un objeto, se aplicara recursividad dentro de la misma funcion para poder validar los items dentro de este mismo y poder hacer una copia presisa 
    for(key in subject){
        const keyIsObject = isObject(subject[key])

        if(keyIsObject){
            copysubject[key]=deepCopy(subject[key])
        }else {
            if(subjectIsArray){
                copysubject.push(subject[key])
            }else{
                copysubject[key]=subject[key]
            }
        }
    }

    return copysubject

}
