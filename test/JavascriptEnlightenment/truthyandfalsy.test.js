const { truthyandfalsy } = require('../../JavascriptEnlightenment/truthyandfalsy');

test('Should be falsy', () => {
    expect(truthyandfalsy(null)).toBeFalsy();
});

test('Should be falsy', () => {
    expect(truthyandfalsy(false)).toBeFalsy();
});

test('Should be falsy', () => {
    expect(truthyandfalsy(undefined)).toBeFalsy();
});

test('Should be falsy', () => {
    expect(truthyandfalsy("prawns")).not.toBeFalsy();
});