import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split("\n").map((a) => a);

const part1 = (rawInput) => {

  const input = parseInput(rawInput);

  // remove all non-numeric characters
  const numericValues = input.map((value) => value.replace(/\D/g,''));

  // get first and last digit, and convert to a number
  const firstAndLastValues = numericValues.map((value) => {
    const first = value.slice(0,1);
    const second = value.slice(-1);
    const combined = first + second;
    return Number(combined);
  });

  // add all values together
  const totalSum = firstAndLastValues.reduce((partialSum, a) => partialSum + a, 0);

  return totalSum;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
