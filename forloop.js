arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
s=0
for (let i = 0; i < arr.length; i++) {
    s += arr[i];
}
if (s%2===0) {
    console.log("this is even");
} else {
    console.log("this is odd");
}

obj = {name: "Umar", age: 22, city: "Rawalpindi",}
obj["rupees"] = s
console.log(obj)