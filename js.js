//LAB 4

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
let jobTitle = 'Designer';
let geographicLocation = 'Toronto';
let annualSalary = 80000;
let companyName = "George Brown"

console.log(`You will be a ${jobTitle} in ${geographicLocation}, making ${annualSalary} for ${companyName}.`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.
let currenYear = 2020;
let birthYear = 1992;
let theirAge = currenYear - birthYear;
console.log(`they are ${theirAge} years old.`);
//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
let myAge = 25;
let maxAge = 30;
let amountPerday = 2;
let totalLife = (2 * 365) * (30 - 25);
console.log(`You will need ${totalLife} to last you until the ripe old age of ${maxAge}`)
//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let radiusValue = 3;
let theCircumference = 2 * 3.14159265359 * radiusValue;
console.log (`The circumference is ${theCircumference}`)
let theArea = radiusValue ** 2 * 3.14159265359;
console.log (`The area is ${theArea}`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
let celciusTem = 30;
let fahrenheitTem = celciusTem * 1.8 + 32;
console.log(`${celciusTem}°C is ${fahrenheitTem}°F`)
let fahrenheitSecond = 68;
let celciusSecond = (fahrenheitSecond - 32) / 1.8;
console.log(`${fahrenheitSecond}°F is ${celciusSecond}°C`)

//-------------------------------------------------
//LAB 5

// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(a) {
    let squareNum;
    squareNum = a ** 2;
    console.log(`The result of squaring the number ${a} is ${squareNum}`);
    return squareNum;
}
let squared = 3;
squareNumber(squared);

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(a) {
    let half;
    half = a/2;
    console.log(`Half of ${a} is ${half}`);
    return half;

}
let numOfa = 5;
halfNumber(numOfa);


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(a,b) {
    let percentResult;
    percentResult = a/b * 100;
    console.log(`${a} is ${percentResult}% of ${b}`);
    return percentResult;
}
let percentOfa = 2;
let percentOfb = 10;
percentOf(percentOfa, percentOfb);



// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.
function areaOfCircle(a) {
    let calculatedArea;
    calculatedArea = a ** 2 * 3.14159265359;
    console.log(`The area for a circle with radius ${a} is ${calculatedArea}`);
    return calculatedArea;
}
    let theRadius = 3;
    areaOfCircle(theRadius);

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).
function runAll(a) {
    let half = halfNumber(a);
    squareNumber(half);
    let numToSquare = squareNumber(half);
    areaOfCircle(numToSquare);
    let circleArea = areaOfCircle(numToSquare);
    percentOf(numToSquare,circleArea);
    let squareCirle = percentOf(numToSquare,circleArea);
    console.log(`The squared result is ${squareCirle}% of the area.`)
    
    return squareCirle; 
}
let halfOfa = 4;
runAll(halfOfa);

//Document output
let fortune = document.querySelector('#Thefortune')
fortune.textContent = `You will be a ${jobTitle} in ${geographicLocation}, making ${annualSalary} for ${companyName}.`

let theAge = document.querySelector('#Theage')
theAge.textContent = `they are ${theirAge} years old.`

let theLife = document.querySelector('#Thelifetime')
theLife.textContent = `You will need ${totalLife} to last you until the ripe old age of ${maxAge}.`

let theGeome = document.querySelector('#Thegeometrizer')
theGeome.textContent = `The circumference is ${theCircumference}. The area is ${theArea}.`

let theTempera = document.querySelector('#Thetemperature')
theTempera.textContent = `${celciusTem}°C is ${fahrenheitTem}°F - ${fahrenheitSecond}°F is ${celciusSecond}°C.`

let theSquarenu = document.querySelector('#squarenumber')
theSquarenu.textContent = `The result of squaring the number ${squared} is ${squareNumber(squared)}.`

let theHalfnu = document.querySelector('#halfnumber')
theHalfnu.textContent = `Half of ${numOfa} is ${halfNumber(numOfa)}.`

let thePercnt = document.querySelector('#percentof')
thePercnt.textContent = `${percentOfa} is ${percentOf(percentOfa, percentOfb)}% of ${percentOfb}.`

let theAreacicle = document.querySelector('#areaofcircle')
theAreacicle.textContent = `The area for a circle with radius ${theRadius} is ${areaOfCircle(theRadius)}.`

let therunAll = document.querySelector('#runall')
therunAll.textContent = `The squared result is ${runAll(halfOfa)}% of the area.`