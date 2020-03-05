import {
  originalArray,
  doubleArray,
} from '../app'

describe ('originalArray', () =>{
   test('original array should return itself', ()=>{
     expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
   })
 })

 describe ('doubleArray', () => {
   test('should double each number in array', ()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
   })
 })