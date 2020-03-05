export const originalArray = (arr) =>{
  return arr
}

const numberArray = [1,2,3,4]

// ARRAY ITERATOR METHODS

// return array with double values in array
export const doubleArray = (numberArray) => {
  return numberArray.map(item => item * 2)
}

// return array with all even numbers
export const evensOnlyArray = (numberArray) => {
  return numberArray.filter(item => item % 2 === 0 )
} 

// return array with sum of numbers
export const arraySum = (numberArray) => {
  return numberArray.reduce((a,b) => a + b, 0)
} 

// return true if every item greater than 0
export const allNumbersGreaterThanZero = (numberArray) => {
  return numberArray.every(number => number > 0)
} // => true; use every

// return true if some one or more items odd*
export const someNumbersAreOdd = (numberArray) => {
  return numberArray.some(elem => elem = 1)
} // => true; use some

// return array double and even
export const evensOnlyAndDoubleArray = (numberArray) => {
  return numberArray.filter(item => item % 2 === 0).map(item => item * 2)
} // => [4,8]; // use map and filter

// find an item method return 'not found' if not found
findItem(numberArray, 1) //=> 1
sortArray(numberArray) //=> [4,3,2,1] *desc*
artists = [
  {name: 'a', likes:100},
  {name: 'c', likes:99},
  {name: 'c', likes:101}, 
]

// ARRAY ITERATOR METHODS ON Objects with name age 
// doubles likes of artist
doubleLikes(artists)
// => [
//   {name: 'a', likes:200},
//   {name: 'c', likes:198},
//   {name: 'c', likes:202},  
// ]; 
moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter

//  return an array of strings of artist name
justArtistMoreThan100Likes(artists) //=> ['c']; // use filter ***AND MAP***

// get total number of likes fo all artists
numberOfLikes(artists) //=> 300; // get all likes

// find an item method. Returns 'not found' if not found
findObjByName(artists, 'a') // => {name: 'a', likes:200}
// returns array of artist sorted by likes
sortArtistByName(artists)


