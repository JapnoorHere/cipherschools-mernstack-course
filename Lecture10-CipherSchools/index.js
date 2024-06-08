let person = {
  firstname: "Japnoor",
  lastname: "Karan",
  getFullName: function () {
    return `The name of the person is ${this.firstname} ${this.lastname}`;
  },
  phoneNumber: {
    mobile: "12345",
    landline: "6789"
  },
};

console.log(person.getFullName());
console.log(person.phoneNumber.landline);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let person1 = new Person("Ram", "Sham");
let person2 = new Person("Kamlesh", "Mishra");

console.log(person1.firstName);
console.log(`${person2.firstName} ${person2.lastName}`);

const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying? ${this.isStudying}`);
  },
};

const me = Object.create(coder);
me.name = "Hello Hi";
me.isStudying = true;
me.printIntroduction();

class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }

  getDetails() {
    return `The name of the vehicle is ${this.name}`;
  }
}

let v1 = new Vehicle("Maruti", "Swift", "2500cc");
let v2 = new Vehicle("Q5", "Porsche", "3000cc");

console.log(v1.name);
console.log(v2.maker);
console.log(v1.getDetails());

function VehicleFunc(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}

VehicleFunc.prototype.getDetails = function () {
  return `The name of the vehicle is ${this.name}`;
};

let vf1 = new VehicleFunc("Creta", "Hyundai", "2500cc");
let vf2 = new VehicleFunc("Q5", "Audi", "3000cc");

console.log(vf1.name);
console.log(vf2.maker);
console.log(vf1.getDetails());

class PersonClass {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  addAddress(newAddress) {
    this.address = newAddress;
  }

  getDetails() {
    console.log(`Name is: ${this.name} and the address is: ${this.address}`);
  }
}

let personC1 = new PersonClass("Japnoor", 24);
personC1.addAddress("Jalandhar");
personC1.getDetails();

class PersonWithAccess {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    let getDetails_NoAccess = function () {
      return `The first name is: ${this.firstName} and last name is: ${this.lastName}`;
    };

    this.getDetails_Access = function () {
      return `The first name is: ${this.firstName} and last name is: ${this.lastName}`;
    };
  }
}

let personWA1 = new PersonWithAccess("Shantanu", "Shubham");

console.log(personWA1.firstName);
console.log(personWA1.getDetails_Access());

class PersonWithDetails {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getDetails_Access = function () {
      return `The first name is: ${this.firstName} and last name is: ${this.lastName}`;
    };
  }
}

class Student extends PersonWithDetails {
  constructor(firstName, lastName, rollNumber) {
    super(firstName, lastName);
    this.rollNumber = rollNumber;

    this.getDetails_Access = function () {
      return `The first name is: ${this.firstName}, last name is: ${this.lastName}, and the roll number is: ${this.rollNumber}`;
    };
  }
}

let personWD1 = new PersonWithDetails("Hello", "Hi");

console.log(personWD1.firstName);

let student1 = new Student("Monu", "Mishra", 20);
console.log(student1.getDetails_Access());
