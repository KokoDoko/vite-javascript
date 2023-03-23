import { Actor, Color, DisplayMode, Engine, Loader, Vector } from "excalibur"

export class Fish extends Actor {

    fins = 2

    constructor(){
        super({width:100,height:100})
    }
    onInitialize(engine){
        console.log(`I have ${fins} fins`)
    }
}