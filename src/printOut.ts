//function to print out the amended text file to print out in a specific format
export default function printOut(objectArray:[string, number][]){
    for(const [key,value] of objectArray) {
        console.log(`${key}: ${value}`);
    }
}