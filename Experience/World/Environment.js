import Experience from "../Experience";
import * as THREE from "three";

export default class Environment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        
        this.setSunLight();
    }
    
    setSunLight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 10;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.02;
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);

        this.sunLight.position.set(-2, 6, 5);
        this.scene.add(this.sunLight);

        this.ambientLight = new THREE.AmbientLight("#ffffff", 0.7);
        this.scene.add(this.ambientLight);
    }

    resize() {
    }

    update(){
    }
}