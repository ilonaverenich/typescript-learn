//unions - сужение типов
type Status = 'OK'|'loading'|'error';
const staticX: Status ='loading';

const arr3: (number|string)[] =[];

function printId (id:number|string):void{
    if(typeof id ==='string' ){
        console.log(id.toUpperCase())
    }
    else{
        console.log(id)
    }

}

function welcome (person:[string,string]|string):number|string{
    if(Array.isArray(person)){
        console.log('Hello! You are array',person[0] + person[1])
        return 1
    }
    else{
        console.log('hello! you are string')
        return 'ss'
    }
}