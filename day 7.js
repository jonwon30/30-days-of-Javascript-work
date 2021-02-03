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

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

function temperatureinOf (oC) {
  oF = (oC * 9 / 5) + 32;
  return oF
}
console.log(temperatureinOf(6));

/*
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

function BMI (kgWaight, heightinMeters) {
  let heightSquared = heightinMeters * 2;
  let totalBMI = kgWaight / heightSquared.toFixed(2);
    if (totalBMI < 18.5) {
    return (`your BMI is ${totalBMI.toFixed(2)} which means you are underwaight`)
    } else if (totalBMI >= 18.5 && totalBMI <= 24.9){
    return (`your BMI is ${totalBMI.toFixed(2)} which means you are normal waight`)
    } else if (totalBMI > 24.9 && totalBMI <= 29.9){
      return (`your BMI is ${totalBMI.toFixed(2)} which means you are overwaight`)
      } else {
        return (`your BMI is ${totalBMI.toFixed(2)} which means your are obese`)
      }
}
console.log(BMI(120, 1.77));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason (month) {
  switch (month) {
    case "December":
    case "January":
    case "February":
      console.log("Winter")
      break;
    case "March":
    case "April":
    case "May":
      console.log("Spring")
      break;
    case "June":
    case "July":
    case "August":
      console.log("Summer")
      break;
    case "September":
    case "October":
    case "November":
      console.log("Autumn")
  }
}
checkSeason("July");

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax (x, y, z) {
  console.log(Math.max(x,y,z))
};
findMax(10,15,20)

function findMax2 (x, y, z) {
  if (x > y && x > z) {
    console.log(`${x} is greater than ${y} and ${z}`)
  }  else if (y > x && y > z) {
    console.log(`${y} is greater than ${x} and ${z}`)
  } else {
    console.log(`${z} is greater than ${x} and ${y}`)
  }
};
findMax2(5,15,2)

// Exercises: Level 2