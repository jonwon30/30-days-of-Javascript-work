const dog = {
    name: 'Tiger',
    legs: 4,
    color: 'black and white',
    Age: '28 months',
    bark: function () {
        return`Woof Woof`
    },
}

dog['breed'] = "Dalmation";
dog.getDogInfo = 'Male';

console.log(dog)
console.log(dog.bark())

// Task 2
// Find the person who has many skills in the users object.

// Count logged in users,count users having greater than equal to 50 points from the following object.

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30,
      skillsLength: function () {
          return this.skills.length
      }
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50,
      skillsLength: function () {
        return this.skills.length
    }
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50,
      skillsLength: function () {
        return this.skills.length
    }
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40,
      skillsLength: function () {
        return this.skills.length
    }
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50,
      skillsLength: function () {
        return this.skills.length
    }
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40,
      skillsLength: function () {
        return this.skills.length
    }
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40,
      skillsLength: function () {
        return this.skills.length
    }
    }
}

console.log(users.Alex.skillsLength())
console.log(users.Paul.skillsLength())
console.log(users.Thomas.skillsLength())
console.log(users.John.skillsLength())
console.log(users.Daniel.skillsLength())
console.log(users.Brook.skillsLength())
console.log(users.Asab.skillsLength())

let userSkillArray = []
let x = Math.max(userSkillArray)
for (var user in users) {
    if (!users.hasOwnProperty(user)) continue;
    let userSkillCount = users[user].skills.length
    // console.log(`${user} Points = ${users[user].skills}`)
    console.log(`${user} Skill Length ${userSkillCount}`);
    userSkillArray.push(userSkillCount)
    }

// Count logged in users,count users having greater than equal to 50 points from the following object.

for (var user in users) {
    if (!users.hasOwnProperty(user)) continue;
    if (users[user].points >= 50) {
    console.log(`${user} Points = ${users[user].points}`)
    }
}

//let alexSkills = Object.values(users.Alex.skills)
//let paulSkills = Object.values(users.Paul.skills)

//console.log(alexSkills)
//console.log(paulSkills)

//Find people who are MERN stack developer from the users object

for (var user in users) {
    if (!users.hasOwnProperty(user)) continue;
    let userSkill = users[user].skills
    //console.log(`${user} Skills are ${userSkill}`);
    if (( userSkill.includes('MongoDB'))  && (userSkill.includes('Express')) && (userSkill.includes('React')) & (userSkill.includes('Node'))) {
        console.log(user)
    }
}

// Set your name in the users object without modifying the original users object

users.John = {
    email: 'billybob@billy.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'WordPress'],
    age: 46,
    isLoggedIn: false,
    points: 200,
  }
  console.log(users)

//Get all keys or properties of users object
const keys = Object.keys(users)
const values = Object.values(users)
const entries = Object.entries(users)
console.log(keys);
console.log(values);
console.log(entries);

// Use the countries object to print a country name, capital, populations and languages.

const countries = {
    Finland: {
        Capital: 'Helsinki',
        Populations: '5.518m',
        Languages: 'Finnish',
    },
    England: {
        Capital: 'London',
        Populations: '55.98m',
        Languages: 'English'
    }
}

const keys1 = Object.keys(countries)
const values1 = Object.values(countries)
const entries1 = Object.entries(countries)
console.log(countries);
console.log(`${keys1}`);
console.log(values1);
//console.log(entries1);

for (var country in countries) {
  //  if (!countries.hasOwnProperty(country)) continue;
  let x = countries[country].Capital;
  let y = countries[country].Populations;
  let c = countries[country].Languages;
    console.log(`${country}, Capital ${x}, Populations, ${y} Languages, ${c}`)
}

// Exercises: Level 3
