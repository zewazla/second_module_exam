# Second exam

## Story

Handyman Tools
Create OOP classes structure based on the description below. Remember to use proper elements of oop paradigm (like classes, abstract classes, interfaces) Notice, that description below is simplified by purpose, it’s goal is to check your ability to think in an oop way, not to focus on it’s factual accuracy ;) 
Description
Every handyman has to have a set of tools for a variety of jobs he wants to undertake. All tools share some attributes like the type of a tool and material it’s built from. Each tool though emits the sound when used depending on their type and can be used with a specific material 
We can actually simplify to statements below:

Tools - make a sound (according to type)
Hammer emits a “Bang” (method returns string “Bang!”)
Hammer on wood (method returns string “Wood splitter”)
Hammer on concrete (method returns string “Rock crusher”)
Drill emits a “Whirrr” (method returns string “Whirrr”)
Drill on the wood (method returns string “Furniture stapler”)
Drill on the wall (method returns string “Picture hanger”)
Brush emits a “Slosh, slosh…” (method returns string “Slosh, slosh….”)
Brush on a car (method returns string “What the hell You think you’re doing!?”)
Brush on metal (method returns string “Paint job”)


In start file you should include below code:

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



tip:
Sound method may take an object or not (then it returns the default name)  in its argument.
You can use a switch statement.



