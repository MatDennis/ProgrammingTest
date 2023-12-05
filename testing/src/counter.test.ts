import counter from "../../src/counter"

test('Counting the words in the array, including duplicates', () => {
    const inputData = ['string'] as RegExpMatchArray;

    expect(counter(inputData)).toStrictEqual({
        'string': 1
    });
})