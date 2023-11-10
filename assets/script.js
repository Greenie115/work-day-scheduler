var currentDate = dayjs();
var formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
var dateAndTimeP = document.getElementById("currentDay")
var timer = dateAndTimeP.textContent = formattedDate;


function clock(){
    var currentHour = currentDate.hour()
    console.log(currentHour)
}

// setInterval(function(){
//     dateAndTimeP.textContent = formattedDate;
// }, 1000);
