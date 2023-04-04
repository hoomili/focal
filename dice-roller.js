let numberOfRolls = Number(process.argv[2]);

const diceRoller = function(num) {
  let dice = [];
  let generated = 0;
  for (let i = 0; i < num; i++) {
    generated = Math.floor(Math.random() * 5) + 1;
    console.log("random number", generated);
    dice.push(generated);
    console.log("updated array", dice);
  }
  return dice;
};
console.log(`Rolled ${numberOfRolls} dice: ${diceRoller(numberOfRolls).join(', ')}`);


