let aerow = ()=>{
    console.log(this);
}

aerow() // prints {}

let obj1 = {
    name: "Umar",
    age: 22,
    fun: function() {
        let obj2={
            name: "Ali",
            age: 21,
            func : ()=>{
                console.log(this);
            }
        }
        obj2.func()
    }
}
obj1.fun() // prints {}