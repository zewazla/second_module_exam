import { Car } from "./obstacle/Car";
import { Concrete } from "./obstacle/Concrete";
import { Metal } from "./obstacle/Metal";
import { Obstacle } from "./obstacle/Obstacle";
import { Wall } from "./obstacle/Wall";
import { Wood } from "./obstacle/Wood";
import { Brush } from "./tools/Brush";
import { Drill } from "./tools/Drill";
import { Hammer } from "./tools/Hammer";
import { Tool } from "./tools/Tool";


const hammer = new Hammer();
const drill = new Drill();
const brush = new Brush();
 
const tools: Tool[] = [hammer, drill, brush]; 
 
const wood = new Wood();
const concrete = new Concrete();
const wall = new Wall();
const car = new Car();
const metal = new Metal();
 
const obstacles: Obstacle[] = [wood, concrete, wall, car, metal]; 
 
for(let tool of tools)
{
	for(let obstacle of obstacles){
		tool.sound(obstacle);
	}
 
    	tool.toString();
    	tool.sound();
}
