//STAGE 1, MAKE OUTPUT
// const sayHello = () => {console.log("Hello!")};
// sayHello();


//LEARN WHY THIS HAPPENS 
// import { kStringMaxLength } from "buffer";
// import { getHashes, hkdf } from "crypto";
// import * as fs from "fs";

//STAGE 2, MAKE INPUT
// UNDERSTAND WHAT PROCESS.ARGV[2] IS. FIND THE DOC 

// const argument = process.argv[2];
// console.log(argument);


//STAGE 3, MAKE INPUT AND OUTPUT
// REMEMBER THAT ${ } IS USED TO MAKE IT EASIER TO READ 
// SEARCH MORE ON TEMPLATE LITERALS

// const userInput = process.argv[2];
// if(userInput.length >= 5){
//     console.log(`You Typed: ${userInput}`);
// } else {
//     console.log("wank");
// }


//STAGE 4, COUNT HOW MANY WORDS IN A STRING
// RELEARN ARROW FUNCTIONS
// READ INTO HOW A SPLIT WORKS

// const theString = `This is is the text string`;
// const splitTheString = theString.split(' ');

//STAGE 5, READ OUT THE STRING ARRAY INTO SPLIT WORDS
// DIFFERENCE OF FOR AND FOREACH, SOMETHING BEING SLOWER?

// const theString = `This is is the text string`;
// const splitTheString = theString.split(' ');
// for(let i = 0; i < splitTheString.length; i++) {
//     console.log(splitTheString[i]);
// }
// splitTheString.forEach((splitString) => console.log(splitString));


//STAGE 6, START COUNTING THE WORDS
//WHAT IS RECORD ON THE OBJECT
// CHECK ON DATATYPES
// CHECK OBJECTS

// const theString = `This is is the text string`;

// const splitTheString = theString.split(' ');

// const obj:Record<string,number> = { };

// for(let i = 0; i<splitTheString.length; i++) {
//     const holderWord = splitTheString[i];

//     if(typeof obj[holderWord] === "undefined") {
//         obj[holderWord] = 1;
//     } else {
//         obj[holderWord]++;
//     }
// }
// console.log(obj);

//STAGE 7, MAKE IT ALPHABETICAL 

// const theString = `jan dec aug sept dec aad abc`;
// //take the spaces out and split the words
// const splitTheString = theString.split(' ');
// //create a blank object
// const obj: Record<string,number> = { };

// //add each word from the split string into the object to make several properties
// for(let i = 0; i<splitTheString.length; i++) {
//     //hold one word from the string
//     const holderWord = splitTheString[i];
//     //check if the word is already a property
//     if(typeof obj[holderWord] === "undefined") {
//         //if not, create the property
//         obj[holderWord] = 1;
//     } else {
//         //else if it already exists, add the key by 1
//         obj[holderWord]++;
//     }
// }

// const wordArray = Object.entries(obj);

// Array.prototype.sort.call(wordArray);

// // wordArray.sort(([key,value],b) => { 
    
// //     return 1; 
// // });

// for(const [key,value] of wordArray) {
//     console.log(`${key}: ${value}`);
// }
// const countOrder:number[] = [];

// for(const key in obj) {
//     const value = obj[key];
//     countOrder.push(value);
//     //console.log(`Word: ${key}. Counted: ${value}`);
// }

// countOrder.sort();
// console.log(countOrder);


//STAGE 8 REMOVE THE PUNCTUATION
// import { exit } from "process";

// const theString = `Jan, Dec, Aug, Sept, Dec, Aad, Abc, jan.`;
// const newString = theString.toLowerCase();
// const punctuation = /\w+/g;
// const matchs = newString.match(punctuation);
// const obj: Record<string,number> = { };

// if(matchs == null) {
//     exit();
// } 

// for(let i = 0; i<matchs.length; i++) {
//     const holderWord = matchs[i];
//     if(typeof obj[holderWord] === "undefined") {
//         obj[holderWord] = 1;
//     } else {
//         obj[holderWord]++;
//     }
// }

// const wordArray = Object.entries(obj);

// Array.prototype.sort.call(wordArray);

// for(const [key,value] of wordArray) {
//     console.log(`${key}: ${value}`);
// }

// //STAGE 9, READ A SPECIFIC FILE
// //import the use of the exit function.
// import { exit } from "process";

// const theString = fs.readFileSync('./thefile.txt', 'utf-8');
// //conver the string to all lowercase letters
// const newString = theString.toLowerCase();

