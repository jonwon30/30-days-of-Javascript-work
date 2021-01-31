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


let landArray2 = [];
let doesNotContainLand2 = [];

let countryFunc2 = function (country) {
  for (i = 0; i < countries2.length; i++) {
    x = (countries2[i]).toUpperCase()
    if (x.includes(country.toUpperCase())) {
      landArray2.push(x);
    } else {
      doesNotContainLand2.push(x)
}
} 
console.log(`These countries that end with ia: ${(landArray2.join(" & "))}`);
console.log(`These countries do not end with ia: ${(doesNotContainLand2.join(" "))}`);
}
countryFunc2("ia");

// Using the above countries array, find the country containing the biggest number of characters.

let arrayCountriesLength3 = [];

for (i = 0; i < countries2.length; i++) {
  x = countries2[i].length
  arrayCountriesLength3.push(x);
};
g = Math.max(...arrayCountriesLength3);


for (i = 0; i < countries2.length; i++) {
  x = countries2[i].length
  if (x == g) {
  console.log(`this is the biggest named country ${countries[i]} with ${g} characters`)
  }
}

// Using the above countries array, find the country containing only 5 characters.

for (i = 0; i < countries2.length; i++) {
  x = countries2[i].length
  if (x == 5) {
  console.log(`this country ${countries[i]} has 5 characters`)
  }
}

/*
let prompt1 = prompt("enter a number here");
prompt4 = parseInt(prompt1);
let prompt2 = prompt("enter a number here");
prompt5 = parseInt(prompt2);

let calculator = function () {
  let total = prompt4 / prompt5;
  alert(total);
}

calculator(); */

// Find the longest word in the webTechs array

let webTechs2 = [];

for (i = 0; i < webTechs.length; i++) {
  x = webTechs[i].length
  webTechs2.push(x);
};
let webt = Math.max(...webTechs2);

for (i = 0; i < webTechs.length; i++) {
  x = webTechs[i].length
  if (x == webt) {
  console.log(`this is the biggest webTech company ${webTechs[i]} with ${webt} characters`)
  }
}

// Use the webTechs array to create the following array of arrays:
// "HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let webTechs3 = []
for (i = 0; i < webTechs.length; i++) {
  y = webTechs[i]
  x = webTechs[i].length
  webTechs3.push([y, x])
  
}
console.log(webTechs3);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack 

let mernAbb = []
for (const tech of mernStack) {
  mernAbb.push(tech[0]);
}

console.log(mernAbb.join(""))

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for (const comp of webTechs) {
  console.log(comp);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruit = ['banana', 'orange', 'mango', 'lemon'];
for( i = fruit.length - 1; i >= 0; i--) {
    console.log(fruit[i]);
}

// Print all the elements of array as shown below.

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

var newArr = [];
for(var i = 0; i < fullStack.length; i++)
{ newArr = newArr.concat(fullStack[i]); 
}

for(var i = 0; i < newArr.length; i++)
{ 
  console.log(newArr[i]); 
}

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let numbersEven = 0
numbersOdd = 0
let evensArray = [];
let oddArray = [];

for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    numbersEven = i;
    evensArray.push(numbersEven);
  } else {
    numbersOdd = i;
    oddArray.push(numbersOdd);
  }
}

console.log(evensArray)
console.log(oddArray)

let sumEvens = 0
for(let i = 0; i < evensArray.length; i++){
  sumEvens += evensArray[i]
}
console.log(sumEvens)

let sumOdds = 0
for(let i = 0; i < oddArray.length; i++){
  sumOdds += oddArray[i]  
}
console.log(sumOdds);

let oddsEvensArray = [];
oddsEvensArray.push(sumOdds, sumEvens);
console.log(oddsEvensArray)

/*

Extract all the countries containing only four characters from the countries array and print it as array

*/

const countriesBig = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

for (i = 0; i < countriesBig.length; i++) {
  x = countriesBig[i].length
  if (x == 4) {
  console.log(`this country ${countriesBig[i]} has 4 characters`)
  }
}


//  Extract all the countries containing two or more words from the countries array and print it as array

let containsASpace = [];

let countriesBigFunction = function () {
  for (i = 0; i < countriesBig.length; i++) {
    x = (countriesBig[i])
    if (x.includes(" ")) {
      containsASpace.push(x);
    } 
} 
console.log(`These countries have a space:- ${containsASpace}`);
}
countriesBigFunction();

// Reverse the countries array and capitalize each country and stored it as an array */
let countriesBig2 = [];
for (i = countriesBig.length - 1; i > 0; i--) {
  countriesBig2.push(countriesBig[i].toUpperCase())
}
console.log(countriesBig2)

/*
Copy countries array(Avoid mutation)

Arrays are mutable. Create a copy of array which does not change the original  Sort the copied array and store in a variable sortedCountries
*/ 

let countriesNewArray = [];
countriesNewArray.push(countries2);
let sortedCountries = countriesNewArray.sort();

console.log(sortedCountries)

// Sort the webTechs array and mernStack array
let webTechsSort = webTechs.sort();
let mernStackSort = mernStack.sort();

console.log(webTechsSort);
console.log(mernStackSort);

//Extract all the countries contain the word 'land' from the countries array and // print it as array  --- done already.

// Find the country containing the hightest number of characters in the countries array --- done

//  Extract all the countries contain the word 'land' from the countries array and print it as array -- done
