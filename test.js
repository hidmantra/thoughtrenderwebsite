export class Person {
    // when accessing the age property return the private _age
    // getters and setters are part of the JavaScript Class syntax
    get age() {
        return this._age;
    }
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    }
    // Only this method can update the private _age
    addOneYear() {
        this._age = this._age + 1;
    }
}
let me = new Person('Derev', 'Diggs', 48);
me.addOneYear();
console.log(me.age);
