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
  }) (15)
  
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

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation: NOT DONE


// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.  NOT DONE

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array. 

let newArray = [1,2,3,4,5,6,7,8,9,10,20,30,40,50]

function printArray () {
  newArray.forEach(num => console.log(num));
  }
printArray()

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

let dateToday = new Date();

function newDate (date) {
  let year = parseFloat(date.getFullYear());
  let month = parseFloat(date.getMonth() +1 );
  month = ("0" + month).slice(-2);
  let date1 = date.getDate()
  date1 = ("0" + date1).slice(-2);
  let hours = date.getHours()
  let minutes = date.getMinutes()
  console.log(`${date1}/${month}/${year}  ${hours}:${minutes}` )
}
newDate(dateToday);

// Declare a function name swapValues. This function swaps value of x to y

function swapValues (x, y) {
  x = y
console.log(x,y)
}
swapValues("number 1", "number 2")

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function printArray (array1) {
  for(i = newArray.length; i > 0; i-- ) {
    console.log (newArray[i]);
  }
}
printArray(newArray);

let letterArray = ["a","b","c","d","e","f","g"];

function printArray2 (array1) {
  for(i = letterArray.length; i > 0; i-- ) {
    console.log (letterArray[i]);
  }
}
printArray2(letterArray);


// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray (array1) {
  let x = letterArray.forEach(letter => console.log(letter.toUpperCase()));
  }
  capitalizeArray(letterArray)

  // Declare a function name addItem. It takes an item parameter and it returns an array after adding the item


    let newArray2 = []

    function addItem(addItem) {
      newArray2.push(addItem)
      console.log(newArray2)
    }
    addItem("pig")
    addItem("fish")
    addItem("chicken")

    // Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item


    let newArray3 = ["item1","item2","item3","item4"]

    function removeItem(splice1, splice2) {
      newArray3.splice(splice1, splice2)
    }
    removeItem(1, 1)
    console.log(newArray3)

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.


const numbers2 = [1, 2, 3, 4, 5]
const numbers3 = [10,10,10,10,10,10,10,10,10,10,10,10]
let sum = 0
let sum2 = 0
function sumOfNumbers (num) {
  for(let i = 0; i < num.length; i++){
  sum  = sum + num[i]  // can be shorten, sum += numbers[i]
  }
  console.log(sum)
}

// sumOfNumbers(numbers2)
sumOfNumbers(numbers3)

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

let numbersEven = 0
numbersOdd = 0
let evensArray = [];
let oddArray = [];
let sumEvens = 0
let sumOdds = 0

function sumOfOdds (num) {
  for (i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      numbersEven = i;
      evensArray.push(numbersEven);
  } else {
      numbersOdd = i;
      oddArray.push(numbersOdd);
  }
  }
  for(let i = 0; i < evensArray.length; i++){
  sumEvens += evensArray[i]
  } 
  for(let i = 0; i < oddArray.length; i++){
  sumOdds += oddArray[i]  
  }
    console.log(sumOdds);
    console.log(sumEvens)
} 

sumOfOdds(100)
console.log(evensArray)
console.log(oddArray)

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensCount = 0
oddsCount = 0

function evensAndOdds (num4) 
  { for (i = 0; i <= num4; i++) 
    { if (i % 2 === 0) 
      { evensCount++;
    } else 
  { oddsCount++;
    }
    }
    console.log(evensCount - 1)
    console.log(oddsCount - 1)
    }

evensAndOdds(100)

// Write a function which takes any number of arguments and return the sum of the arguments - already done. 0-255 168.212.226.204


// Writ a function which generates a randomUserIp

function newIp () {
  let ipNew1 = (Math.floor(Math.random() * 255) + 0);
  let ipNew2 = (Math.floor(Math.random() * 255) + 0);
  let ipNew3 = (Math.floor(Math.random() * 255) + 0);
  let ipNew4 = (Math.floor(Math.random() * 255) + 0);
    console.log(`New IP Address is: ${ipNew1}.${ipNew2}.${ipNew3}.${ipNew4}`)
}
newIp()
newIp()

// Write a function which generates a randomMacAddress.. The MAC address is a string of usually six sets of two-digits or characters, separated by colons.

function makeid() {
  var result        = '';
  var result2       = '';
  var result3       = '';
  var result4       = '';
  var result5       = '';
  var result6       = '';
  var characters ='0123456789ABCDEF'; // Hexadecimal
  var charactersLength = characters.length;
  for ( var i = 0; i < 2; i++ ) {
     result  += characters.charAt(Math.floor(Math.random() * charactersLength));
     result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
     result3 += characters.charAt(Math.floor(Math.random() * charactersLength));
     result4 += characters.charAt(Math.floor(Math.random() * charactersLength));
     result5 += characters.charAt(Math.floor(Math.random() * charactersLength));
     result6 += characters.charAt(Math.floor(Math.random() * charactersLength));
  } 
  return (`New Mac Address is: ${result}:${result2}:${result3}:${result4}:${result5}:${result6}`);
}
console.log(makeid());

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator(length) {
  var result        = '';
  var characters ='0123456789ABCDEF'; // Hexadecimal
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result  += characters.charAt(Math.floor(Math.random() * charactersLength));

  } 
  return (`New hexadecimal number is: #${result}`);
}
console.log(randomHexaNumberGenerator(6));

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator() {
  var result        = '';
  var characters ='0123456789ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz@!'; // Hexadecimal
  var charactersLength = characters.length;
  for ( var i = 0; i < 7; i++ ) {
     result  += characters.charAt(Math.floor(Math.random() * charactersLength));
  } 
  return (`Random Password is: ${result}`);
}
// console.log(userIdGenerator(6));

