/*
Сумма пользовательских чисел
важность: 5

Создайте скрипт, который запрашивает ввод двух чисел
(используйте prompt) и после показывает их сумму.

Запустить демо

P.S. Есть «подводный камень» при работе с типами.
*/
let firstUserOperand = +prompt('Введите первое число', '');
let secondUserOperand = +prompt('Введите второе число', '');

alert(`${firstUserOperand} + ${secondUserOperand} = ${(firstUserOperand + secondUserOperand).toFixed(2)}`);

/*
Ввод числового значения
важность: 5

Создайте функцию readNumber, которая будет запрашивать ввод числового значения
до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода,
отправив пустую строку или нажав «Отмена».
В этом случае функция должна вернуть null.
*/

const readNumber = () => {
  let userNumber = +prompt('Введите число', ' -- ');

  while (Number.isNaN(userNumber) || userNumber === '' || userNumber === null) {
    userNumber = +prompt('Пожалуйста введите всё таки число!', ' -- ');
  }

  return userNumber;
};

readNumber();

/*
Случайное число от min до max
важность: 2

Встроенный метод Math.random() возвращает случайное число
от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число
с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/
const random = (min, max) => Math.random() * (max - min) + min;

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
/*
Случайное целое число от min до max
важность: 2

Напишите функцию randomInteger(min, max),
которая генерирует случайное целое (integer)
число от min до max (включительно).

Любое число из интервала min..max должно появляться
с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/
const randomInteger = (min, max) => Math.trunc( Math.random() * (max - min) + min );

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(8, 15) );
