function date() {
  const time = new Date();
  const boxDate = document.getElementById('box-date');
  boxDate.innerHTML = time.get

  return function(){
   let hours = time.getHours();
   let minutes = time.getMinutes();
   let secondes = time.getSeconds();

    if (secondes < 10) {
      secondes = '0' + secondes;
    }
  
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
  
    if (hours < 10) {
      hours = '0' + hours;
    }
    const clock = document.getElementById('clock');
    clock.innerHTML = hours + ':' + minutes + ':' + secondes;
  }

}

date();

setInterval(() => {
  date()();
}, 1000);
