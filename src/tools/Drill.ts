import { Obstacle } from "../obstacle/Obstacle";
import { Wall } from "../obstacle/Wall";
import { Wood } from "../obstacle/Wood";
import { Tool } from "./Tool";

export class Drill  implements Tool {
    sound(obstacle: Obstacle): void;
    sound(): void;
    sound(obstacle?: Obstacle): void {
        if (!obstacle){
            console.log("Whirrr")
            return;
        }
        if (obstacle instanceof Wood) {
            console.log("Furniture staple")
        }
        if (obstacle instanceof Wall){
            console.log("Picture hanger");
        }
    }

}