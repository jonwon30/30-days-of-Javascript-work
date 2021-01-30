let newA = Array(); // creates new array
let newA2 = []; // creates new array
let newA3 = [5]; // creates new array

let mixedDataTypes = [[1, "sda", 3, "kjkj",2323],[3,"jkjkj",5],[3,"jkjkj",5],[3,"jkjkj",5]];
console.log(mixedDataTypes[0].length);

let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(companies);
console.log(companies.length);
let companiesLastIndex = companies.length-1
console.log(companies[0] + " " + companies[3] + " " + companies[companiesLastIndex]);

// test 10 & 11
console.log(companies.join(", "));

// test 11 Change each company name to uppercase one by one and print them out

for (let i=0; i < companies.length; i++) {
    let companiesLower = companies[i].toLowerCase();
    console.log(companiesLower);
};

let toUpCase = function(){
    for (let j=0; j < companies.length; j++) {
        let companiesLower = companies[j].toUpperCase();
        console.log(companiesLower);
    };
}
toUpCase();

// 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`the companies ${companies.join(", ")} are big IT companies`);


let y = ("Amazon");;
let check = function (x) {
    if (companies.includes(y)) {
        console.log(`the companies ${y} is part of the larger IT companies`);
    } else {
        console.log("is not part of them")
    }
}
check(companies);

// 14 Filter out companies which have more than one 'o' without the filter method // stuck cant do it.

// 15 Sort the array using sort() method
let companiesSort = companies.sort()
console.log(companiesSort);

// 16 Reverse the array using reverse() method

let companiesRevSort = companies.reverse()
console.log(companiesRevSort);

//17 Slice out the first 3 companies from the array
console.log(companies.slice(0,3))

// 18 Slice out the last 3 companies from the array
console.log(companies.slice(companies.length-3,))

//19 Remove the first IT company from the array
let CompaniesFirst = companies.shift();
console.log(CompaniesFirst)
//20 Remove the middle IT company or companies from the array
let CompaniesMiddle = companies.splice(3,1);
console.log(CompaniesMiddle)
//20 Remove the last IT company from the array
let CompaniesLast = companies.pop();
console.log(CompaniesLast)
//20 Remove all IT companies
let CompaniesAllRemove = companies.splice(0,4);
console.log(companies)

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
var punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var punctuationlessFinal = punctuationless.replace(/\s{2,}/g," ");

const words = punctuationlessFinal.split(' ')
console.log(words);
console.log(words.length);

/* add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('meat');
console.log(shoppingCart); 
shoppingCart.push('Sugar');
console.log(shoppingCart);
shoppingCart.splice(4,1);
console.log(shoppingCart);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] 
let eth = ("Ethiopia");
let countryFunc = function (country) {
    if (countries.includes(eth)) {
        console.log(`ETHIOPIA`);
    } else {
        countries.push(eth);
        console.log(`not included so added ${eth} to ${countries}`);
    }
}
countryFunc(countries);

// up to question 5 exercise 1

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let companies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(companies1);
let companiesSass = companies1.indexOf('Sass')
if(companiesSass != -1){
    console.log('This does so not added to the end')  
 } else {
     console.log('This does not exist in the array so added now to the array')
     companies1.push("Sass");
 }
 console.log(companies1);

 let companies2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
 let movie = ("Movie");
 let facebook = ("Facebook")
 let companiesSass1 = companies2.indexOf(movie)
 companiesSass1 != -1 ? console.log(`${movie} exist in the array at ${companiesSass1}`) : console.log(`This does not exist in the array so added ${movie} to the array`)
 companies2.push("Movies");
 console.log(companies2);

 // Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const concatFrontBack = frontEnd.concat(backEnd);
console.log(concatFrontBack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(Array.isArray(ages)) // true
//let agesMin = 
// let agesMax =
/*  Sort the array and find the min and max age - done, be wary of the sort it is bugges so use the function to fix as per below.

Find the median age(one middle item or two middle items divided by two)

Find the average age(all items divided by number of items)

Find the range of the ages(max minus min)

Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array */

let ages2 = ages.sort(function(a, b){return a - b}); // sort, then allows to find largest and smalles number
console.log(ages2); 
let ages2Big = ages2[0];
console.log(ages2Big); // largest number
let ages3 = ages.sort(function(a, b){return b - a});
console.log(ages3); // sort, then allows to find largest and smalles number - sorted but in reverse order
let ages3Small = ages3[0]; // smallest number
console.log(ages3Small);

let agesRange = ages3Small - ages2Big; // range
console.log (agesRange);


    var ages6 = 0;
    for(var i = 0; i < ages2.length; i++) {
        ages6 += ages2[i];
    }
    var average = ages6 / ages.length;
    console.log(average);

let agesMedian = ages2[5] / 2;
console.log(agesMedian);



// below code sorts in random order its called the Fisher Yates shuffle
function myFunction() {
    var i, j, k;
      for (i = ages.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = ages[i]
        ages[i] = ages[j]
        ages[j] = k
      }
      console.log(ages);
    }
    myFunction();

    let ages4 = ages.sort(function(a, b){return a - b});
    console.log(ages4);

    var e = Math.abs(ages2Big+ages3Small); // to get the absolute value = + value of a number or more numbers
    console.log(e);

/*
.Slice the first ten countries from the countries array
Find the middle country(ies) in the countries array

Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half. */

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
  ]

  //let contries2Slice = countries2.//slice(0,10);
  //console.log(contries2Slice);

  let countries2Sort = countries2.sort(function(a, b){return a - b});
  let countries2Length = countries2.length / 2;
  console.log(countries2Sort);
  console.log(countries2Length);
  console.log(countries[5]);

  if (countries2.length  % 2 === 0) {
      contriesSplit1 = countries2.splice(0,5);
      console.log(contriesSplit1);
      contriesSplit2 = countries2.splice(0,5);
      console.log(contriesSplit2);
  } else {
      countries2.push("New country");
      console.log(countries2);
      contriesSplit3 = countries2.splice(0,6);
      contriesSplit4 = countries2.splice(0,6);
      console.log(contriesSplit3);
      console.log(contriesSplit4);
  }


  