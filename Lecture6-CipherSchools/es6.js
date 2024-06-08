var x = 15;

{
    let x = 5;
    console.log(x);
}

console.log(x);

{
    const x = 5
    console.log(x);
    x = 6;
    console.log(x);
}

var x = function (x, y) {
    return x + y;
}

const x = function (x, y) {
    return x + y;
}

console.log(x(5, 6));

const x = (x, y) => x + y;

console.log(x(5, 6));

const q1 = ["Jan", "Feb", "Mar"]
const q2 = ["Apr", "May", "Jun"]
const q3 = ["Jul", "Aug", "Sep"]
const q4 = ["Oct", "Nov", "Dec"]

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);

const myN = [25, 12, 50, 77, -1];
let maxValue = Math.max(myN);

console.log(maxValue);


const myNumbers = [25, 12, 50, 77, -1];
let sum = 0;
for (let num of myNumbers) {
    sum = sum + num;
}

const name = "CipherSchools";

let text = "";
for (let ch of name) {
    text += ch + " ";
}

console.log(text);

const fruits = new Map([["apples", 500], ["bananas", 300], ["Oranges", 200]]);
console.log(fruits);
console.log(fruits.get("oranges"));

const letters = new Set()

letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters)
console.log(sum);


class Car {
    constructor(name, mfgYear) {
        this.name = name;
        this.mfgYear = mfgYear;
    }
}

const myCar1 = new Car("Mercedes", 2022);
const myCar2 = new Car("Porsche", 2020);
console.log(myCar1, myCar2);

const Function = () => {
    return Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("This is inside Promise");
            resolve();
        }, 2000);
    });
};

myFunction()
    .then(() => {
        console.log("Resolved");
    }).catch(() => {
        consle.error("Rejected");
    })

const person = {
    FirstName: "John",
    LastName: "Doe",
    Age: 30,
    EyeColor: "Blue",
};

let id = Symbol("id");
person[id] = 140111;
console.log(person);

let addTwoNumbers = (a, b) => a + b;
console.log(addTwoNumbers(10, 11));

let addTwoNumbers1 = (a, b = 10) => a + b;
console.log(addTwoNumbers(10));

let addNumbers2 = (...args) => {
    console.log(args);
};

console.log(addNumbers(10, 14, 16, 22, 1, 45));

const addNumbers = (...args) => {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
};

console.log(addNumbers(10, 14, 16, 22, 1, 45));