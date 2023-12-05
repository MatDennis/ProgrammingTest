import punctuation from "../../src/punctuation"

test('Is the value the same', () => {
    const holder = ['string'] as RegExpMatchArray;
    expect(punctuation('string')).toStrictEqual(holder);
})

test('Has the whitespace and punct gone?', () => {
    const result = punctuation('string string');

    expect(result[0]).toBe('string');
    expect(result[1]).toBe('string');
})

test('Is it all lower?', () => {
    const result = punctuation('STRING STRING');

    expect(result[0]).toBe('string');
    expect(result[1]).toBe('string');
});