// 1. Object
var object = {};

//2. Array (CRUD)

//Create element in array
var array = [10, 20, 30];
array[25] = 'ololo';
console.log(array);

//Update element in array
var array = [10, 20, 30];
array[2] = 'ololo';
console.log(array);

//Loop going through array
var array = [10, 20, 30];
var i;
var length = array.length;
for(i = 0; i < length; i += 1){
    console.log(array[i])
}

//Function  declaration
function showName(name) {
console.log(name)
}
showName("Oleksii");

//Function declaration example multiple args
function generateNewLoops(start, end, step) {
    var i;
    for (i = start; i < end; i += step) {
        console.log(i)
    }
}
generateNewLoops(1,50, 5);

//Function expression
var generateNewLoop = function(start, end, step) {
    //...//
}
generateNewLoop(1,50, 5);

//ITFE (самовызывающаяся функция)
(function(start, end, step){/*...*/}())


// Return in function (чтоб вывести return ее нужно записать в переменную вне функции)
function showName(name) {
    return name + " " + "Asanov";
    }
    var a = showName("Oleksii");
    console.log(a);




























// а) Выведите столбец чисел от 1 до 100.

//FOR

// var i = 1;
// for (i; i<101; i+=1) {
//     console.log(i);
// }

//WHILE

//  б) Выведите столбец чисел от 11 до 33.

//  в) Выведите столбец четных чисел в промежутке от 0 до 100.

// г) С помощью цикла найдите сумму чисел от 1 до 100.

// д) Дано число n=1000. Делите его на 2 столько раз, 
// пока результат деления не станет меньше 50. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), 
// и запишите его в переменную num.пш