// //variable to select all punctuation and white space from the use of 'RegExp'
// const punctuation = /\w+/g;

// //variable to remove all whitespace and punctuation
// const matchs = newString.match(punctuation);

// //creating an object to store a string key with a number value
// const obj: Record<string,number> = { };

// //re write this to do something different than just exit, but it works
// //if matchs is null, do not run the code.
// if(matchs == null) {
//     exit();
// } 

// //counting how many words are duplicated by checking; 
// //if the entry of obj is not defined, it will count it and add the value of 1
// //else if it is defined then it will increment by 1
// for(let i = 0; i<matchs.length; i++) {
//     const holderWord = matchs[i];
//     if(typeof obj[holderWord] === "undefined") {
//         obj[holderWord] = 1;
//     } else {
//         //!!!!!!!!!CHECK IF THERE IS A BETTER AY OF ++!!!!!!!!!
//         obj[holderWord]++;
//     }
// }

// //create an array of the objects
// const wordArray = Object.entries(obj);

// //make the array alphabetical
// wordArray.sort();

// //output the array per item 
// for(const [key,value] of wordArray) {
//    console.log(`${key}: ${value}`);
// }

//STAGE 10, HAVE AN INPUT TO DICTATE WHICH FILE TO READ FROM
// //import the use of the exit function.
// import { exit } from "process";
// import { kStringMaxLength } from "buffer";
// import { getHashes, hkdf } from "crypto";
// import * as fs from "fs";

// //obtain an input from the user to say where they want the file read from
// const argument = process.argv[2];
// //create a const to hold the information obtained from the directory of what the user has chosen. 
// const theString = fs.readFileSync(argument, 'utf-8');
// //conver the string to all lowercase letters
// const newString = theString.toLowerCase();

// //variable to select all punctuation and white space from the use of 'RegExp'
// const punctuation = /\w+/g;

// //variable to remove all whitespace and punctuation
// const matchs = newString.match(punctuation);

// //creating an object to store a string key with a number value
// const obj: Record<string,number> = { };

// //re write this to do something different than just exit, but it works
// //if matchs is null, do not run the code.
// if(matchs == null) {
//     exit();
// } 

// //counting how many words are duplicated by checking; 
// //if the entry of obj is not defined, it will count it and add the value of 1
// //else if it is defined then it will increment by 1
// for(let i = 0; i<matchs.length; i++) {
//     const holderWord = matchs[i];
//     if(typeof obj[holderWord] === "undefined") {3
//         obj[holderWord] = 1;
//     } else {
//         //!!!!!!!!!CHECK IF THERE IS A BETTER AY OF ++!!!!!!!!!
//         obj[holderWord]++;
//     }
// }

// //create an array of the objects
// const wordArray = Object.entries(obj);

// //make the array alphabetical
// wordArray.sort();

// //output the array per item 
// for(const [key,value] of wordArray) {
//    console.log(`${key}: ${value}`);
// }

//STAGE 11, MAKE FUNCTIONS

//import the use of the exit function.
import { exit } from "process";
import { kStringMaxLength } from "buffer";
import { getHashes, hkdf } from "crypto";
import * as fs from "fs";
import printOut from "./printOut";

//obtain an input from the user to say where they want the file read from
const argument = process.argv[2];
//create a const to hold the information obtained from the directory of what the user has chosen. 
const theString = fs.readFileSync(argument, 'utf-8');
//conver the string to all lowercase letters
const newString = theString.toLowerCase();

//variable to select all punctuation and white space from the use of 'RegExp'
const punctuation = /\w+/g;

//variable to remove all whitespace and punctuation
const matchs = newString.match(punctuation);

//creating an object to store a string key with a number value
const obj: Record<string,number> = { };

//re write this to do something different than just exit, but it works
//if matchs is null, do not run the code.
if(matchs == null) {
    exit();
} 

//counting how many words are duplicated by checking; 
//if the entry of obj is not defined, it will count it and add the value of 1
//else if it is defined then it will increment by 1
for(let i = 0; i<matchs.length; i++) {
    const holderWord = matchs[i];
    if(typeof obj[holderWord] === "undefined") {3
        obj[holderWord] = 1;
    } else {
        //!!!!!!!!!CHECK IF THERE IS A BETTER AY OF ++!!!!!!!!!
        obj[holderWord]++;
    }
}

//create an array of the objects
const wordArray = Object.entries(obj);

//make the array alphabetical
wordArray.sort();

printOut(wordArray);