interface UserDet {
    name?: string, //its optional field
    email: string,
    password: number
}

let userD:UserDet = {
    email: 'aa@.com',
    password: 456
}

interface UserDet {
    age?: number
}

// inheritance in interface

interface Admin extends User{
    role: 'ceater' | 'viewer'
}


class Account implements UserDet{
    constructor(
        public name:string,
        public email:string,
        public password:number,
    ){}
}