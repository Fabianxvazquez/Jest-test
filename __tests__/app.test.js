import {
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
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

 describe ('evensOnlyArray', () => {
   test('should return only even numbers', ()=>{
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
   })
 })

 describe ('arraySum', ()=> {
   test('should add all numbers', ()=>{
     expect(arraySum([1,2,3,4])).toEqual(10)
   })
 })

 describe ('allNumbersGreaterThanZero', ()=>{
   test('should return all numbers', ()=>{
     expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
   })
 })

 describe('someNumbersAreOdd', ()=>{
   test('showing odd nums', ()=>{
     expect(someNumbersAreOdd([1,2,3,4])).toEqual(true)
   })
 })

 describe('evensOnlyAndDoubleArray', ()=>{
   test('pull even numbers then double them', ()=>{
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
   })
 })