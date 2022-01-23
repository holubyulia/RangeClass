/*
Реализовать класс RangeValidator
У него будет только два свойства, два числа:
from,
to

От и до. Оба числа. "До" не может быть меньше, чем "от".

Задание:
1. Реализовать геттеры и сеттеры для обоих свойств +
2. Реализовать геттер range, который будет возвращать массив всех целых чисел в заданном этими from-to диапазоне
3. Реализовать метод validate, который будет принимать число и проверять, входит ли оно в указанный диапазон чисел, если нет - кидать ошибку.
*/

class RangeValidator{

    constructor (diapazonStart, diapazonEnd) {
        this._diapazonStart = diapazonStart;
        this._diapazonEnd = diapazonEnd;
    }

    set diapazonStart (value) {
        if (typeof value !== 'number'){
            throw new TypeError('Parameters has unnappropriate type')
        }

        this._diapazonStart = value;
    
    }
    get diapazonStart (){
        return this._diapazonStart;
    }

    set diapazonEnd (value) {
        if (typeof value !== 'number'){
            throw new TypeError('Parameters has unnappropriate type')
        }
        if (this._diapazonStart > value) {
            throw new RangeError('We can`t generate array when last value lower then start')
        }
        this._diapazonEnd = value;
    
    }
    get diapazonEnd (){
        return this._diapazonEnd;
    }

    get Range (){
        let rangearray = [];
            for (let i = this._diapazonStart - 1; i <= this._diapazonEnd - 1; i++){               
                rangearray[i] = i + 1;
            }
            return rangearray;
        }

    validate (value) {
        if(Range.instanceof(value) !== -1){
            throw new RangeError('This number is not part of array')
        }
        return 'This number is part of array'
    }

} 

const u1 = new RangeValidator(1,8)
