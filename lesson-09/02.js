
const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let isTimerStarted = false
let timerId

startButton.addEventListener('click', () => {
  let counter = 3
  if(!isTimerStarted){
    isTimerStarted=true
    countdownDisplay.textContent='counter'
    timerId=setInterval(()=>{
      counter--;
      countdownDisplay.textContent='counter';
      if(counter===0){
        clearInterval(timerId); // Останавливаем таймер
        countdownDisplay.textContent = '🚀'
        isTimerStarted=true
      }
    }, 1000)
  }
})

// - При нажатии на кнопку "Отмена" таймер должен быть остановлен
// - В элементе отображения счётчика (countdownDisplay) должно появиться сообщение "Отменено".
// - Отмена таймера возможна только во время его работы
// - После отмены таймера возможен повторный запуск ракеты
cancelButton.addEventListener('click', () => {
  if(isTimerStarted){
    clearInterval(timerId); // Останавливаем таймер
    countdownDisplay.textContent="Отменено"
    isTimerStarted=false
  }
  })
