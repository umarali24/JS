arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let num = arr.map((n) => n * 2);

console.log(num)

num = arr.map((n) => n+10).map((n) => n * 2).filter((n) => n>=30);
console.log(num)