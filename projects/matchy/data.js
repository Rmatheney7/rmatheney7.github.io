/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "dog";
animal["name"] = "Zoey";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "ruff";
noises.push("grrr");
noises.unshift("bark");
noises[noises.length-1] = "arroooo";
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal["noises"].push("woof");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * With dot and bracket notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * With bracket notation and various methods
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
 var animals = [];
 animals.push(animal);
 console.log(animals);
 var duck = {
     species: 'duck',
     name: 'Jerome',
     noises: ['quack', 'honk', 'sneeze', 'woosh']
     
 };

animals.push(duck);
console.log(animals);
var snake = {species: 'snake',
    name: 'Jake',
    noises: ['hiss', 'slither']
    
};
    
var frog = {species: 'frog',
    name: 'Prince',
    noises: ['ribbit', 'croak']
};

animals.push(snake);
animals.push(frog);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I choose an array because with can be named after the animal and contain a list of all his friends

var friends = [];

function getRandom(arr) {
    var min = Math.ceil(0);
    var max = Math.floor(arr.length);
    return arr[Math.floor(Math.random() * (max - min)) + min];
}

friends.push(getRandom(animals)['name']);
console.log(friends);

animals[0]['friends'] = friends;
console.log(animals[0]);


/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
