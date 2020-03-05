import {
  originalArray,
  doubleArray,
} from '../app'

describe ('originalArrayTest', () =>{
   test('original array should return itself', ()=>{
     expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
   })
 })
