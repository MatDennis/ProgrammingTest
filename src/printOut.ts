export default function printOut(objectArray:[string, number][]){
    for(const [key,value] of objectArray) {
        console.log(`${key}: ${value}`);
    }
}