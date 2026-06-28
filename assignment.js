// Even or Odd Checker

function evenOdd(number) {

    if (number % 2 === 0) {
        console.log(number + " is an even number.");
    }

    else {
        console.log(number + " is an odd number.");
    }

}



// Multiplication Table

function multiplication(number) {

    for (let i = 1; i <= 10; i++) {

        console.log(number + " x " + i + " = " + (number * i));

    }

}



// FizzBuzz

function fizzBuzz() {

    for (let i = 1; i <= 20; i++) {

        if (i % 3 === 0 && i % 5 === 0) {

            console.log("FizzBuzz");

        }

        else if (i % 3 === 0) {

            console.log("Fizz");

        }

        else if (i % 5 === 0) {

            console.log("Buzz");

        }

        else {

            console.log(i);

        }

    }

}



// Square Pattern

function square(number) {

    for (let i = 0; i < number; i++) {

        console.log("*".repeat(number));

    }

}



// Right Angled Triangle

function rightTriangle(number) {

    for (let i = 1; i <= number; i++) {

        console.log("*".repeat(i));

    }

}



// Callback Function

function processNumber(number, callback) {

    callback(number);

}

function printSquare(num) {

    console.log("Square: " + (num * num));

}



// Sample Function Calls

evenOdd(7);

multiplication(5);

fizzBuzz();

square(5);

rightTriangle(5);

processNumber(6, printSquare);