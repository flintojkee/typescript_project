import { Fighter } from './fighter';
import { IImprovedFighter } from './IImprovedFighter';
import { IFighter } from './IFighter';

export class ImprovedFighter extends Fighter implements IImprovedFighter {
  doubleHit(enemy:IFighter, points:number) {
    super.hit(enemy, points * 2);
  }
}