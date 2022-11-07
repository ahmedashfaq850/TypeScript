// Main Concept is
//- readonly
//- ? optional
// add multiple types using &


type User = {
    readonly _id: string
    name: string,
    pass: number,
    isOnline: boolean,
    creditCardDetails?: number // ? its mean optional 
}

let user:User = {
    _id: '456',
    name:'ahmed',
    pass:455,
    isOnline:true,
    creditCardDetails: 455556666 // this is an optional property 
}

user.name = 'bilal'

// now i am changing the _id value but it will not allow me to change it due to readonly
// it throw an error { Cannot assign to '_id' because it is a read-only property. }
//user._id = '4444' 