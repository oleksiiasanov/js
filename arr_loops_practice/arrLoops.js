// The push() method adds new items to the end of an array. Returns the new length.
var arrAddToTheEnd = ['a', 'b', 'c'];
arrAddToTheEnd.push('1', '2', '3');
console.log(arrAddToTheEnd);

// The pop() method removes the last element of an array. Returns that element.
var arrRemoveLastElement = ['a', 'b', 'c'];
arrRemoveLastElement.pop();
console.log(arrRemoveLastElement);

// The shift() method removes the first item of an array.
var arrRemoveFirstElement = ['a', 'b', 'c'];
arrRemoveFirstElement.shift();
console.log(arrRemoveFirstElement);

// The unshift() method adds new items to the beginning of an array, and returns the new length.
var arrAddToTheBeginning = ['a', 'b', 'c'];
arrAddToTheBeginning.unshift('1', '2', '3');
console.log(arrAddToTheBeginning);

// The reverse() method reverses the order of the elements in an array.
var arrReverse = ['a','b','c'];
arrReverse.reverse();
console.log(arrReverse);

// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
function genareateArrWithRandomNumbers (arrLength) {
    var arrToFill = [];
    var i = 0;
    for (i; i < arrLength; i+=1) {
        arrToFill.push(Math.floor((Math.random() * 10) + 1));
    }
    return arrToFill
}
var lengthOfArrToGenerate = 5;
var arrWithRandomNumbers = genareateArrWithRandomNumbers(lengthOfArrToGenerate);
console.log("Generated array with random numbers: " + arrWithRandomNumbers);

// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. (числа от 0 до 10)
function calcSumOfSquaresOfAllNumbersInRandomArr() {

    var i = 0;
    var numberInArr;
    var squareOfEachNumberInArr;
    var sumOfSquaresOfAllNumbersInArr = 0;
    for (i; i < arrWithRandomNumbers.length; i+=1) {
        numberInArr = arrWithRandomNumbers[i];
        squareOfEachNumberInArr = numberInArr * numberInArr;
        sumOfSquaresOfAllNumbersInArr = sumOfSquaresOfAllNumbersInArr + squareOfEachNumberInArr;
    }
    return sumOfSquaresOfAllNumbersInArr

}

var SumOfSquaresOfAllNumbersInRandomArr = calcSumOfSquaresOfAllNumbersInRandomArr();
console.log("Sum of all squares of numbers in array: " + SumOfSquaresOfAllNumbersInRandomArr)


// Написать метод reverse своими силами и использовать для того, чтобы развернуть строку и массив
function revertArray() {
    var arrToReverse = arrWithRandomNumbers;
    var i = 0;
    var length =  arrToReverse.length; 
    var elementToAddToArr;
    var arrReversed = [];
    for (i; i < length; i+=1) {
        elementToAddToArr = arrToReverse[i];
        arrReversed.unshift(elementToAddToArr);
    }
    return arrReversed;

}

var revertedArray = revertArray();
console.log("Array to revert: " + arrWithRandomNumbers);
console.log("Reverted array: " + revertedArray);