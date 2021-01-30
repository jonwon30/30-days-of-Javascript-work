const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/* 
for(i - 0; i < 10; i++){

Iterate 0 to 10 using for loop, do the same using while and do while loop
*/
// for loop
for(i = 0; i <= 10; i++) {
    console.log(i)
}

// do while loop
let a = 0;
do {console.log(a), a++} while (a <= 10);


// while loop
let whileTest = 0;
while (whileTest <= 10) {
  console.log(whileTest)
  whileTest++
}


/* 
Iterate 10 to 0 using for loop, do the same using while and do while loop
*/
// for loop 10 to 0
for(i = 10; i >= 0; i--) {
  console.log(i)
}

// do loop 10 to 0
let j = 10;
do {console.log(j), j--} while (j >= 0);


// while loop 10 to 0
let whileTest2 = 10;
while (whileTest2 >= 0) {
console.log(whileTest2)
whileTest2--
}

/* 
Iterate 0 to n using for loop
*/
/* 
Write a loop that makes the following pattern using console.log(): 
*/
let patternArray = ["#","##", "###", "####", "#####", "######", "#######", "########","#########"];
for (i = 0; i < patternArray.length; i++) {
  console.log(patternArray[i]);
}

// Use loop to print the following pattern:/
for (i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} =` + " " + (i * i));
}

// Using loop print the following pattern

for (i = 0; i <= 10; i++) {
  console.log(`${i} x ${(i * i)} =` + " " + `${(i * i * i)}`);
}

// Exercises: Level 2


// Hexadecimal:	0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F
// Decimal:	    0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15


function makeid(length) {
  var result           = '';
  var characters ='0123456789ABCDEF';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return '#' + result;
}
console.log(makeid(5));

// rgb random
let rgb1 = (Math.floor(Math.random() * 255) + 0);
let rgb2 = (Math.floor(Math.random() * 255) + 0);;
let rgb3 = (Math.floor(Math.random() * 255) + 0);;
console.log("rgb\(" + rgb1 +",", + rgb2 +",", + rgb3+"\)");

// Using the above countries array, create the following new array.
 const countries2 = [
'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya'
];

let newCountriesArray = [];
for (h = 0; h < countries2.length; h++) {
  newCountriesArray.push(countries2[h].toUpperCase())
}
console.log(newCountriesArray);

let arrayCountriesLength = []
for (i = 0; i < countries2.length; i++) {
  x = countries2[i].length
  arrayCountriesLength.push(x);
}
console.log(arrayCountriesLength);


let arrayCountriesLength2  = []
for (i = 0; i < countries2.length; i++) {
  y = countries2[i].toUpperCase()
  arrayCountriesLength2.push(y)
  c = countries2[i].slice(0,3).toUpperCase();
  arrayCountriesLength2.push(c);
  x = countries2[i].length
  arrayCountriesLength2.push(x)
}
console.log(arrayCountriesLength2)

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let landArray = [];
let doesNotContainLand = [];

let countryFunc = function (country) {
  for (i = 0; i < countries2.length; i++) {
    x = (countries2[i])
    if (x.includes("land")) {
      landArray.push(x);
    } else {
      doesNotContainLand.push(x)
}
} 
console.log(`These countries have land:- ${(landArray.join(" & "))}`);
console.log(`These countries do not have land:- ${(doesNotContainLand.join(", "))}`);
}
countryFunc();

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.