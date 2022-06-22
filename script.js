//one way to find arithmetic average

let myArr = [1, 4, 16, 64, 256];

let sum = myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4];

console.log(sum / myArr.length);

//another way to find arithmetic average

let sum2 = myArr.reduce((a, b) => a + b, 0) / myArr.length;

console.log(sum2);

//create array which contains objects with properties

let myArr2 = [
  { name: "Luka", age: 16 },
  { name: "Gio", age: 21 },
  { name: "Mari", age: 32 },
  { name: "Nini", age: 15 },
  { name: "Kakha", age: 40 },
];

console.log(myArr2);

//create object which has 5 properties

let myObject = {
  firstName: "Luka",
  lastName: "Murjikneli",
  address: ["Akhaltsikhe", ", Str. Queen Qetevan ", " N:38"],
  age: 16,
  phoneNumbers: [598, 10, 12, 20],
};

console.log(myObject);

console.log(
  "My name is " +
    myObject.firstName +
    ", My age is " +
    myObject.age +
    ", My address is " +
    myObject.address[0]
);
