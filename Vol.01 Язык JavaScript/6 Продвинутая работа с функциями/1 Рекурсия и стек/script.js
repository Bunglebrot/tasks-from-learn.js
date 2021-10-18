/*
Вычислить сумму чисел до данного
важность: 5

Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

Сделайте три варианта решения:

    С использованием цикла.
    Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
    С использованием формулы арифметической прогрессии.

Пример работы вашей функции:

function sumTo(n) { ... ваш код ... }

alert( sumTo(100) ); // 5050

P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
*/

const sumToCicle = (from = 1) => {
    let sum = 0;

    while (from > 0) {
        sum += from;
        from--;
    }

    return sum;
};

console.log( sumToCicle(100) );

const sumToRec = (from = 1) => {
    let sum = 0;
    sum += from;
    return from === 1 ? sum : sum += sumToRec(from - 1);
};

console.log( sumToRec(4) );

const sumToFormul = (from = 1) => {
    return from * (from + 1) / 2;
};

console.log( sumToFormul(100) );
console.log( sumToFormul(4) );

/*
Вычислить факториал
важность: 4

Факториал натурального числа – это число, умноженное на "себя минус один",
затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1

Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

Задача – написать функцию factorial(n),которая возвращает n!, используя рекурсию.

alert( factorial(5) ); // 120

P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
*/

const factorial = num => {
 return num === 1 ? num : num * factorial(num - 1);
};

console.log( factorial(5) );

/*
Числа Фибоначчи
важность: 5

Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1),
затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением
и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы:

function fib(n) { ваш код }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

P.S. Все запуски функций из примера выше должны работать быстро.
Вызов fib(77) должен занимать не более доли секунды.
*/

const fib = n => {
    let prev = 1;
    let next = 1;
    let fbn = prev + next;

    while (n > 3) {
        prev = next;
        next = fbn;
        fbn = prev + next;
        n -= 1;
    }

    return fbn;
};

console.log( fib(3) );
console.log( fib(7) );
console.log( fib(77) );

/*
Вывод односвязного списка
важность: 5

Допустим, у нас есть односвязный список:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

Напишите функцию printList(list),
которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
*/

const printListCicle = list => {
  let tmp = list;

  while (tmp !== null) {
    console.log(tmp.value)
    tmp = tmp.next;
  }
};

const printListRec = list => {
  console.log(list.value);

  if (list.next) return printListRec(list.next);
};

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

console.log( printListCicle(list) );
console.log( printListRec(list) );

/*
Вывод односвязного списка в обратном порядке
важность: 5

Выведите односвязный список из предыдущего задания в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
*/

const printReverseListCicle = list => {
  let arr = [];
  let tmp = list;

  while (tmp !== null) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  arr.reverse();

  for (let elem of arr) {
    alert(elem);
  }
};

const printReverseListRec = list => {
  
  if (list.next) {
    printReverseListRec(list.next);
  }

  alert(list.value);
};

console.log( printReverseListCicle(list) );
console.log( printReverseListRec(list) );