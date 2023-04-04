let countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 14); // set countdown for 8 days from now
countDownDate.setHours(0, 0, 0, 0); // set countdown time (in local time)

let countdown = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24)); // calculate days remaining
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // calculate hours remaining
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // calculate minutes remaining
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); // calculate seconds remaining

    // update the HTML with the remaining time
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // check if the countdown has expired
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);