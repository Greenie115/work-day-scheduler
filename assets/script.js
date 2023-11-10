var dateAndTimeP = document.getElementById("currentDay")

function updateClock(){
    var currentDate = dayjs();
    var formattedDate = currentDate.format('dddd-d-MMM-YYYY HH:mm:ss');
   
    dateAndTimeP.textContent = formattedDate; 
}

function clock(){
    var currentHour = dayjs().hour()
}

updateClock();
setInterval(updateClock, 1000)
clock();

