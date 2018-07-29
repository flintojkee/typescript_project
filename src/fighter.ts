import { IFighter } from './IFighter';

export class Fighter implements IFighter {
    private name:string;
    private health:number;
    private power:number;

    constructor(name:string = 'default', health:number = 0, power:number = 0) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
    
    getName() {
        return this.name;
    }

    setDamage(damage:number = 0):void {
      this.health -= damage;
      console.log(`${this.name}'s health is ${this.health}`);
    }
  
    hit(enemy:IFighter, point:number = 0) {
      let damage = point * this.power;
      console.log(`${this.name} hits ${enemy.getName()} and dealt ${damage} damage`);
      enemy.setDamage(damage);
    }
  
    knockout() {
      return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          console.log("Time is over!");
          resolve(`${this.name} lost the fight`);
        }, 500);
      });
    }
    isAlive() {
      if (this.health > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
