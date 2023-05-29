const DEFAULT = 25
let pomodoroMinutes = DEFAULT;
let secondsLeft = 00;
let isRunning = false;

let updateTime = () => {
    console.log(pomodoroMinutes + " - " + secondsLeft);
    document.getElementById("pomodoroMinutes").innerHTML = pomodoroMinutes;
    document.getElementById("pomodoroSeconds").innerHTML = secondsLeft;
}
let setupTime = (setMinutes = DEFAULT) => {
    pomodoroMinutes = setMinutes;
    secondsLeft = 00;
    isRunning = true;
}
let startButton = setInterval(() => {
    if (!isRunning) setupTime()
    if (0 == secondsLeft) {
        secondsLeft = 60
        pomodoroMinutes = pomodoroMinutes - 1;
    }
    if (0 == pomodoroMinutes) clearInterval(x);
    secondsLeft--;
    updateTime();
}, 1000)