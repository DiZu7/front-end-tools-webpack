function isPrime(number) {
  let counter = 0;
  for (let index = 1; index <= number; index += 1) {
    if (number % index === 0) {
      counter += 1;
    }
  }

  if (counter === 2) {
    return true;
  }
}

function getPrimes(num) {
  const arrayOfNumbers = Array.from(Array(num - 1), (_, index) => index + 2);

  arrayOfNumbers.forEach((number) => {
    if (isPrime(number)) {
      console.log(number);
    }
  });
}
getPrimes(15);
