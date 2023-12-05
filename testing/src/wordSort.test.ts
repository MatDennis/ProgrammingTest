import wordSort from "../../src/wordSort"

test('Is the value the same', () => {
    const holderArray:[string,number][] = [['string', 1]];
    expect(wordSort(holderArray)).toStrictEqual([['string', 1]]);
})

test('Is this alphabetical', () => {
    const holderArray:[string,number][] = [['c', 1],['b', 1],['a', 1]];
    expect(wordSort(holderArray)).toStrictEqual([['a', 1],['b', 1],['c', 1]]);
})