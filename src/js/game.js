import '../css/style.css'
import { Actor, Color, DisplayMode, Engine, Loader, Vector } from "excalibur"
import { Resources } from "./resources"
import { Fish } from "./fish"

export class Game extends Engine {

    #fish

    constructor() {
        super({ width: 800, height: 600 })
        const loader = new Loader([Resources.Fish])
        this.start(loader).then(() => this.startGame())

        this.#fish = new Fish()
        console.log(this.#fish.fins) // just a test
    }

    startGame(){
        for(let i = 0; i<20; i++) {
            const fish = new Actor()
            const sprite = Resources.Fish.toSprite()
            fish.graphics.use(sprite)
            // tint on sprite
            sprite.tint = new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255)
            // position and velocity
            fish.pos = new Vector(Math.random()*800 + 400,Math.random()*600)
            fish.vel = new Vector(Math.random() * -150 - 50, 0)
            // scale
            const sc = Math.random() * 2
            fish.scale = new Vector(sc, sc)
            this.add(fish)
        }
    }

    onPreUpdate(engine, delta) {
        for(let fish of this.currentScene.actors) {
            if (fish.pos.x < -80) {
                fish.pos.x = 880
            }
        }
    }
}

new Game()