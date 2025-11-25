export default class Phone{
    model: string
    screen: number
    price: number
    generation: number



    
    constructor(  model: string, screen: number, price: number, generation: number) {
       this.model= model;
       this. screen= screen;
       this.price= price;
       this.generation= generation;
        
    }

    turnOn(){
        console.log("on")
    }
    turnOff(){
        console.log("off")
    }
    takePic(){
        console.log("pic")
    }
}