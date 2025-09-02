function sumMultiplesBelow(k, n) {
  const m = Math.floor((n - 1) / k);
  return k * m * (m + 1) / 2;
}

const n = 1000;
const result = sumMultiplesBelow(3, n) + sumMultiplesBelow(5, n) - sumMultiplesBelow(15, n);
console.log(result); // 233168
