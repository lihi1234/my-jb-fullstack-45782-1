import Shape from "./shape.js";
export default class Square extends Shape{
    
    
    
    calcArea(): number {
        return this.rib**2
    }
 constructor(
    public rib:number
 ){super();}
}