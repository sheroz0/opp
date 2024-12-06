let arrays = [
    42,
    true,
    "Hello, World!",
    {
      name: "John",
      age: 25,
      isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
  ];
  
  let stringRepresentation = arrays.map(String);
  console.log("Q1:", stringRepresentation);
  
  let numberElements = arrays.filter(element => typeof element === "number");
  console.log("Q2:", numberElements);
  

  console.log("Q3:");
  arrays.forEach(element => console.log(typeof element));
  

  let sumOfNumbers = arrays
  .filter(element => typeof element === "number")
  .reduce((acc, num) => acc + num, 0);
console.log("Q4:", sumOfNumbers);

let firstBoolean = arrays.find(element => typeof element === "boolean");
console.log("Q5:", firstBoolean);


let firstObjectIndex = arrays.findIndex(element => typeof element === "object" && !Array.isArray(element));
console.log("Q6:", firstObjectIndex);

let containsNumbers = arrays.some(element => typeof element === "number");
console.log("Q7:", containsNumbers);


let allStrings = arrays.every(element => typeof element === "string");
console.log("Q8:", allStrings);
