

export interface weaponProps {
    name : string;
    height : number;
    width : number;
    weight : number;
    price : number;
    duration : number;
    damage : number;
    bonus : number;
}




export class Weapon implements weaponProps {

    private _name : string;
    private _height : number;
    private _width : number;
    private _weight : number;
    private _price : number;
    private _duration : number;
    private _damage : number;
    private _bonus : number;



 //   constructor(name: string, height: number, width: number, weight: number, price: number, durationt : number, damage :number, bonus :number) {
 //       this._name = name;
 //       this._height = height;
 //       this._width = width;
 //       this._weight = weight;
  //      this._price = price;
  //      this._duration = durationt;
  //      this._damage = damage;
  //      this._bonus = bonus;
  //  }

    constructor(props: weaponProps ) {
        this._name = props.name;
        this._height = props.height;
        this._width = props.width;
        this._weight = props.weight;
        this._price = props.price;
        this._duration =props.durationt;
        this._damage = props.damage;
        this._bonus = props.bonus;
    }

    get bonus(): number {
        return this._bonus;
    }
    get name(): string {
        return this._name;
    }

    get damage(): number {
        return this._damage;
    }

    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }

    get weight(): number {
        return this._weight;
    }

    get price(): number {
        return this._price;
    }

    get duration(): number {
        return this._duration;
    }


    set name(value: string) {
        this._name = value;
    }

    set height(value: number) {
        this._height = value;
    }

    set width(value: number) {
        this._width = value;
    }

    set weight(value: number) {
        this._weight = value;
    }

    set duration(value: number) {
        if(value <= 0)
            value = 1;
        this._duration = value;
    }

    set price(value: number) {
        this._price = value;
    }

    set damage(value: number) {
        if(value <= 0)
            value = 1;
        this._damage = value;
    }

    set bonus(value: number) {
        if(value <= 0)
            value = 1;
        this._bonus = value;
    }
}