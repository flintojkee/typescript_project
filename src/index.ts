import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";
import fight from "./fight";

// create two instances
let fighter = new Fighter("Den", 500, 10);
let improvedFighter = new ImprovedFighter("Max", 500, 10);
// call fight function
fight(fighter, improvedFighter, 4, 8, 4);