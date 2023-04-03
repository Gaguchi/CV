import Experience from "../Experience";
import * as THREE from "three";
import Room from "./Room";
import Floor from "./Floor.js";
import Controls from "./Controls";
import Environment from "./Environment";

export default class World{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("ready", ()=> {
            this.environment = new Environment();
            this.floor = new Floor();
            this.Room = new Room();
            this.Controls = new Controls();
        })
    }
    
    resize() {
    }

    update(){
        if(this.Room){
            this.Room.update();
        }
        if(this.Controls){
            this.Controls.update();
        }
    }
}