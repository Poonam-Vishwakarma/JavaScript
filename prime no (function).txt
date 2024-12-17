// prime no (no which is divisible by itself and 1).

function isPrime(n){
  if(n<2)
    return `${n} is is not a prime number`

    for(let i=2; i<n; i++){
      if(n%i===0){
        return `${n} is not a rime number`
      }
    }
    return `${n} is prime number`
  }

console.log(isPrime(13));