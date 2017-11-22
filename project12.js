const formula = num => num * (num + 1)/2



const getFactors = num => {
  const isEven = num % 2 === 0;
  let inc = isEven ? 1 : 2;
  let factors = [1, num];

  for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
    if (num % curFactor !== 0) continue;
    factors.push(curFactor);
    let compliment = num / curFactor;
    if (compliment !== curFactor) factors.push(compliment);
  }

  return factors.length;
}


let res = 0
let count  = 1
let countOne = 1
console.time("test")
while (res <= 501 ){
 
res =  getFactors(countOne)

if(res > 501){

    console.log(countOne)
}

count++
countOne+=count
}

console.timeEnd("test")

//console.log(formula(2))
