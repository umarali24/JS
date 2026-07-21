// #singular and constructer Based 
obj1 = {name:"Umer", age: 23, status: "lost"}
console.log(obj1)
console.log(obj1.age)
console.log(obj1["name"])
// console.log(obj1)
// console.log(obj1)
// console.log(obj1)

obj2 = function(name, age, status){
    this.name = name;
    this.age = age;
    this.status = status;
}

// console.log(obj2) --------> this returns refrence of the function
console.log(typeof(obj2))

obj1.greet = function(){
    console.log(`Hello ${this.name} this is string interpolation inside a function of an object and this is Js object. I am ${this.age} years old and I am ${this.status}`)
}

obj1.greet()

let id1 = Symbol("userID");
let id2 = Symbol("userID");

console.log(id1 === id2);