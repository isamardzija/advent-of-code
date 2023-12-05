let input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

let inputArray = input.split("\n");

const nums = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "zero",
];

inputArray.forEach((inputString) => {
  nums.forEach((num) => {
    if (inputString.includes(num)) {
      console.log(
        inputString,
        " includes",
        num,
        "starting at",
        inputString.indexOf(num),
        "and ending at",
        inputString.charAt(num.length - 1)
      );
    }
  });
});
