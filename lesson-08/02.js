/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет
 * ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном
 * случае - false.
 */

function isNumeric(str) {
    let result=true
    if (str === "") result= false;

    let hasDot = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            if (hasDot) {
                result= false
            }
            hasDot = true;
        } else if (str[i] < '0' || str[i] > '9') {
            result= false
        }
    }
    return result
}
 console.log(isNumeric("123")) // Ожидаемый результат: true
 console.log(isNumeric("12.3")) // Ожидаемый результат: true
