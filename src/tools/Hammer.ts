import { Concrete } from "../obstacle/Concrete";
import { Obstacle } from "../obstacle/Obstacle";
import { Wood } from "../obstacle/Wood";
import { Tool } from "./Tool";

export class Hammer implements Tool {
    sound(obstacle: Obstacle): void;
    sound(): void;
    sound(obstacle?: Obstacle): void {
        if (!obstacle){
            console.log("Bang!")
            return;
        }
        if (obstacle instanceof Wood) {
            console.log("Wood splitter")
        }
        if (obstacle instanceof Concrete){
            console.log("Rock crushe");
        }
    }   

    toString(): string {
        return `I'm a hammer`;
    }
}