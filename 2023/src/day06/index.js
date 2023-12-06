import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split("\n").map((a) => a);

const formatInput = (input) => {
  const milliseconds = input[0].split(':')[1].replace(/\s+/g, ' ').trim().split(' ').map((str) => Number(str.trim()));
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
      console.log("i", i);
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