// Exercises: Level 3
// Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

//let firstNum = prompt("enter the number of characters for your random password, recommended to use 6 or more")
// firstNum = parseInt(firstNum);
// let secondNum = prompt("how many passwords do you want to generate? - Max 4")
// secondNum = parseInt(secondNum)

function userIdGeneratedByUser(length, num) {
  var result        = '';
  var result2 = '';
  var result3 = '';
  var result4 = '';
  var characters ='0123456789ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz@!'; // Hexadecimal
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result  += characters.charAt(Math.floor(Math.random() * charactersLength));
     let newResult = result.repeat(num)
     result2  += characters.charAt(Math.floor(Math.random() * charactersLength));
     result3  += characters.charAt(Math.floor(Math.random() * charactersLength));
     result4  += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  switch (num) {
    case 1:
      return (`1st random Password is: ${result}`)
    case 2:
      return (`1st random Password is: ${result}\nThe 2nd Password is: ${result2}`)
    case 3:
      return (`1st random Password is: ${result}\nThe 2nd Password is: ${result2}\nThe 3rd Password is: ${result3}`)
    case 4:
      return (`1st random Password is: ${result}.\nThe 2nd Password is ${result2}\nThe 3rd Password is: ${result3}.\nThe 4th Password is: ${result4}`)
    default:
      return ("too many numbers added")
  } 
}
console.log(userIdGeneratedByUser());

// rite a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator () {
  let rgb = (Math.floor(Math.random() * 255) + 0);
  return (rgb);
}
let red = (rgbColorGenerator ());
let green = (rgbColorGenerator ());
let blue = (rgbColorGenerator ());
console.log(`R${red}, G${green}, B${blue}`)

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors() {
  let result        = '';
  let characters ='0123456789ABCDEF'; // Hexadecimal
  let charactersLength = characters.length;

    for ( var i = 0; i < 6; i++ ) {
     result  += characters.charAt(Math.floor(Math.random() * charactersLength));
    } 
    return result 
}

let randomHexColor = arrayOfHexaColors()
// let randomHexColor2 = arrayOfHexaColors()

console.log("#" + randomHexColor)

// Write a function arrayOfRgbColors which return any number of RGB colors in an array. see above


// Write a function convertHexaToRgb which converts hex  color to rgb and it returns an rgb color.


// Hexadecimal:	0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F
// Decimal:	    0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

// this is not my code, though amended to fit to module.
function convertHexaToRgb(hex) {
  hex = hex.replace(/#/g, '');

  if (hex.length === 3) {
      hex = hex.split('').map(function (hex) {
          return hex + hex;
      }).join('');
  }

  var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex);
  if (result) {
      var red = parseInt(result[1], 16);
      var green = parseInt(result[2], 16);
      var blue = parseInt(result[3], 16);

      return [red, green, blue];
  } else {
      return null;
  }
}
console.log(convertHexaToRgb(randomHexColor));
let rgbRandom = convertHexaToRgb(randomHexColor)

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
// Again this is not my code - located at https://www.html-code-generator.com/javascript/color-converter-script.

function convertRgbToHexa(rgb) {
  // Srgb = rgb.match(/^rgba?\(\s?(\d+),?\s?(\d+),?\s?(\d+),?\s?\/?\s?(\d?\.?\d+|\d+)%?\)$/i);
  let hex = ''; 
  if(rgb) {
    var red = rgb[1] < 0 ? 0 : rgb[1] > 255 ? 255: rgb[1];
    var green = rgb[2] < 0 ? 0 : rgb[2] > 255 ? 255: rgb[2];
    var blue = rgb[3] < 0 ? 0 : rgb[3] > 255 ? 255: rgb[3];

    hex = "#" +
    ("0" + parseInt(red, 10).toString(16)).slice(-2) +
    ("0" + parseInt(green, 10).toString(16)).slice(-2) +
    ("0" + parseInt(blue, 10).toString(16)).slice(-2)
  }
  return hex;
}

// Sconsole.log(convertRgbToHexa(rgbRandom));

// Write a function generateColors which can generate any number of hexa or rgb colors. // RGB done, just need to do Hex.

var randomColor = '#'+Math.floor(Math.random()*16777216).toString(16);


function repeatStringNumTimes(rgb, num) {
  var repeatedRgb = "";

   while (num > 0) {
    rgb = ' rgb('+Math.floor(Math.random()*16777216).toString(16) +"),"
    repeatedRgb = repeatedRgb + rgb
    num--;
  }
    return (repeatedRgb);
  }
console.log(repeatStringNumTimes(`${randomColor}  ` ,10));
console.log(repeatStringNumTimes(`${randomColor}  ` ,4));

// cant get this to work, will try later
function randomColorHex (num) {
  let color = '';
  let hexArray = []
  
    for (let i = 0; i < 6; i++) { 
      randomC = (Math.random() * 16 | 0).toString(16);
      color += randomC;
    }
      while (num > 0) {
      hexArray.push('#' + color)
      num--
    }  return hexArray
} 
console.log(randomColorHex(4))
