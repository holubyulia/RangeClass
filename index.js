/*
Реализовать класс RangeValidator
У него будет только два свойства, два числа:
from,
to

От и до. Оба числа. "До" не может быть меньше, чем "от".

Задание:
1. Реализовать геттеры и сеттеры для обоих свойств
2. Реализовать геттер range, который будет возвращать массив всех целых чисел в заданном этими from-to диапазоне
3. Реализовать метод validate, который будет принимать число и проверять, входит ли оно в указанный диапазон чисел, если нет - кидать ошибку.
*/

class RangeValidator{
    constructor (diapazonStart,diapazonEnd) {
        this.diapazonStart = diapazonStart;
        this.diapazonEnd = diapazonEnd;
    }

    set diapazonStart{
        
    }
}