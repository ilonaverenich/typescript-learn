//Чтобы не было глобальной области вилдимости, необходимо написать экспорт
// readonly - тип, который нельзя изменять

interface User {
    readonly email:string;
    readonly login:string;
    password:string;

}
//можно засширять интерфейсы
interface User{
    isOnline ?: boolean;
}

// extends
interface Person {
    readonly firstname: string;
    lastname: string;
    phone?: string;
    db?: number;
}

interface Employee extends User,Person{
    startWork:boolean
}

const user1:Employee ={
    email:'ini',
    login:'aaa',
    password:'ssdd',
    firstname:'ddf',
    lastname: 'Verenich',
    startWork:true
}

//Можем изменять обязательность 