//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?



const isPrime = num => {
  let prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

const nthPrimeNumber = num => {
  let resArr = [];
  let count = 0;
  while (resArr.length <= num) {

    if (isPrime(count)) {

      resArr.push(count)
    }
    count++
  }
  return resArr[resArr.length - 1]

}

console.log(nthPrimeNumber(10001))
