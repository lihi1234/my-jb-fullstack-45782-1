"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Phone {
    model;
    screen;
    price;
    generation;
    constructor(model, screen, price, generation) {
        this.model = model;
        this.screen = screen;
        this.price = price;
        this.generation = generation;
    }
    turnOn() {
        console.log("on");
    }
    turnOff() {
        console.log("off");
    }
    takePic() {
        console.log("pic");
    }
}
exports.default = Phone;
//# sourceMappingURL=phone.js.map