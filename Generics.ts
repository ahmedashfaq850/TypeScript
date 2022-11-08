function GenFun<Type>(val:Type):Type{
    return val
}

// arrow function

const myfunc = <T,>(products: T[]): T =>{
    const id=3
    return products[id]
}