import { exit } from "process";

export default function punctuation(theText:string) {
    //conver the string to all lowercase letters
    theText = theText.toLowerCase();
    //variable to select all punctuation and white space from the use of 'RegExp'
    const removePunc = /\w+/g;
    //variable to remove all whitespace and punctuation
    const theTextPunc = theText.match(removePunc);
    //re write this to do something different than just exit, but it works
    //if matchs is null, do not run the code.
    if(theTextPunc == null) {
        exit();
    } 

    return theTextPunc;
}