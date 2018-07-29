import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";

export default async function fight(fighter:Fighter, improvedFighter:ImprovedFighter, ...points:number[]) {
  let round = 1;
  while (fighter.isAlive() && improvedFighter.isAlive()) {
    let r = points[Math.floor(Math.random() * points.length)];
    console.log(`---Round ${round}---`);
    fighter.hit(improvedFighter, r);
    if (!improvedFighter.isAlive()) {
      break;
    }
    improvedFighter.doubleHit(fighter, r);
    round++;
  }

  let looser;
  !fighter.isAlive() ? looser = fighter : looser = improvedFighter;

  await looser
    .knockout()
    .then(fightResult => {
      console.log(fightResult);
    })
    .catch(err => {
      console.log(err);
    });
}