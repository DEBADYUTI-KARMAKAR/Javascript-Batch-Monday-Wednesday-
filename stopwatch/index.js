const clock = document.querySelector(".clock");

let second = 0;
let minute = 0;
let hour = 0;
let interval;

const startW = () => {
  interval = setInterval(()=>{
    if (second < 59) {
      second++;
    } else if (minute >= 59) {
      hour++;
      minute = 0;
    } else {
      second = 0;
      minute++;
    }

    const sec = String(second).padStart(2,'0')
    const min = String(minute).padStart(2,'0');
    const hr = String(hour).padStart(2,'0');

    console.log(`${hour}:${minute}:${second}`);
    clock.innerHTML = `${hr}:${min}:${sec}`;
  },1000);
};

const stop = () =>{
    clearInterval(interval);
}

const restart = () => {
    second = 0;
    minute = 0;
    hour = 0;
    clearInterval(interval);

    const sec = String(second).padStart(2,'0')
    const min = String(minute).padStart(2,'0');
    const hr = String(hour).padStart(2,'0');
    clock.innerHTML = `${hr}:${min}:${sec}`;
    
    startW();
}