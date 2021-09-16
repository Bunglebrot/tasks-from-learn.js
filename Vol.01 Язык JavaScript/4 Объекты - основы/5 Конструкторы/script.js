/*
Создание калькулятора при помощи конструктора
важность: 5

Создайте функцию-конструктор Calculator,
который создаёт объекты с тремя методами:

    read() запрашивает два значения при помощи prompt
      и сохраняет их значение в свойствах объекта.
    sum() возвращает сумму введённых свойств.
    mul() возвращает произведение введённых свойств.

*/
function Calculator() {

  this.read = function() {
    this.firstOperand = +prompt('Введите первое число', 0);
    this.secondOperand = +prompt('Введите второе число', 0);
  };

  this.sum = function() {
    return this.firstOperand + this.secondOperand;
  };

  this.mul = function() {
    return this.firstOperand * this.secondOperand;
  };

}

let calculator = new Calculator();

calculator.read();

alert( 'Sum=' + calculator.sum());
alert( 'Mul=' + calculator.mul());

/*
Создаём Accumulator
важность: 5

Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

    Хранить «текущее значение» в свойстве value.
    Начальное значение устанавливается в аргументе конструктора startingValue.
    Метод read() использует prompt для получения числа
      и прибавляет его к свойству value.

Таким образом, свойство value является текущей суммой всего,
  что ввёл пользователь при вызовах метода read(),
  с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt(`Прибавьте число к ${this.value}`, 0);
  };

}

let accumulator = new Accumulator(12);

accumulator.read();
accumulator.read();
accumulator.read();

alert(accumulator.value);
