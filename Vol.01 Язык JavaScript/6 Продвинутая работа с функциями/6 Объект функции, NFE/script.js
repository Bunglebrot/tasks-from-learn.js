/*
Установка и уменьшение значения счётчика
важность: 5

Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

    counter() должен возвращать следующее значение (как и раньше).
    counter.set(value) должен устанавливать счётчику значение value.
    counter.decrease() должен уменьшать значение счётчика на 1.

Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием,
так и свойством функции. Или сделать два варианта решения: и так, и так.
*/
// 2
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => count = value;

  counter.decraese = () => count--;

  return counter;
};

let counter = makeCounter();

console.log( counter() );
console.log( counter.decraese() );
console.log( counter.set(10) );
console.log( counter() );
console.log( counter.set(15) );
console.log( counter() );
console.log( counter() );
console.log( counter.decraese() );
console.log( counter() );

/*
Сумма с произвольным количеством скобок
важность: 2

Напишите функцию sum, которая бы работала следующим образом:

  sum(1)(2) == 3; // 1 + 2
  sum(1)(2)(3) == 6; // 1 + 2 + 3
  sum(5)(-1)(2) == 6
  sum(6)(-1)(-2)(-3) == 0
  sum(0)(1)(2)(3)(4)(5) == 15

P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
*/

function sum( num ) {
  let summat = num;

  function addSum( nextNum ) {
    summat += nextNum;
    return addSum;
  }

  addSum.toString = () => summat;

  return addSum;
}

/*

    В общем, чтобы это хоть как-нибудь заработало, результат, возвращаемый sum, должен быть функцией.
    Между вызовами эта функция должна удерживать в памяти текущее значение счётчика.
    Согласно заданию, функция должна преобразовываться в число,
      когда она используется с оператором ==. Функции – объекты, так что
      преобразование происходит, поэтому можно создать наш собственный метод, возвращающий число.

*/

console.log( sum )
alert( sum(1)(2) )// == 3; // 1 + 2
alert( sum(1)(2)(3) )// == 6; // 1 + 2 + 3
alert( sum(5)(-1)(2) )// == 6
alert( sum(6)(-1)(-2)(-3) )// == 0
alert( sum(0)(1)(2)(3)(4)(5) )// == 15