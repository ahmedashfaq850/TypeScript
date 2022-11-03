// define parameter type in function like this
function helloWorld(name, greeting) {
    console.log("".concat(greeting, " my name is ").concat(name));
}
helloWorld('ahmed', 'Hi');
// define parameter type and also function type
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// if we add void on function its mean that function will never accept return keyword 
function Message(msg) {
    //return msg                      // it will not work because of void
    console.log(msg);
}
// never type is especially used for throw or handle error
function fail(errMsg) {
    throw new Error(errMsg);
}
