# README

### Instructions

#### Install

1. Please obtain my project link via -> <-
2. bash "git clone 'weblink'"
3. bash "cd 'into clone directory"
4. bash "npm install"
5. bash "npm run dev"
6. bash "npm run test"

#### Project
To be able to use the project, please use 'ts-node index.ts' followed by the selected file path. For example i have included 'theFile.txt' to be an example file path (ts-node index.ts ./src/theFile.txt)
``` bash
ts-node ./src/index.ts ./src/theFile.txt
```

However, to point at another file at choice. Please use for example; ts-node ./src/index.ts /Users/matth/Desktop/dothisfile.xt. Changing from /Users...txt to a directory of your choice. Please only use .txt files. 

``` bash
ts-node ./src/index.ts //your directory here
```

#### Testing
To be able to use the test, please use npx jest. 
``` bash
npx jest

//or

npm run test
```

### Personal/Training Notes

- Relearn/Research into:
    - ${}
    - Template literals
    - arrow functions
    - the differences of for and foreach further
    - datatypes
    - objects
    - typeof
    - prototype
    - entries
    - import
    - readfile (specific utf-8)
    - regex
    - jest
- Learn to type better variable and function names. Need to make things easier to read for another person.
- Don't make branch names long (functional-refactor). Shorten, but make it easier to read. 
- Learn some keyboard shortcuts, just discoverd ctrl+J. Lovely!
- Learn some more shortcuts for git. E.G. git commit --amend
- With jest, stop thinking it needs to be everyting, only need to test the little to know it works. 


### Special Notes

- indexTraining.ts was where i was building the project (see history of the project).
- index.ts is the final project. 

# History of the Project

## Stage 1

### Create an output:

```typescript
const sayHello = () => {console.log("Hello!")};
sayHello();
```

## Stage 2

### Make an input:

```typescript
const argument = process.argv[2];
console.log(argument);
```

## Stage 3

### Combine stage 1 and stage 2:

```typescript
const userInput = process.argv[2];
if(userInput.length >= 5){
    console.log(`You Typed: ${userInput}`);
} else {
    console.log("Less than 5");
}
```

## Stage 4

### Count how many words in a string

```typescript
const theString = `This is is the text string`;
const splitTheString = theString.split(' ');
```

## Stage 5

### Read out the string array into words

```typescript
const theString = `This is is the text string`;
const splitTheString = theString.split(' ');
for(let i = 0; i < splitTheString.length; i++) {
  console.log(splitTheString[i]);
}
splitTheString.forEach((splitString) => console.log(splitString));
```

## Stage 6

### Start count the words


```typescript
const theString = `This is is the text string`;

const splitTheString = theString.split(' ');

const obj:Record<string,number> = { };

for(let i = 0; i<splitTheString.length; i++) {
    const holderWord = splitTheString[i];

    if(typeof obj[holderWord] === "undefined") {
        obj[holderWord] = 1;
   } else {
       obj[holderWord]++;
    }
}
console.log(obj);
```

## Stage 7

### Make it alphabetical


```typescript
const theString = `jan dec aug sept dec aad abc`;
//take the spaces out and split the words
const splitTheString = theString.split(' ');
//create a blank object
const obj: Record<string,number> = { };

//add each word from the split string into the object to make several properties
for(let i = 0; i<splitTheString.length; i++) {
    //hold one word from the string
    const holderWord = splitTheString[i];
    //check if the word is already a property
    if(typeof obj[holderWord] === "undefined") {
        //if not, create the property
        obj[holderWord] = 1;
    } else {
        //else if it already exists, add the key by 1
        obj[holderWord]++;
    }
}

const wordArray = Object.entries(obj);

Array.prototype.sort.call(wordArray);

// wordArray.sort(([key,value],b) => { 
    
//     return 1; 
// });

for(const [key,value] of wordArray) {
    console.log(`${key}: ${value}`);
}
const countOrder:number[] = [];

for(const key in obj) {
    const value = obj[key];
    countOrder.push(value);
    //console.log(`Word: ${key}. Counted: ${value}`);
}

countOrder.sort();
console.log(countOrder);
``` 

## Stage 8

### Remove the punctuation


```typescript
import { exit } from "process";

const theString = `Jan, Dec, Aug, Sept, Dec, Aad, Abc, jan.`;
const newString = theString.toLowerCase();
const punctuation = /\w+/g;
const matchs = newString.match(punctuation);
const obj: Record<string,number> = { };

if(matchs == null) {
    exit();
} 

for(let i = 0; i<matchs.length; i++) {
    const holderWord = matchs[i];
    if(typeof obj[holderWord] === "undefined") {
        obj[holderWord] = 1;
    } else {
        obj[holderWord]++;
    }
}

const wordArray = Object.entries(obj);

Array.prototype.sort.call(wordArray);

for(const [key,value] of wordArray) {
    console.log(`${key}: ${value}`);
}
``` 

