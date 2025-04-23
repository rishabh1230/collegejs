// let dog = {
//     dogname:"javascript",
//     weight: 10,
//     age: 5,     
//     color:"brown",
//     bark:function(){
//         console.log("woof woof")
//     }
// }

// class ClassName{
//      constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2; 
//     }

// }
// let obj = new ClassName("arg1","arg2")
// console.log(obj.prop1)
// console.log(obj.prop2)

// class Dog{
//     constructor(dogname, weight, age, color) {
//         this.dogname = dogname;
//         this.weight = weight;
//         this.breed = breed;
//         this.color = color;
//     }

//  }
// let dog1 = new Dog("javascript", 10, 5, "brown")
// console.log(dog1.dogname);
// console.log(dog1.weight);


//Classes are blueprint for objects
//CLass names should start by capital letter

// class Person{
//     constructor(firstname,secondname='doe'){//default arg
//      //instance varableor object of class//   this.firstname = firstname;
//         this.secondname = secondname;
//     }
// }
// let person1 = new Person("John");
// console.log(person1.firstname);
// console.log(person1.secondname);
// console.log(person1);

//functions on a class are called methods(FUCTION ON CLASS ARE CALLED METHOD WE DONT USE FUCTION KEYWORD)



//     constructor(firstname,secondname='doe'){//default arg
//         this.firstname = firstname;
//         this.secondname = secondname;
//     }
//     greet(){
//         console.log("hello " + this.firstname + " " + this.secondname);
//     }

// }
// let person1 = new Person('john');
// person1.greet()


//                                            Classes

// class Employee {
//     constructor(name, salary, age, dateOfJoining){
//         this.name = name;
//         this.salary = salary;
//         this.age = age;
//         this.dateOfJoining = dateOfJoining;
//     }
// }
// let employee1 = new Employee("John", 50000, 25, "2022-01-01");
// console.log(employee1);



//                                             Methods

// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
// }
//     greet(){
//         console.log("Hi there! I'm", this.firstName);
//     }
// }
// let person1 = new Person("John", "Doe");
// person1.greet();



//                                            Properties

// class Person {
//     #firstName;             //to make them private, we use # with them
//     #lastName;
//     constructor(firstName, lastName){
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }
// }
// let p = new Person("John", "Doe");
// console.log(p.firstName);
// console.log(p);



//Validation if first name starts with M otherwise we add M before their name
// constructor(firstName,lastName){
//     if(firstName.starsWith('M')){
//         this.#firstName = firstName;
//     }
//     else{
//         this.#firstname = 'M' + firstName;
//     }
//     this.#lastName = lastName;
// }



//We can make getter and setter to access private data

// class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName){
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }
//     get firstName(){
//         return this.#firstName;
//     }

//     set firstName(firstName){
//         this.#firstName = firstName;
//     }

//     get lastName(){
//         return this.#lastName;
//     }

//     set lastName(lastName){
//         this.#lastName = lastName;
//     }
// }
// let p = new Person("John", "Doe");
// console.log(p.firstName);
// p.firstName = "Mario";
// console.log(p.firstName);
// console.log(p);