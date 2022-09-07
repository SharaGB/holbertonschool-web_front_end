function countPrimeNumbers () {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
}

function printTime () {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
}

const timeStart = performance.now();
setTimeout(printTime(), 0);
const timeEnd = performance.now();

const timeUsed = timeEnd - timeStart;
console.log(`Execution time of calculating prime numbers 100 times was ${timeUsed} milliseconds.`);
