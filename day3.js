let time = 3 < 4;
let time2 = 3 > 4;

console.log (time)
console.log (time2)
console.log(14 > 5)

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());

const allSeconds = Date.now();
console.log(allSeconds);

/*  The below code words, just stopping the prompts
let tBase = prompt("what is the Triange Base?");
let tHeight = prompt ("what is the Triangle Hight?");
let area = .5 * tBase * tHeight
console.log(tBase);
console.log(tHeight);
console.log(`The Triange Base = ${tBase} & and the Triange Hight = ${tHeight}, which means the area is (.5 * Base * Height) = ${area}`);
console.log(area);
*/

/*  The below code words, just stopping the prompts
let = side_a = prompt("Enter the size of size A of the Triangle");
let = side_b = prompt("Enter the size of size B of the Triangle");
let = side_c = prompt("Enter the size of size C of the Triangle");
const perimeter = Number(side_a) + Number(side_b) + Number(side_c);
console.log(`Side A of the Triangle is ${side_a} \nSide B of the Triangle is ${side_b}. \nSide C of the Triangle is ${side_c}.  The Perimeter of the Triange is ${perimeter}`);
*/

/*  The below code words, just stopping the prompts
let length = prompt("what is the rectangle length?");
let width = prompt("what is the rectangle width?");
const area = length * width;
const rectPerim = (length * width) * 2;
console.log(`The area of the rectangle is ${area} \nThe Perimeter of the rectangle is ${rectPerim}. \n`);
*/

/*  The below code words, just stopping the prompts
let radius = prompt("What is the circle radius?")
const area = Math.PI * radius * radius;
const circum = 2 * Math.PI * radius;
console.log("area =", area, "circumference =", circum);
*/

/*  The below code words, just stopping the prompts
let hours = prompt("How many hours?")
let rate = prompt ("How much per hour?")
const wage = Number(hours) * Number(rate);
console.log(`Weekly earnings are ${wage}`);
*/

// let name1 = prompt("What is your full name");
// let nameL = name1.length
// nameL > 7  ? console.log('Thats a long name.') : console.log('thats a short name.');

/*  The below code words, just stopping the prompts
let firstName = prompt("What is your first name?")
let lastName = prompt("What is your last name?")
let firstL = firstName.length;
let lastNL = lastName.length;
firstL > lastNL ? console.log("Your first name is longer than your last name") : console.log("Your Last name is longer than your first name");
*/

/*  The below code words, just stopping the prompts
let myAge = 250;
let yourAge = prompt("what is your age?");
const diff = myAge - yourAge
const diff2 = yourAge - myAge
myAge > yourAge ? console.log(`I am ${diff} years older than you`) : console.log(`You are ${diff2} years older than me`);
*/

/*  The below code words, just stopping the prompts
let date1 = new Date();
//console.log(date1);
let year = date1.getFullYear()
//console.log(year)
let birth = prompt("What your was you born?")
let diff = year - Number(birth);
let ageDif = 18 - diff;
diff < 18 ? console.log(`You are ${diff} and will be allowed to drive in ${ageDif} years`) : console.log(`You are ${diff} and old enough to drive`);
*/

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

/*  The below code words, just stopping the prompts
let numYears = prompt("Enter the number of years you have lived?");
let x = 100;
let difYears = x - Number(numYears);
const totalSeconds = difYears * 31536000 
console.log(`You have ${totalSeconds} seconds until you are 100 years old`); 
*/

let date4 = new Date()
let year = date4.getFullYear();
let month = date4.getMonth() + 1;
let day = date4.getDate();
let hour = date4.getHours();
let currentHours = ("0" + hour).slice(-2);
let minute = date4.getMinutes();
let currentMinutes = ("0" + minute).slice(-2);
let minute2 = parseFloat(minute);
//console.log(`${year}-${month}-${day} ${hour}:${minute}`);
//console.log(`D${day}-M${month}-Y${year} H${hour}:S${minute}`);
//console.log(`${day}/${month}/${year} ${hour}:${minute}`);

console.log(`${year}-${month}-${day} ${currentHours}:${currentMinutes}`);

/*
couldn't complete as dont understand --
Calculate the slope, x-intercept and y-intercept of y = 2x -2
Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
Compare the slope of above two questions.
Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
*/