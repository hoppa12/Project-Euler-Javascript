const nextNum =  num => num % 2 ===0 ? num / 2 : (num * 3)+ 1

const hailStone = count => {
let res = 1
    while(count != 1){

            count = nextNum(count)
            res++
    }

return res

}

console.time("test")
let total = {num:0,sequence:0}

for( let x = 1; x < 1000000;x++){

    let res = hailStone(x)
   total = total.sequence < res ? {num:x,sequence:res} : total


}


console.log(total.num)
console.timeEnd("test")

