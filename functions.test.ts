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


// DJ's other tests:
//  test('return an array', ()=>{
//     let arr = [1,2,3,4,5] 
//     let result = shuffleArray(arr) 
//     expect(result).toHaveProperty("length")
// })

//  test('returns array of same length', ()=>{
//     let arr = [1,2,3,4,5] 
//     let result = shuffleArray(arr) 
//     expect(result.length).toEqual(arr.length)
// })

// test('return an array with all the same items', ()=>{
//     let arr = [1,2,3,4,5] 
//     let result = shuffleArray(arr) 
//     expect(result).toEqual(expect.arrayContaining(arr))
// })

