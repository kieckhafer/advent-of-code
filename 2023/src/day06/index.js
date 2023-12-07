import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split("\n").map((a) => a);

const formatInput = (input) => {
  // break the time portion into an array of individual values
  const milliseconds = input[0]
  // split into two parts (key and values) and take the values
  .split(':')[1]
  // remove excess whitespace (multiple spaces between values), and replace with a single space
  .replace(/\s+/g, ' ')
  // trim whitespace at front and back
  .trim().
  // split into individual values in an array
  split(' ')
  // remap as numbers instead of strings
  .map((str) => Number(str.trim()));

  // do the same for distances
  const distances = input[1].split(':')[1].replace(/\s+/g, ' ').trim().split(' ').map((str) => Number(str.trim()));

  return milliseconds.map((millisecond, index) => {
    return {
      millisecond,
      distance: distances[index]
    }
  })
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const races = formatInput(input);

  let totalWaysToWinPerRace = [];

  races.forEach((race) => {
    const { distance, millisecond } = race;
    let waysToWin = 0;

    for (let i = 0; i <= millisecond; i++) {
      const speed = i;
      const timeToRace = millisecond - i;

      const myDistance = speed * timeToRace;

      if (myDistance > distance) {
        waysToWin++;
      }
    }

    totalWaysToWinPerRace.push(waysToWin);
  });

  const totalWaysToWin = totalWaysToWinPerRace.reduce((a,b) => a*b, 1);

  return totalWaysToWin;
};

const formatInputPart2 = (input) => {
  const millisecond = Number(input[0].split(':')[1].replace(/\s+/g, '').trim());
  const distance = Number(input[1].split(':')[1].replace(/\s+/g, '').trim());

    return {
      millisecond,
      distance
    }
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const race = formatInputPart2(input);

  const { distance, millisecond } = race;
  let waysToWin = 0;

  for (let i = 0; i <= millisecond; i++) {
    const speed = i;
    const timeToRace = millisecond - i;

    const myDistance = speed * timeToRace;

    if (myDistance > distance) {
      waysToWin++;
    }
  }

  return waysToWin;
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
