// типизация  type(aliases), тип пишется с большой буквы
type MyBoolean = false | true;
type Pair = [string,string];
type Pairs = Pair[];

type diffCar={
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
}
