// Combination Num 1
const num1 = 7;
const num2 = 3;
const code1 = num1 + num2;
console.log(code1);

// Combination Num 2
const num3 = 60;
const num4 = 40;
const num5 = 2
const code2 = num3 - num4 / num5
console.log(code2);

// Combination Num 3
const num6 = 79;
const num7 = 40;
const code3 = num6 % num7;
console.log(code3);

const message = "The Vault has been secured. The combination is: ";

// Full Combination
const codeA = code1 + "-" + code2 + "-" + code3;
console.log(codeA);

// Full Combination Template Literal
const codeB = `${code1}-${code2}-${code3}`;
console.log(codeB)

// Combinaton Message for Family Heirlooms
console.log(message, codeA, codeB);