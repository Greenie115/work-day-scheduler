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

var input9 = document.getElementById("input9")


// var nodeItem = scheduleHour11.item(0)
// console.log(scheduleHour9)
// console.log(currentHour)
// console.log(input9.setAttribute('class', 'present'))

// var allHours = [scheduleHour, scheduleHour10, scheduleHour11, scheduleHour12, scheduleHour13, scheduleHour14, scheduleHour15, scheduleHour16, scheduleHour17]


function updateClock(){
    var currentDate = dayjs();
    var formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');

    dateAndTimeP.textContent = formattedDate; 
}

updateClock();
setInterval(updateClock, 1000)

// ======== END =========

//1 - If the time has passed, make the to do form grey
if (scheduleHour9 == currentHour){
    var input9 = document.getElementById("input9")
    input9.setAttribute('class', 'present')
    console.log(input9)
    } else if (scheduleHour9 > currentHour){
        input9.setAttribute('class', 'future')
    } else {
        input9.setAttribute('class', 'past')
    }



// ELSE IF the time is now, make the input form red
// ELSE, the time is in the future, make the input box green

// Add a switch case for each option
// SET ATTRIBUTE of each input box based on the condition

// ON click, the save btn will store the DATASET to LOCAL STORAGE
