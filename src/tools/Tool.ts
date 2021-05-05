import { Obstacle } from "../obstacle/Obstacle";

export interface Tool {
    sound(obstacle: Obstacle):void;
    sound():void;
}