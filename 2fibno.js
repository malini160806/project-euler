let a = 1, b = 2;    
let sum = 0;
const LIMIT = 4000000;

while (a <= LIMIT) {
  if (a % 2 === 0) sum += a;
  // step
  const next = a + b;
  a = b;
  b = next;
}

console.log(sum); 
