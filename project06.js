/*

Sum square difference
Problem 6 
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


*/

function createArray(num){
    
    let arr = []
    
    for(let x = 1;x <= num;x++){
      
          arr.push(x);
      
    }
    
    return arr
  }
  
  function calc(num){
    
    let numArr = createArray(num)
    
    let eachSquared = numArr.reduce((sum, value) => sum + Math.pow(value,2))
    let totalSquared = Math.pow(numArr.reduce((sum, value) => sum + value),2)
  
   return totalSquared - eachSquared
    
  
    
  }
  
  console.log(calc(100))
