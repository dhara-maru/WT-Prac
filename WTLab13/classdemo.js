class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
     greet() {
        console.log(`Hello i am ${this.name} and i am ${this.age} years old`);
        
    }
}

const p1 = new Person("Dhara", 20)
p1.greet();