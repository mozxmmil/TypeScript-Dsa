//@ts-ignore
// let isdivisible = (input:int):boolean=>{
//     return (input % 4 === 0)
// }
// let isdivisible = (input:int):boole

// interface myobj {
//   name: string;
//   email: string;
// }
// const person: myobj = {
//   name: "mozammil",
//   email: "mozammi@gmail.com",
// };
// let key: string = "name";
// console.log(person[key as keyof typeof person]);

// ****************************************************************

/// utilty classes

// partial<type>
// Required<Type>
// Readonly<Type>

// type User ={
//   name?:string,
//   email:string
// }

// const user:Readonly<User> ={
// name:'mozammil',
// email:"mozammil"
// }

// user.name="mahtab"

// Generic
// type User ={
//   name:string,
//   email:string,
// }
// const person:User ={
//   name:'mozammil',
//   email:"mozammil234"
// }

// const getUserDeatail = <T>(n: T): T => {
//   return (n);
// };
// console.log(getUserDeatail<User>(person))
// interface UserData {
//   name: string;
//   email: string;
//   age: number;
// }

// const user: UserData[] = [
//   {
//     name: "mozammil",
//     email: "<EMAIL>",
//     age: 23,
//   },
//   {
//     name: "mahtab",
//     email: "<EMAIL>",
//     age: 23,
//   },
// ];

// const getUserDeatail = <T, k extends keyof T>(
//   user: T[],
//   property: k,
//   value: T[k]
// ) => {
//   return user.filter((itme) => itme[property]===value);
// };

// const getans = getUserDeatail(user,"name","mahtab")
// console.log(getans)

// ******************************************************************************

//find is prime number

let isprime = 3;
let primecheck: boolean = false;
console.log(primecheck);
for (let i = 2; i < 7; i++) {
  if (isprime % i === 0) {
    primecheck = true;
    break;
  }
}

if (!primecheck) {
  console.log("prime");
} else {
  console.log("not a prime num");
}
