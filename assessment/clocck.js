function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  hours = change(hours);
  minutes =change(minutes);
  seconds = change(seconds);

  var clockDisplay = hours + ':' + minutes + ':' + seconds;
  console.log(clockDisplay);
}

function change(time) {
  if (time < 10) {
    time = '0' + time; 
  }
  return time;
}

setInterval(updateClock, 3000);
