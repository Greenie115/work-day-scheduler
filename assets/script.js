var dateAndTimeP = document.getElementById("currentDay")

function updateClock(){
    var currentDate = dayjs();
    var formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
   
    dateAndTimeP.textContent = formattedDate; 
}

function clock(){
    var currentHour = dayjs().hour()
    console.log(currentHour)
}

updateClock();
setInterval(updateClock, 1000)
clock();