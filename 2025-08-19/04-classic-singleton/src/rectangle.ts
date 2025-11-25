import Shape from "./shape.js";
export default class Rectangle extends Shape{
    
    
    
    calcArea(): number {
        return this.length* this.height
    }
 constructor(
    public length: number,
     public height: number
 ){super();}
}