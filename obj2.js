arr1 = [1,2,3,4,5];
arr2 = [1,2,3,4,5];
console.log(arr1===arr2);

a1 = Symbol(arr1);
a2 = Symbol(arr2);

console.log(arr1===arr2);
console.log(a2);
console.log(a2);

obj1 = {name:"Umer", age: 23, status: "lost", arr :[a1], array:arr1}
console.log(obj1)
console.log(obj1.arr)
console.log(Object.keys(obj1))
console.log(Object.values(obj1))

o2 = {name:"Umer", age: 23, status: "lost", arr :[a2], array:arr2}
o3 = {city:"Karachi", country:"Pakistan", arr :[a1], array:arr1}

o4 = {...o2,...o3}
console.log(o4)
console.log(o2)
console.log(o3)

o5 = {name:{firstName:"Umer", lastName:"Ali"}, age: 23, status: "lost", arr :[a2], array:arr2}
console.log(o5.name.firstName)