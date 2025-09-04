/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о
произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть
 обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.


*/

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(objectOfGalary, name, newName) {
  if (name in objectOfGalary){
    objectOfGalary[name]=newName
  }else{
    objectOfGalary[name]=newName
  }
}


