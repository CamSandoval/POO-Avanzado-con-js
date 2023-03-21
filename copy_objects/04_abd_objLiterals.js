//Aplicaremos conceptos de abstraccion y encapsulamiento a objetos literales reciclando la funcion deepCopy hecha anteriormente
const isArray= (param)=>{
    return Array.isArray(param)
}
const isObject= (param)=>{
    return typeof param == 'object'
}

const deepCopy=(subject)=>{
    let copysubject 

    const isSubjectObject= isObject(subject)
    const isSubjectArray= isArray(subject)

    if(isSubjectArray){
        copysubject = []
    }else if(isSubjectObject){
        copysubject ={}
    }else{
        return subject
    }

    for (key in subject){
        const isKeyObject = isObject(subject[key])
        if (isKeyObject){
            copysubject[key]=deepCopy(subject[key])
        }else if (isSubjectArray){
            copysubject.push(subject[key])
        }else{
            copysubject[key]=subject[key]
        }
    }
    return copysubject
}

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

const obj2 = deepCopy(objetito)
console.log(objetito);//{ a: 'a', b: 'b', c: { d: 'd', e: 'e' }, editA: [Function: editA] }
console.log(obj2);//{ a: 'a', b: 'b', c: { d: 'd', e: 'e' }, editA: [Function: editA] }
