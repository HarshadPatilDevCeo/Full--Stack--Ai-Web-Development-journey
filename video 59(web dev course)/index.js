

let random = Math.random(); // 0 se 1 ke beech random number lega
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let c = prompt("Enter operation (+, -, *, /):");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.9) {
    // 90% Case: Sahi Calculation (Billionaire accuracy)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} 
else {
    // 10% Case: Faulty Calculation (The Bug)
    c = obj[c]; // Operator ko badal diya
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

console.log("Random Value was:", random);