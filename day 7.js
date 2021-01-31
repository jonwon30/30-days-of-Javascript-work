function sumAllNumsx() {
    console.log(arguments)
   }
   
   sumAllNumsx(1, 2, 3, 4)
   // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

   function sumAllNumsy() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNumsy(1, 2, 3, 4)) // 10
  console.log(sumAllNumsy(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNumsy(15, 20, 30, 25, 10, 33, 40))  // 173

  const sumAllNumsm = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use an a parameter followed by spread operator
    console.log(args)
   }
   
   sumAllNumsm(1, 2, 3, 4)
   // [1, 2, 3, 4]


   const sumAllNumsb = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  
  console.log(sumAllNumsb(1, 2, 3, 4)) // 10
  console.log(sumAllNumsb(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNumsb(15, 20, 30, 25, 10, 33, 40))  // 173


 
 
  let squaredNumx = (function(n) {
    return n * n
  })(5)
  
  console.log(squaredNumx)

  let squaredNumy = (function(n) {
    return n + n
  })
  (15)
  
  console.log(squaredNumy)


  function squarem(n) {
    return n * n
  }
  console.log(squarem(2))
  
  const squarex = n => {
    return n * n
  }
  console.log(squarex(2))  // -> 4
  
  // if we have only one line in the code block, it can be written as follows, explicit return
  const square = n => n * n  // -> 4

// next lesson
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

  const changeToUpperCase = array => {
    const newArr = []
    for (const country of array) {
      newArr.push(country.toUpperCase())
    }
    return newArr
  }
  
  console.log(changeToUpperCase(countries))
  
  const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  const printFullName2 = (firstName, middleName, lastName) => `${firstName} ${middleName} ${lastName}`

  console.log(printFullName('John', 'Stapylton'))
  console.log(printFullName2('J',"B", 'S'))

  // next lesson

  function greetings(firstName = 'John', lastName = "Stapylton") {
    let message = `${firstName} ${lastName}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('John', "the main Man"))


  function calculateAge(birthYear, currentYear = 2021) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(1912));

//next lesson

  function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N'
    return weight
  }
  
  console.log('Weight of an object in Newton: ', weightOfObject(100)) 
  console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62))

  // excercises

  // Declare a function fullName and it print out your full name.

  function fullNameJBS (firstName, lastName) {
      fullName = firstName + " " + lastName
      return fullName
  }

  console.log(fullNameJBS("John","Stapylton"))

  // Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name. -- see above

 // Declare a function addNumbers and it takes two two parameters and it returns sum.

 function addNumbersx (a, b){
     total = a * b
     return total
 }
 console.log(addNumbersx(5,5))


 // An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

 function rectangleArea (length, width) {
     area = length * width
     return area
 }
 console.log(rectangleArea(10,5))

 // A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

 function rectangleParim (length, width) {
    parim = (2 * (length + width))
    return parim
}
console.log(rectangleParim(2,2))


// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function rectangleVolume (length, width, height) {
    volume = (length * width * height)
    return volume
}
console.log(rectangleVolume(2,2,2))

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function circleArea (r) {
    area = Math.PI * r * r;
    return area
}
console.log(circleArea(3).toFixed(2))

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circleCircum (r) {
    area = 2 * Math.PI * r;
    return area
}
console.log(circleCircum(3).toFixed(2));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityFunction (mass, volume) {
    density = mass / volume;
    return density
}
console.log(densityFunction(100, 10));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

let distance = 100
let time = 2

function speedFunction (x, y) {
    totalSpeed = distance / time;
    return totalSpeed
}
console.log(`Travelling ${distance} miles in ${time} hours = ${speedFunction (distance, time).toFixed(0)} miles per hour`);


// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function waightOfSubstance (mass, gravity) {
    waight = mass * gravity;
    return waight
}

console.log(waightOfSubstance(100, 1.97));