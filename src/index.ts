//imported modules
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