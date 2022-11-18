// start with strings, numbers and booleans
let a = 100;
let a2 = a;
console.log(a, a2);
a = 200;
console.log(a, a2);

let c = 1 === 1;
let d = c;
console.log(c, d);
c = 1 === 2;
console.log(c, d);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
//and we want to make a copy of it.
const team = players;
console.log(team, players);

team[3] = "Lux"; //team is referencing players, so when we change this it changes the original reference.
console.log(team);
console.log(players);
// You might think we can just do something like this:
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = [...players]; //players.slice(); //[].concat(players) //Array.from(players)
console.log(team2);
team2[3] = "Daen";
console.log(team2);
console.log(players);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: "Wes Bos",
    age: 80,
};

// and think we make a copy:
const captain = person;
captain.age = 99; //changes the original object too!
console.log(captain);
console.log(person);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { age: 12, number: 10 });
console.log(captain2);
console.log(captain);
// We will hopefully soon see the object ...spread
const captain3 = { ...person };

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const Daen = {
    name: "Daen",
    age: 24,
    social: {
        twitter: "none",
        instagram: "Yes",
        facebook: "none",
    },
};
const Daen2 = { ...Daen };
console.log(Daen);
Daen2.name = "Dayoung";
Daen2.social.twitter = "Created";
console.log(Daen2);
console.log(Daen); //when we change deeper than 1 level, it changes origninal reference too.

//a trick to change deeper elements in an object :
let string = JSON.stringify(Daen);
console.log(string); //creates a string of objects. turn them into strings!
let parsed = JSON.parse(string);
console.log(parsed);
parsed.social.twitter = "@Daen";
console.log(parsed);
console.log(Daen); //reference not changed.
