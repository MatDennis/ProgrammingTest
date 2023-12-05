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