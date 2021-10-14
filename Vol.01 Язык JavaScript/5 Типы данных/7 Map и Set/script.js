/*
Фильтрация уникальных элементов массива
важность: 5

Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных,
не повторяющихся значений массива arr.

Например:

function unique(arr) {
  .. ваш код ..
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O

P.S. Здесь мы используем строки, но значения могут быть любого типа.

P.P.S. Используйте Set для хранения уникальных значений.
*/

const unique = arr => Array.from( new Set(arr) );

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );

/*
Отфильтруйте анаграммы
важность: 4

Анаграммы – это слова, у которых те же буквы в том же количестве,
но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers

Напишите функцию aclean(arr),
которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

const aclean = arr => {
  const result = new Map();

    for (let word of arr) {
      let sorted = word.toLowerCase().split('').sort().join('');
      result.set(sorted, word);
    }

    return Array.from(result.values());
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );