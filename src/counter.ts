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
            //!!!!!!!!!CHECK IF THERE IS A BETTER AY OF ++!!!!!!!!!
            obj[holderWord]++;
        }
    }
    return obj;
}