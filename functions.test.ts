const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('not return undefined', ()=>{
        expect(shuffleArray).toBeTruthy()
    })
    test('shuffleArray returns an array the same length as the arguments sent in', ()=>{
        expect(shuffleArray([1,2,3])).toHaveLength(3)
    })
    test('return a shuffled array', ()=>{
        expect(shuffleArray([1,2,3])).not.toEqual([1,2,3])
    })
});