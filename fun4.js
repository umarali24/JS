function sum (a, b) {
    console.log(a + b);
}

sum(5, 10);


const arrfun =  (a, ...b) => {
    console.log(a);
    console.log(b);
}

arr = [1,2,3,4,5];
arrfun(arr[0], arr);
// it has output 1 [ [ 1, 2, 3, 4, 5 ] ]
arrfun(arr[0], ...arr);
// it has output 1 [  1, 2, 3, 4, 5 ] 
arrfun(...arr);

// -------------------------------------------------------------------------------------------

obj = {name:"Umer", age: 23, status: "lost"}

const objfun =  (a, ...b) => {
    console.log(a);
    console.log(b);
}

objfun(obj.name, obj);
