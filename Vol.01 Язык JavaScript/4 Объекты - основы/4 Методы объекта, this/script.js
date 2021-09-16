/*
Создайте калькулятор
важность: 5

Создайте объект calculator (калькулятор) с тремя методами:

    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator =  {
  firstOperand: 0,
  secondOperand: 0,
  mul() {
    return this.firstOperand * this.secondOperand;
  },
  read() {
    this.firstOperand = +prompt('Введите первое число', 0);
    this.secondOperand = +prompt('Введите второе число', 0);
  },
  sum() {
    return this.firstOperand + this.secondOperand;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator);
