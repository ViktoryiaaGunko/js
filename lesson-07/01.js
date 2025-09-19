/*
Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.
Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE
🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]

let ind=0

function updateImg(){
  const imgElement=document.getElementById("web-tech-image")
  imgElement.src=WEB_TECH_IMAGES[ind]
}

//для кнопки "prev"
document.getElementById("prev-button").addEventListener('click', () => {
ind=(ind-1+WEB_TECH_IMAGES.length)%WEB_TECH_IMAGES.length
  updateImg()
})

//для кнопки "next"
document.getElementById("next-button").addEventListener('click', () => {
  ind=(ind+1)%WEB_TECH_IMAGES.length

  updateImg()
})