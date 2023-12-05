//import the use of file system
import * as fs from "fs";

//function to bring in the users selected file path and to export the text
export default function fileReader(filename:string) {
    const theString = fs.readFileSync(filename, 'utf-8');
    return theString;
}