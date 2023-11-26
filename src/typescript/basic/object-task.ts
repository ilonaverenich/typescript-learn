interface User{
    login :string,
    email:string,
    password:string,
    isOnline:boolean,
    lastVisited?:Date,
}
interface Admin{
    login: string,
    email:string,
    password:string,
    isOnline: boolean,
    lastVisited?:Date

}
const user:User ={
    login: 'ilona',
    email:'verenich@mail.ru',
    password:'1234!!!',
    isOnline:true,    
}

const admin :Admin ={
    login: 'Женя',
    email:'hoholkoh@mail.ru',
    password:'1231114!!!@#$!',
    isOnline:true,    
}

export function login(user:{login:string, password:string}){
    if(user.login.length>0 && user.password.length>0){
    console.log('hello',user.login)
    }
}
login(user)
login(admin)