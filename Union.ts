// use union | when you are not sure about type

let number: string | number = 45;
number = '45'



// also create custom types

let seatAllotment: 'aisel' | 'middle' | 'window'
seatAllotment = 'middle'
seatAllotment = 'window'
//seatAllotment = 'someOthervalue' // it will throw an error Type '"someOthervalue"' is not assignable to type '"aisel" | "middle" | "window"'