import Shape from "./shape.js";
export default class Circle extends Shape{
    
    
    
    calcArea(): number {
        return this.radius**2* Math.PI;
    }
 constructor(
    public radius:number
 ){super();}
}