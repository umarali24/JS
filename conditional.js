obj1  = {name: "Umar", age: 22, city: "Rawalpindi",
    fun: function() {
        let obj2 = {
            fun2 : () => {
                if(this===obj1){
                    console.log("this is equal to obj1");
                }
            },
            fun3 : function() {
                if(this===obj1){
                    console.log("this is equal to obj1");
                }
                else if(this===obj2){
                    console.log("this is equal to obj2");
                }
            }
        }
        obj2.fun2();
        obj2.fun3();
    }
}

obj1.fun()

///next example

let arr = [1,2,3,4,5,6,7,8,9,10]
function fun1(a,arr) {
    console.log(typeof arr);
    console.log(arr);
    console.log(typeof a);
    console.log(a);
}
fun1(arr[9],arr.slice(0,9)) // object

function fun2(...arr) {
    console.log(typeof arr);
    console.log(arr);
    if (arr.length===3) {
        console.log("this is equal to 3");
    }
}
obj = {name: "Umar", age: 22, city: "Rawalpindi",}
fun2(obj.name,obj.age,obj.city) // object

