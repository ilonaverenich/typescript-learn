//типизация функций

function sum (a:number,b:number):number{
    return a+b
}
sum(2,1)
const sum2 = (a : number, b :number ): number => a + b 

//функция с необязательным параметром
function log(name:string, userID?:string):void{
    console.log(name, userID|| 'аноним')
}
// функция никогда не выполнится до конца
function crash():never{
    throw new Error('crash')
}

function average(...arg:number[]){
    const sum = arg.reduce((prev,curr)=>prev+curr,0)
    return sum/arg.length;
}

