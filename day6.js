for(let i = 0; i <= 5; i++){
    console.log(`${i} + ${i} = ${i + i}`)
  }

  for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }

const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries1.length; i++){
  newArr.push(countries1[i].toUpperCase())
}

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]
  console.log(sum)
}

const numbers1 = [1, 2, 3, 4, 5]
const newArr1 = []
let sum1 = 0
for(let i = 0; i <= numbers1.length; i++){
  newArr1.push(i * i)

}
console.log(newArr1) 

const numbers2 = [1, 2, 3, 4, 5]

for (const num2 of numbers2) {
  console.log(num2)
}

const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  for (const software of webTechs1) {
    console.log(software.toUpperCase())
  }
  
  for (const firstletter of webTechs1) {
    console.log(firstletter[0]);
  }

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

/* Iterate 0 to 10 using for loop, do the same using while and do while loop */


for (c = 0; c <=12; c++) {
    console.log(c)
}

let v = 0;
while (v <= 15) {
    console.log (v++);
}

let z = 0;
do {
    console.log (z)
    z++;
} while (z <= 20);

/* 
Iterate 10 to 0 using for loop, do the same using while and do while loop */

for (b = 12; b > 0; b--) {
    console.log(b)
}

let n = 15;
while (n > 0) {
    console.log (n--);
}

let m = 6;
do {
    console.log (m)
    m--;
} while (m >= 0);


/* 

Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######

for (i = 0; i <=10; i++) {
    console.log(i)
} */

let arraT = ['#',
    '##',
    '###',
    '####',
    '#####',
    '######',
    '#######'
]

for (i = 0; i < arraT.length; i++) {
    console.log(arraT[i])
}
/* Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */

for (i = 0; i <=10; i++)
    console.log(i * i);
/*
Using loop print the following pattern

    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000 */

    for (i = 0; i <=10; i++)
    console.log(i * i * i);

    /*
    Use for loop to iterate from 0 to 100 and print only even numbers */

    for(let i = 0; i <= 100; i++){
        if(i % 2 != 0){
          continue
        }
        console.log(i)
      }
/*
      Use for loop to iterate from 0 to 100 and print only odd numbers */

      for(let i = 0; i <= 100; i++){
        if(i % 2 === 0){
          continue
        }
        console.log(i)
      }

/*
Use for loop to iterate from 0 to 100 and print only prime numbers  2, 3, 5, 7, 11, 13, 17, 19.*/


for (let i = 0; i <= 100; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

/*
Use for loop to iterate from 0 to 100 and print the sum of all numbers.
*/

let sum9 = 0;
for(let i = 0; i <= 100; i++){
    sum9 += i
  }
  console.log(sum9);

 /* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. The sum of all evens from 0 to 100 is 2550 & And the sum of all odds from 0 to 100 is 2500. */

    let sum10 = 0;
    for(let i = 0; i <= 100; i++){
    if(i % 2 != 0){
    sum10 += i
      continue
    }
  }
  console.log(sum10);

  let sum11 = 0;
  for(let i = 0; i <= 100; i++){
  if(i % 2 === 0){
  sum11 += i
      continue
  }
}
console.log(sum11);

/* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array */

let arraySum = [];
arraySum.push(sum11, sum10)
console.log(arraySum);

/* Develop a small script which generate array of 5 random numbers */

let mathR = [];
for (i=0; i < 5; i++){
let mathRandom = (Math.floor(Math.random() * 100 ));
mathR.push(mathRandom);
}
console.log(mathR);

/* Develop a small script which generate array of 5 random numbers and the numbers must be unique */

let mathR1 = [];
for (i=0; i < 5; i++){
let mathRandom1 = (Math.floor(Math.random() * 100 ) + 1);
mathR1.push(mathRandom1);
}
console.log(mathR1);

/* Develop a small script which generate a six characters random id: */

function makeid(length) {
    var result           = '';
    var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 console.log(makeid(15));


