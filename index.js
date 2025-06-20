// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
let x = -123
function reversedInteger(x){
    let sign = Math.sign(x);
    let result = sign * String(Math.abs(x)).split('').reverse().join('')
    let power = Math.pow(2,31) 
    if((result <=-power || result > power)) return 0
    return result
}

console.log(reversedInteger(x));
