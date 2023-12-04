import printOut from "./printOut";
import punctuation from "./punctuation";
import counter from "./counter";
import reader from "./fileReader";
import wordSort from "./wordSort";
//obtain an input from the user to say where they want the file read from
const filename = process.argv[2];
const theString = reader(filename);
const newString = punctuation(theString);
const countedString = counter(newString);
const wordArray = Object.entries(countedString);
const sorted = wordSort(wordArray);
printOut(sorted);