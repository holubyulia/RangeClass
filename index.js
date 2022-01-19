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
    constructor (diapazonStart,diapazonEnd) {
        this.diapazonStart = diapazonStart;
        this.diapazonEnd = diapazonEnd;
    }

    set diapazonStart (value) {
        if (typeof value !== number){
            throw new TypeError('Parameters has unnappropriate type')
        }

        this._diapazonStart = value;
    
    }
    get diapazonStart (){
        return this._diapazonStart;
    }

    set diapazonEnd (value) {
        if (typeof value !== number){
            throw new TypeError('Parameters has unnappropriate type')
        }
        if (diapazonStart > value) {
            throw new RangeError('We can`t generate array when last value lower then start')
        }
        this._diapazonEnd = value;
    
    }
    get diapazonEnd (){
        return this._diapazonEnd;
    }

    get range(diapazonStart, _diapazonEnd){
        let rangearray = [];
        rangearray.forEach( rangearray => {
            for (let i = diapazonStart; i <= diapazonEnd; i++){
                return rangearray[i]++;
            }
            return rangearray;
        })

    }

    getValidate (value){
        if(range.instanceof(value) !== -1){
            throw new RangeError('This number is not part of array')
        }
        return 'This number is part of array'
    }

}
