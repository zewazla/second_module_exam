import { Car } from "../obstacle/Car";
import { Metal } from "../obstacle/Metal";
import { Obstacle } from "../obstacle/Obstacle";
import { Tool } from "./Tool";

export class Brush implements Tool {
    sound(obstacle: Obstacle): void;
    sound(): void;
    sound(obstacle?: Obstacle): void {
        if (!obstacle){
            console.log("“Slosh, slosh…”")
            return;
        }
        if (obstacle instanceof Car) {
            console.log("What the hell You think you’re doing!?")
        }
        if (obstacle instanceof Metal){
            console.log("Paint job");
        }
    }
  
}