## Stage 9

### Read a specific file


```typescript
//import the use of the exit function.
import { exit } from "process";

const theString = fs.readFileSync('./thefile.txt', 'utf-8');
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
    if(typeof obj[holderWord] === "undefined") {
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
``` 

## Stage 10

### Have an input to dictate which file to read from


```typescript
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
```

## Stage 11

### Move into modules


```typescript 
//index.ts

import printOut from "./printOut";
import punctuation from "./punctuation";
import counter from "./counter";
import reader from "./fileReader";
import wordSort from "./wordSort";
//variable for reading a specific file input from the user
const filename = process.argv[2];
//call the module to pull the data from the file
const theString = reader(filename);
//call the module to remove the whitespace and punctuation from the file
const newString = punctuation(theString);
//call the module to count the amount of words in the file
const countedString = counter(newString);
//create an array of the objects created
const wordArray = Object.entries(countedString);
//call the module to sort the array in alphabetical order
const sorted = wordSort(wordArray);
//call the module to print out the data
printOut(sorted);
```
```typescript 
//counter.ts

//function to bring in the newly formatted text from file
export default function counter(newString:RegExpMatchArray) {
    //creating an object to store a string key with a number value
    const obj: Record<string,number> = { };
    //counting how many words are duplicated by checking; 
    //if the entry of obj is not defined, it will count it and add the value of 1
    //else if it is defined then it will increment by 1
    for(let i = 0; i<newString.length; i++) {
        const holderWord = newString[i];
        if(typeof obj[holderWord] === "undefined") {3
            obj[holderWord] = 1;
        } else {
            //!potential better use of ++
            obj[holderWord]++;
        }
    }
    return obj;
}
```
```typescript
//fileReader.ts

//function to bring in the newly formatted text from file
export default function counter(newString:RegExpMatchArray) {
    //creating an object to store a string key with a number value
    const obj: Record<string,number> = { };
    //counting how many words are duplicated by checking; 
    //if the entry of obj is not defined, it will count it and add the value of 1
    //else if it is defined then it will increment by 1
    for(let i = 0; i<newString.length; i++) {
        const holderWord = newString[i];
        if(typeof obj[holderWord] === "undefined") {3
            obj[holderWord] = 1;
        } else {
            //!potential better use of ++
            obj[holderWord]++;
        }
    }
    return obj;
}
```

```typescript
//printOut.ts

//function to print out the amended text file to print out in a specific format
export default function printOut(objectArray:[string, number][]){
    for(const [key,value] of objectArray) {
        console.log(`${key}: ${value}`);
    }
}
```

```typescript
//punctuation.ts

//import the use of exit from process.
//!Change the use of this, including the if statement below to be better
import { exit } from "process";

//function to bring in the text of the file to amended it for specific use
export default function punctuation(theText:string) {
    //convert the string to all lowercase letters
    theText = theText.toLowerCase();
    //variable to select all punctuation and white space from the use of 'RegExp'
    const removePunc = /\w+/g;
    //variable to remove all whitespace and punctuation
    const theTextPunc = theText.match(removePunc);
    //if matchs is null, do not run the code.
    //!change this to something better
    if(theTextPunc == null) {
        exit();
    } 
    return theTextPunc;
}
```
```typescript
//wordSort.ts

//fucntion to bring in the amended text file to sort alphabeticaly 
export default function wordSort(wordArray:[string,number][]) {
    return wordArray.sort();  
}
```
## Testing modules
```typescript
//counter test

import counter from "../../src/counter"

test('Counting the words in the array, including duplicates', () => {
    const inputData = ['string'] as RegExpMatchArray;

    expect(counter(inputData)).toStrictEqual({
        'string': 1
    });
})
```
```typescript
import punctuation from "../../src/punctuation"

test('Is the value the same', () => {
    const holder = ['string'] as RegExpMatchArray;
    expect(punctuation('string')).toStrictEqual(holder);
})

test('Has the whitespace and punct gone?', () => {
    const result = punctuation('string string');

    expect(result[0]).toBe('string');
    expect(result[1]).toBe('string');
})

test('Is it all lower?', () => {
    const result = punctuation('STRING STRING');

    expect(result[0]).toBe('string');
    expect(result[1]).toBe('string');
});
```
```typescript
import wordSort from "../../src/wordSort"

test('Is the value the same', () => {
    const holderArray:[string,number][] = [['string', 1]];
    expect(wordSort(holderArray)).toStrictEqual([['string', 1]]);
})

test('Is this alphabetical', () => {
    const holderArray:[string,number][] = [['c', 1],['b', 1],['a', 1]];
    expect(wordSort(holderArray)).toStrictEqual([['a', 1],['b', 1],['c', 1]]);
})
```