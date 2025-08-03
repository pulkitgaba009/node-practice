// // Problem : leads to redundancy of data
// const stu1 = {
//   name: "adam",
//   age: 25,
//   marks: 95,
//   getMarks: function () {
//     return this.marks;
//   },
// };

// const stu2 = {
//   name: "rajat",
//   age: 25,
//   marks: 11,
//   getMarks: function () {
//     return this.marks;
//   },
// };

// const stu3 = {
//   name: "raju",
//   age: 78,
//   marks: 96,
//   getMarks: function () {
//     return this.marks;
//   },
// };

// // factory function
// function PersonMaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`)
//         }
//     }
//     return person
// }

// let p1 = PersonMaker("Pulkit","18");
// p1.talk();

// let p2 = PersonMaker("Rulkit","18");
// p2.talk();

// // // New Operator
// function Person(name,age){
//     this.name = name;
//     this.age = age;

//     Person.prototype.talk = function(){
//         console.log(`Hi my name is ${this.name}`)
//     }
// }

// let p1 = new Person("adam",25);
// let p2 = new Person("Eve",45);
// p1.talk()

// // class
// class Person{
//     constructor (name,age){
//         this.name = name ;
//         this.age = age ;
//     }

//     talk(){
//         console.log(`Hi my name is ${this.name}`)
//     }
// }

// let p1 = new Person("adam",25);
// p1.talk();

// Inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); // Call the parent class constructor
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // Call the parent class constructor
    this.subject = subject;
  }

  talk() {
    console.log(`Hi I am ${this.name}, and I teach ${this.subject}`);
  }
}

let s1 = new Student("Pulkit", 18, 92);
let t1 = new Teacher("Noopur", 30, "AI");

s1.talk(); // Hi my name is Pulkit
t1.talk(); // Hi I am Noopur, and I teach AI