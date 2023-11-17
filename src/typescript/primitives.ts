// numbers 
let x = 10.5;
let y = 1234n; //bigint
let z = NaN;

//string 
let str1 = 'hello!!'
let str2:string = 'Явно указываем тип, который мы будем использовать'
let str3:string;
str3 = 'Тут только может быть срока';
let symb = Symbol('as');

//boolean 

let o = true;
o = false;

//nothing 
let h : undefined = undefined;
let g : null = null;

//literal  -одно какое-то конкретное значение 
const num = 108; 
const str4 = 'hi'

//universal (any)
let mm : any = 1;
mm = 'newStr';
mm = true;

//unknown - значение переменной будет известно позднее
let xx:unknown = 23;
if(typeof xx ==='string') xx.toLowerCase()



