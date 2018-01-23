//Try to do these on your own and checkout the console in Chrome to check your work, or if checking in node, make sure you have atleast V8.7

const magicNumbers = [72, 3, 9, 10, 65, 0, 18, 21];

// Find the largest number from the magicNumbers array => 72
const arrMax = Math.max(...magicNumbers);
console.log(arrMax, 'Largest Number');

/*
   Sort the numbers from highest to lowest, but leave the original array the same
   [ 72, 65, 21, 18, 10, 9, 3, 0 ]
*/
const clonedArray = magicNumbers.map(num => num)
const sortedArray = clonedArray.sort((a,b) => b-a)
console.log(sortedArray, 'New Array sorted high to low');

/*
   Turn each name into an object:
   {name:'Michael'}

*/
const names = ['Michael', 'Ying', 'Sid', 'Ravi', 'Rodo', 'Mark'];
const objects = names.map(name => ({name}));
console.log(objects, 'Array name into object')

const coolPeople = [
   {
       name: 'Michael Liendo',
       profession: 'Developer',
       yearsProgramming: 10
   },
   {
       name: 'Ravi Andulu',
       profession: 'Developer',
       yearsProgramming: 6
   },
   {
       name: 'Ying Wang',
       profession: 'Developer',
       yearsProgramming: 1
   },
   {
       name: 'Sid Dawar',
       profession: 'Developer',
       yearsProgramming: 3
   }
];

//filter the cool people so that it excludes anyone that has an 'M' in their name
const removePeopleWithNoLetterMInName = coolPeople.filter(people => !people.name.toUpperCase().includes('M'));
console.log(removePeopleWithNoLetterMInName, 'Filter out names with M');

// How many years of programming does everyone have together?
const sumYearsProgramming = coolPeople.reduce((accumulator,person) => accumulator + person.yearsProgramming, 0);
console.log(sumYearsProgramming, 'Total years programming');