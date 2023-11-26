//типизация массивов 
const numbers =[1,2,3,4,5,6];

const strs:string[] =[];
const strs2:Array<String> =[];

strs.push('ilona')

const cars: Car [] = [];
cars.push({wheels:4, brand:'BMW', type:''})

const arrayOfArray: string[][] = [];
arrayOfArray.push(['hello','how are u','OK'])

function printArr (arr:unknown[]):void{
    arr.forEach(element => {
       console.log(element) 
    });
}