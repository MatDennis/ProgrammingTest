import * as fs from "fs";

export default function fileReader(filename:string) {
    const theString = fs.readFileSync(filename, 'utf-8');
    return theString;
}