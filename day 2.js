let challange = '30 days of Javascript';
let challange3 = '30, 60 and 90 days of Javascript';
console.log(challange);

console.log(challange.length);
console.log(challange.toUpperCase());
console.log(challange.toLowerCase());
console.log(challange.substr(0,9))
console.log(challange.substring(0,9))

let challange2 = challange.length - 1
console.log(challange.slice(3,));

console.log(challange.includes(20));
console.log(challange.includes(30));

console.log(challange.split(" "));
console.log(challange.split(""));

let browsers = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(browsers.split(", "));

console.log(challange.replace("Javascript", "Python"));

console.log(challange.charAt(15));
console.log(challange.charCodeAt("J")); // ASCII CODE
console.log(challange.indexOf("a"));
console.log(challange.lastIndexOf("a"));

let word = 'You cannot end a sentence with because because because is a conjunction';

console.log(word.indexOf('because'));
console.log(word.lastIndexOf('because'))
console.log(word.search('because'))

let java = ' 30 Days Of JavaScript ';
console.log(java.trim(" "));
console.log(java.trim(""));

console.log(challange.startsWith(30));
console.log(challange.endsWith("script"));

let regEx = /\d+/

console.log(challange3.match(regEx))
console.log(challange3.match(/\d+/g))
console.log(challange3.match(regEx))
console.log(challange3.match(/\a/g))
console.log(challange.match(/\a/g))

console.log(challange.concat(" going great"))

console.log(challange.repeat(4))
/* 
Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method -------
Cut (slice) out the first word of the string using substr() or substring() method -------
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript. -------
Check if the string contains a word Script using includes() method -------
Split the string into an array using split() method 
Split the string 30 Days Of JavaScript at th e space using split() method -------
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array. -------
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method. -------

What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method. -------
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript. -------

Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' -------


Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
-------

Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true

Use match() method to find all the a’s in 30 Days Of JavaScript

Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

Use repeat() method to print 30 Days Of JavaScript 2 times
*/


// Activty 2

let quote = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.'`

let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(quote);
console.log(quote2);

console.log(typeof quote2);

let number = 10;

console.log(typeof number);

let number2 = '9.8';
let parseNumber2 = parseFloat(number2);
console.log(typeof number2);
console.log(typeof parseNumber2);
console.log(parseNumber2);

let roundParNum2 = Math.ceil(parseNumber2);
console.log (roundParNum2);

let check = 'python';
let check2 = 'jargon'
console.log(check.includes("on") && check2.includes("on"));
console.log(check.includes("r") && check2.includes("r"));

let jargon = `I hope this course is not full of jargon`;

console.log(jargon.includes("jargon"));

// Generate a random number between 0 and 255 inclusively

let randomNum = Math.random();
console.log(randomNum);

let randomNumGreat = Math.floor(randomNum * 100);
console.log(randomNumGreat);

let newNum = Math.floor((Math.random() * 50) + 50);;
console.log(newNum);

let newNum2 = Math.floor((Math.random() * 250));
console.log(newNum2);

let javas = 'JavaScript';
let num = Math.floor((Math.random() * 10));
let randomString = javas[num];
console.log(randomString);

let pattern = '1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125';

console.log(pattern);


/* Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

Check if 'on' is found in both python and jargon

I hope this course is not full of jargon. Check if jargon is in the sentence.

Generate a random number between 0 and 100 inclusively.

Generate a random number between 50 and 100 inclusively.

Generate a random number between 0 and 255 inclusively.

Access the 'JavaScript' string characters using a random number.

Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

// Activity 3 Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let newSlice = 'You cannot end a sentence with because because because is a conjunction';
console.log(newSlice.indexOf("because"))
console.log(newSlice.lastIndexOf("because"));

console.log(newSlice.substring(31, 54))

/* Exercises: Level 3

    'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
*/

let love =  'Love is the best thing in this world. Some found their love and some are still looking for their love.';

let regExd = /\love/g;
let love2 = love.toLowerCase();
let love3 = love.toUpperCase();


console.log(love.match(regExd)); // only could the lowercase L
console.log(love2.match(regExd));

console.log(love3.match(regExd)); // found none as looking for love.


let newSlice2 = 'You cannot end a sentence with because because because is a conjunction';
let pattern1 = /because/gi
console.log(newSlice2.match(pattern1));

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let clear = /\%+/gi;
let clear2 = /\@+/gi;
let clear3 = /\$+/gi;
let clear4 = /\&+/gi;
let clear5 = /\#+/gi;
let clear6 = /\;+/gi;
console.log(sentence.replace(clear, "").replace(clear2,"").replace(clear3, "").replace(clear4,"").replace(clear5,"").replace(clear6,""));

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let textEarnings = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let numEx = /\d+/gi;
let totalNum = textEarnings.match(numEx);
let totalTotal1 = totalNum[0];
let totalTotal2 = totalNum[1];
let totalTotal3 = totalNum[2];

let finalNum = Number(totalTotal1) + Number(totalTotal2) + Number(totalTotal3)
console.log(finalNum);

console.log("test")