import {Weapon} from "./Weapon";


export class Sword extends Weapon {

    private _legendary : boolean;
    private _year: number;

    constructor(props) {
        super(props);
        this._legendary = props.legendary;
        this._year = props.year;
    }

    get duration(): number {
        let res = this.weight * this.year;
        if( res > )
    }

    get damage(): number {
        let res =  (this.weight * this.width + this.bonus) / this.year;
        if(this.legendary === true) {
            let pourcentage = res * 10 / 100;
            res += pourcentage;
        }
        return res;
    }
    get year(): number {
        return this._year;
    }

    get legendary(): boolean {
        return this._legendary;
    }

    //TOdo calcul dmage et bonus
}