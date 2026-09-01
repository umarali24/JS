obj1 = { name: "John", age: 30, city: "New York", this: this };
console.log(this) // prints {}
console.log(obj1.this) // prints {}

obj2 = {name:"umar, age:22", city:"Rawalpindi",
    Th() {
        console.log(this);
    }
};

obj2.Th() // prints undefined


obj3 = {name: "Ali", age: 25, city: "Lahore",
    fun:()=> {
        console.log(this);
    }
};

obj3.fun() // prints {}