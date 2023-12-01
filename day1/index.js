const fs = require("fs");
let data = fs.readFileSync("input.txt").toString();
const wordToDigit = { one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9' };
let values = data.split(/\r?\n|\r|\n/g);
let addedNums = 0;
values.forEach(value => {
    value = value.replace(/(one|two|three|four|five|six|seven|eight|nine)/g, match => match + match[match.length - 1]);
    value = value.replace(/(one|two|three|four|five|six|seven|eight|nine)/g, match => wordToDigit[match] || match); // Remove this line for part 1
    value = value.replace(/[a-z]+/g, '');
    value = addedNums + parseInt(value[0] + value[value.length - 1]);
});
console.log(addedNums);
