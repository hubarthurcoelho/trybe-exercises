"use strict";
// crie uma classe Car cujo objeto representará um carro
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
        this.isOn = false;
        this.speed = 0;
        this.direction = '';
    }
    ;
    honk() {
        console.log('honk!');
    }
    ;
    turnOn() {
        console.log('Engine running');
        this.isOn = true;
    }
    ;
    turnOff() {
        if (this.speed > 0) {
            console.log('car needs to be stopped first');
        }
        else {
            console.log('Engine turned off');
            this.isOn = false;
        }
    }
    ;
    speedUp(aceleration) {
        const newSpeed = this.speed + aceleration;
        this.speed = newSpeed;
        console.log(`Now moving at ${newSpeed} km/h`);
    }
    ;
    slowDown(deceleration) {
        const newSpeed = this.speed - deceleration;
        this.speed = newSpeed;
        console.log(`Now moving at ${newSpeed} km/h`);
    }
    ;
    stop() {
        this.speed = 0;
        console.log('The car has stopped');
    }
    ;
    turn(direction) {
        this.direction = direction;
    }
    ;
}
;
const onix = new Car('Chevrolet', 'red', 4);
onix.turnOn();
onix.speedUp(60);
onix.turnOff();
console.log(onix);
