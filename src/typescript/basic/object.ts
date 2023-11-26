//Типизация объектов. Работа с интерфейсами 

interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;

    [key:string]:unknown; //для неогрпаниченного количества свойств
}

const car :Car ={
    wheels : 4,
    brand: 'BMW',
    type: 'sedan',
    isNew: false,
}
car['go'] = true

car.brand;

