function Users(username:string, pass:number):{username:string, pass:number}{
    return {username: username, pass:pass}
}
console.log(Users('Ahmed',4666))



// type Aliases

type User = {
    name: string,
    pass: number,
    isOnline: boolean
}

function UserInfo(user:User):User{
    return {name:user.name, pass:user.pass, isOnline: user.isOnline}
}

console.log(UserInfo({name:'ahmed', pass:4555, isOnline:true}))


export {}