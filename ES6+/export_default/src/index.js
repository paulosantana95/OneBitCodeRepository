import Spaceship from "./spaceship";
import armamentKind from "./armaments";
import {  laserDef as laserD  } from "./defenses"
import basicDefenses from "./defenses"

const spaceship = new Spaceship ("USS Enterprise", "James Tibuerius Kirk", armamentKind.laser, laserD)
const basicSpaceship = new Spaceship ("Nave Padrão", "Astronauta Zin", [], basicDefenses)


console.log (spaceship)
console.log (basicSpaceship)