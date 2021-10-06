/*
Переведите текст вида border-left-width в borderLeftWidth
важность: 5

Напишите функцию camelize(str), которая преобразует строки
вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

const camelize = str => {
    let copyStr = str;
    if (copyStr[0] === '-') copyStr = copyStr.slice(1);
    if (copyStr[copyStr.length - 1] === '-') copyStr = copyStr.slice(0, copyStr.length - 1);

    let workArr = copyStr.split('-');
    let toUpperFirstLetter = workArr.slice(1).map(word => word[0].toUpperCase() + word.slice(1));
    return workArr[0] + toUpperFirstLetter.join('');
};

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );
console.log( camelize("webkit-transition") );

/*
Фильтрация по диапазону
важность: 4

Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/

const filterRange = (arr, a, b) => {
    return arr.filter( item => item >= a && item <= b);
};

let arr = [5, 3, 8, 1, 24, 2, 4,];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

/*
Фильтрация по диапазону "на месте"
важность: 4

Напишите функцию filterRangeInPlace(arr, a, b),
которая принимает массив arr и удаляет из него все значения
кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
*/

const filterRangeInPlace = (arr, a, b) => {
    arr.forEach((element, ind) => {
        if (element < a || element > b) {
            arr.splice(ind, 1);
        }
    });
};

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr2 );

/*
Сортировать в порядке по убыванию
важность: 4
*/

let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a,b) => b - a);

console.log(arr3);

/*
Скопировать и отсортировать массив
важность: 5

У нас есть массив строк arr.
Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

const copySorted = arr => {
    let copyArr = arr.slice();
    return copyArr.sort();
};

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

console.log(sorted);
console.log(arr4);

/*
Создать расширяемый калькулятор
важность: 5

Создайте функцию конструктор Calculator,
которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

    Во-первых, реализуйте метод calculate(str),
    который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО»
    (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

    Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

Затем добавьте метод addMethod(name, func),
который добавляет в калькулятор новые операции.
Он принимает оператор name и функцию с двумя аргументами func(a,b),
которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8

    Для этой задачи не нужны скобки или сложные выражения.
    Числа и оператор разделены ровно одним пробелом.
    Не лишним будет добавить обработку ошибок.
*/

const Calculator = function() {
    this.methods = {
        '+':    (a, b) => a + b,
        '-':    (a, b) => a - b,
    };
// 1
    this.calculate = function(str) {
        let arrayOfStr = str.split(' ');
        let firstOperand = +arrayOfStr[0];
        let secondOperand = +arrayOfStr[2];
        let operator = arrayOfStr[1];
        
        if (!this.methods[operator] || isNaN(firstOperand) || isNaN(secondOperand)) return NaN;

        return this.methods[operator](firstOperand, secondOperand);
    };
// 2
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
};

let calc = new Calculator;

console.log(calc.calculate('3 - 7'));
calc.addMethod('**', (a, b) => a ** b);
console.log(calc.calculate('5 ** 3'));

/*
Трансформировать в массив имён
важность: 5

У вас есть массив объектов user, и в каждом из них есть user.name.
Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

alert( names ); // Вася, Петя, Маша
*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(human => human.name);
console.log(names);

/*
Трансформировать в объекты
важность: 5

У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = ... ваш код ... 

usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
*/

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [ vasya2, petya2, masha2 ];

let usersMapped = users2.map(obj => {
    return {
        id: obj.id,
        fullName: `${obj.name} ${obj.surname}`,
    };
});

alert( usersMapped[2].id );
alert( usersMapped[2].fullName );

/*
Отсортировать пользователей по возрасту
важность: 5

Напишите функцию sortByAge(users),
которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/

const sortByAge = arr => arr.sort((x, y) => x.age - y.age);

console.log(sortByAge(users));

/*
Перемешайте массив
важность: 3

Напишите функцию shuffle(array),
которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

Все последовательности элементов должны иметь одинаковую вероятность.
Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2],
или [3,1,2] и т.д., с равной вероятностью каждого случая.
*/

const shuffle = arr => {

    for (let i = arr.length - 1; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
};

console.log(shuffle([1, 2, 3]));

/*
Получить средний возраст
важность: 4

Напишите функцию getAverageAge(users),
которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

const getAverageAge = arr => {
    let sumOfAge = arr.reduce(((sum, human) => sum += human.age), 0);

    return Math.round(sumOfAge / arr.length);
};

console.log(getAverageAge(users));

/*
Оставить уникальные элементы массива
важность: 4

Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив,
содержащий только уникальные элементы arr.

Например:

function unique(arr) {
   ваш код 
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
*/

const unique = arr => {
    let workArr = [];

    for (let item of arr) {
        if (!workArr.includes(item)) workArr.push(item);
    }

    return workArr;
};

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));