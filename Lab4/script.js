// // Zadanie 2
// alert("Hello World!");

// // Zadanie 3
// let a = 10;
// let b = 20;
// let c = 23.2;

// // a.
// alert(`a + b = ${a + b}`);
// alert(`a - b = ${a - b}`);
// alert(`a * b = ${a * b}`);
// alert(`a / b = ${a / b}`);

// // b.
// console.log(`a + b = ${a + b}`);
// console.log(`a - b = ${a - b}`);
// console.log(`a * b = ${a * b}`);
// console.log(`a / b = ${a / b}`);

// // c.
// document.getElementById('result').innerHTML = `
//     <p>a + b = ${a + b}</p>
//     <p>a - b = ${a - b}</p>
//     <p>a * b = ${a * b}</p>
//     <p>a / b = ${a / b}</p>
// `;

// // Zadanie 4
// console.log("Liczby parzyste od 0 do 100:");
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// // Zadanie 5
// function calculateTriangleArea(a, b, c) {
//     const s = (a + b + c) / 2;
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// const triangleArea = calculateTriangleArea(3, 4, 5);
// console.log("Pole trójkąta o bokach 3, 4 i 5:", triangleArea);

// document.getElementById('result').innerHTML += `
//     <p>Pole trójkąta o bokach 3, 4 i 5: ${triangleArea}</p>
// `;

// // Zadanie 6
// const userName = prompt("Podaj swoje imię:");
// alert(`Witaj, ${userName}!`);

// // Zadanie 7
// const firstNumber = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
// const secondNumber = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
// const sum = firstNumber + secondNumber;
// alert(`Wynik dodawania: ${sum}`);

// // Zadanie 8
// const num1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
// const num2 = parseFloat(prompt("Podaj drugą liczbę:"));
// const num3 = parseFloat(prompt("Podaj trzecią liczbę:"));

// const max = Math.max(num1, num2, num3);
// console.log("Największa liczba:", max);
// document.getElementById('result').innerHTML += `
//     <p>Największa liczba: ${max}</p>
// `;

// // Zadanie 9
// function gcd(a, b) {
//     if (b === 0) {
//         return a;
//     }
//     return gcd(b, a % b);
// }

// const number1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
// const number2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
// const greatestCommonDivisor = gcd(number1, number2);
// console.log("Największy wspólny dzielnik:", greatestCommonDivisor);
// document.getElementById('result').innerHTML += `
//     <p>Największy wspólny dzielnik: ${greatestCommonDivisor}</p>
// `;
