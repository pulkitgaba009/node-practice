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

class Students {
  constructor(name, age, marks) {
    this.marks = marks;
  }
}

class Teacher {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  talk() {
    console.log(`Hi I am ${this.n}`);
  }
}
