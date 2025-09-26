/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так,
  чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот
   вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    let result=''
    let capitalize=true
    for(let i=0;i<str.length;i++){
        if(capitalize && str[i]!==' '){
            result+=str[i].toUpperCase()
            capitalize=false
        } else{
            result+=str[i]
        }
        if(str[i]===' '){
            capitalize=true
        }
    }
    return result
}

//let a = "hello world from javascript";
//console.log(capitalizeWords(a));