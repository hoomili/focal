const args = process.argv.slice(2);
let sum = function(arr) {
  let total = 0;
  for (let numb of arr) {
    total += Number(numb);
  }
  return total;
};

console.log(sum(args));