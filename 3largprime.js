function largestPrimeFactor(n) {
  let maxFactor = -1;

  while (n % 2 === 0) {
    maxFactor = 2;
    n = n / 2;
  }

 
  let factor = 3;
  const limit = Math.sqrt; 
  while (factor * factor <= n) {
    while (n % factor === 0) {
      maxFactor = factor;
      n = n / factor;
    }
    factor += 2;
  }

 
  if (n > 1) maxFactor = n;

  return maxFactor;
}

const num = 600851475143;
console.log(largestPrimeFactor(num)); // 6857
