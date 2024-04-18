// 1
// let numbers = [];

// function enterNu mbers() {
//     for (let i = 0; i < 10; i++) {
//         let num = parseInt(prompt("Wprowadź liczbę całkowitą:"));
//         numbers.push(num);
//     }
//     displayNumbers();
// }

// function displayNumbers() {
//     console.log("Wprowadzone liczby:", numbers.join(", "));
// }

// function searchNumber() {
//     let searchValue = parseInt(prompt("Podaj liczbę całkowitą do znalezienia:"));
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === searchValue) {
//             count++;
//         }
//     }
//     console.log("Liczba " + searchValue + " została znaleziona " + count + " razy.");
// }
// enterNumbers();
// searchNumber();

// 2 

// let tablica = [1, 2, 3, 4, 5, 6];
// console.log("Tablica przed modyfikacją:", tablica);

// const indeks = parseInt(prompt("Podaj indeks, na który chcesz wstawić liczbę: "));
// const liczba = parseInt(prompt("Podaj liczbę do wstawienia: "));

// tablica.splice(indeks, 0, liczba);
// console.log("Tablica po modyfikacji:", tablica);

// 3 

// function reverseString() {

//     let inputString = prompt("Wprowadź ciąg znaków:");

//     let reversedString = "";

//     for (let i = inputString.length - 1; i >= 0; i--) {
//         reversedString += inputString[i];
//     }

//     alert("Odwrócony ciąg znaków: " + reversedString);
// }

// reverseString();

// 4 

function ArrayRandom(arrayLength) {
    let randomNumbers = [];
    for (let i = 0; i < arrayLength; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100)); 
    }
    return randomNumbers;
}

function displayNumbers() {
    let numbersList = document.getElementById("numbersList");
    let randomNumbers = ArrayRandom(10); 
    for (let i = 0; i < randomNumbers.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = randomNumbers[i];
        numbersList.appendChild(listItem);
    }
}

window.onload = function() {
    displayNumbers();
};

// 5 
// zsumuj wartości
// let numbers = [5, 8, 12, 6, 9, 3, 10];

// // a. Sumowanie wartości
// let sum = numbers.reduce((total, current) => total + current, 0);
// console.log("Suma wartości:", sum);

// // b. znajdź liczby parzyste 
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log("Liczby parzyste:", evenNumbers);

// // c. pomnóż wartości razy 3 
// let multipliedNumbers = numbers.map(num => num * 3);
// console.log("Wartości pomnożone razy 3:", multipliedNumbers);

// // d. dodaj do tablicy swój numer albumu. Znajdź jego index w tablicy
// let numeralbumu = 68339;
// numbers.push(numeralbumu);
// let myAlbumIndex = numbers.indexOf(numeralbumu);
// console.log("Indeks numeru albumu:", myAlbumIndex);

// // e. oblicz średnią arytmetyczna
// let srednia = sum / numbers.length;
// console.log("Średnia arytmetyczna:", srednia);

// // f. znajdź największą liczbę 
// let maxNumber = Math.max(...numbers);
// console.log("Największa liczba:", maxNumber);

// // g. zlicz ilość wystąpień wybranej wartości 
// let wartosc = 4;
// let occurrences = numbers.reduce((count, current) => {
//     if (current ===  wartosc) {
//         count++;
//     }
//     return count;
// }, 0);
// console.log("Liczba wystąpień wartości", wartosc + ":", occurrences);

// 6 

// function fibonacci(n) {
//     const sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         sequence[i] = sequence[i - 1] + sequence[i - 2];
//     }
//     return sequence;
// }

// const fib100 = fibonacci(100);
// console.log("Pierwsze 100 liczb ciągu Fibonacciego:", fib100);

// 7 

// function suma(tablica) {
//     const posortowana = tablica.sort((a, b) => b - a);
//     return posortowana[0] + posortowana[1];
// }

// const tablica = [1, 5, 3, 7, 2];
// console.log("Suma dwóch największych liczb:", suma(tablica));

// 8 

// function Duplikaty(tablica) {
//     return [...new Set(tablica)];
// }

// const tablica = [1, 2, 3, 3, 4, 4, 5];
// console.log("Tablica bez duplikatów:", Duplikaty(tablica));
