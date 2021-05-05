import { Obstacle } from "../obstacle/Obstacle";

export abstract class Tool {
    abstract sound(obstacle: Obstacle):void;
    abstract sound():void;
}