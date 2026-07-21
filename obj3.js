o1 = {name:"umer", age: 23, status: "lost", city:"Rawalpindi", country:"Pakistan"}
// const {name,...others} = o1
const {status: con,...others} = o1
// console.log(name)
console.log(con)
console.log(others)

account = {fullname:{
    firstName:"Umer", lastName:"Ali"
}, age: 23, status: "lost", city:"Rawalpindi"}

const {fullname:{firstName, lastName}, ...other} = account
console.log(firstName)
console.log(other)