
// define parameter type in function like this
function helloWorld(name:string, greeting:string){
    console.log(`${greeting} my name is ${name}`)
}
helloWorld('ahmed','Hi')


// define parameter type and also function type
function add(num1:number, num2:number):number{
    return num1+num2
}
add(2,2)


// define parameter type and also function type in arrow function
const myname = (name:string):string =>{
    return name
}


// if we add void on function its mean that function will never accept return keyword 
function Message(msg:string):void{
    //return msg     // it will not work because of void
    console.log(msg)
}


// never type is especially used for throw or handle error
function fail(errMsg:string):never{
    throw new Error(errMsg)
}
