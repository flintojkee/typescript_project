export interface IFighter {
    getName() : string;
    setDamage(damage:number) : void;
    hit(enemy:IFighter, point:number) : void;
    knockout() : Promise<string>;
}