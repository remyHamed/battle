import {Weapon} from "./Weapon";


export class Gun extends Weapon {

    private _bullet : number;

    constructor(props) {
        super(props);
        this._bullet = props.bullet;
    }

    get duration(): number {
        return (this.price / this.weight) * this.damage;
    }

    get damage(): number {
        return super.damage;
    }

    //TOdo calcul damage hauteur * largeur / poids + bonus
    // et bonus
}