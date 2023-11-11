//clock function
var dateAndTimeP = document.getElementById("currentDay")
var currentHour = dayjs().format('HH')
var scheduleHour9 = document.querySelector('#workHour9').innerText
var scheduleHour10 = document.querySelector('#workHour10').innerText
var scheduleHour11 = document.querySelector('#workHour11').innerText
var scheduleHour12 = document.querySelector('#workHour12').innerText
var scheduleHour13 = document.querySelector('#workHour13').innerText
var scheduleHour14 = document.querySelector('#workHour14').innerText
var scheduleHour15 = document.querySelector('#workHour15').innerText
var scheduleHour16 = document.querySelector('#workHour16').innerText
var scheduleHour17 = document.querySelector('#workHour17').innerText
var inputBox = document.querySelectorAll('.input')

var allHours = [scheduleHour9, scheduleHour10, scheduleHour11, scheduleHour12, scheduleHour13, scheduleHour14, scheduleHour15, scheduleHour16, scheduleHour17]
console.log(inputBox.setAttribute("class", "past"))

function updateClock(){
    var currentDate = dayjs();
    var formattedDate = currentDate.format('dddd-d-MMM-YYYY HH:mm:ss');
   
    dateAndTimeP.textContent = formattedDate; 
}
updateClock();
setInterval(updateClock, 1000)
// clock();
// ======== END =========

//1 - If the time has passed, make the to do form grey
for(i = 8; currentHour; i++){
    if(currentHour == allHours[i]){
        inputBox.setAttribute("class", "present")
        }else if(currentHour < allHours[i]) {
            inputBox.setAttribute("class", "future")
        } else {
            inputBox.setAttribute("class","past")
    }
}


// ELSE IF the time is now, make the input form red
// ELSE, the time is in the future, make the input box green

// Add a switch case for each option
// SET ATTRIBUTE of each input box based on the condition

// ON click, the save btn will store the DATASET to LOCAL STORAGE
