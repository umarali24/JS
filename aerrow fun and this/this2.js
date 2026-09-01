let obj1 = {
    name: "Umar",
    age: 22,
    city: "Rawalpindi",
    fun: function() {
        let name2 = "Ali";
        console.log(this);
    }
}

// obj1.fun() 

function fun2() {
    let obj1 = {
    name: "Umar",
    age: 22,
    city: "Rawalpindi",
    fun: function() {
            let name2 = "Ali";
            console.log(this);
        }
    };obj1.fun()
}

// fun2() 

function fun3() {
    let name = "Ali"
    let age = 21
    let mood = true
    function fun4() {
        // let name = "Umar"
        console.log(this);
    }
    console.log(this);
    fun4()
}
fun3()