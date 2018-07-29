import { IFighter } from "./IFighter";

export interface IImprovedFighter extends IFighter {
    doubleHit(enemy:IFighter, point:number) : void;
}