function date() {
  const date = new Date();

  let currentDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
  currentDate = formatTime(...currentDate);

  const boxDate = document.getElementById('box-date');
  boxDate.innerHTML = `${currentDate[0]}.${currentDate[1]}.${currentDate[2]}`;

  return function(){
   let currentTime = [date.getHours(), date.getMinutes(), date.getSeconds()];
   currentTime = formatTime(...currentTime);

    const clock = document.getElementById('clock');
    clock.innerHTML = `${currentTime[0]}:${currentTime[1]}:${currentTime[2]}`;
  }

}

function formatTime(timeOne, timeTwo, timeThree) {
  if (timeOne < 10) {
    timeOne = '0' + timeOne;
  }

  if (timeTwo < 10) {
    timeTwo = '0' + timeTwo;
  }

  if (timeThree < 10) {
    timeThree = '0' + timeThree;
  }

  const arrayTime = [timeOne, timeTwo, timeThree];

  return arrayTime;
}

date();

setInterval(() => {
  date()();
}, 1000);
