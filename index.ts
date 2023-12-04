//import the use of the exit function.
import { exit } from "process";
import { kStringMaxLength } from "buffer";
import { getHashes, hkdf } from "crypto";
import * as fs from "fs";

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

//output the array per item 
for(const [key,value] of wordArray) {
   console.log(`${key}: ${value}`);
}