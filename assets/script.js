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

// variables targeting each input
var input9 = document.getElementById("input9")
var input10 = document.getElementById("input10")
var input11 = document.getElementById("input11")
var input12 = document.getElementById("input12")
var input13 = document.getElementById("input13")
var input14 = document.getElementById("input14")
var input15 = document.getElementById("input15")
var input16 = document.getElementById("input16")
var input17 = document.getElementById("input17")

var saveBtn9 = document.getElementById('saveBtn9')

// console.log(currentHour)
var text9 = ''
var hourText = ''

// var allHours = [scheduleHour, scheduleHour10, scheduleHour11, scheduleHour12, scheduleHour13, scheduleHour14, scheduleHour15, scheduleHour16, scheduleHour17]

function updateClock() {
    var currentDate = dayjs();
    var formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');

    dateAndTimeP.textContent = formattedDate;
}

updateClock();
setInterval(updateClock, 1000)

// ======== END =========

// 1 - If the time has passed, make the to do form grey
if (scheduleHour9 == currentHour) {
    input9.setAttribute('class', 'present')
} else if (scheduleHour9 > currentHour) {
    input9.setAttribute('class', 'future')
} else {
    input9.setAttribute('class', 'past')
}

if (scheduleHour10 == currentHour) {
    input10.setAttribute('class', 'present')
} else if (scheduleHour10 > currentHour) {
    input10.setAttribute('class', 'future')
} else {
    input10.setAttribute('class', 'past')
}

if (scheduleHour11 == currentHour) {
    input11.setAttribute('class', 'present')
} else if (scheduleHour11 > currentHour) {
    input11.setAttribute('class', 'future')
} else {
    input11.setAttribute('class', 'past')
}

if (scheduleHour12 == currentHour) {
    input12.setAttribute('class', 'present')
} else if (scheduleHour12 > currentHour) {
    input12.setAttribute('class', 'future')
} else {
    input12.setAttribute('class', 'past')
}

if (scheduleHour13 == currentHour) {
    input13.setAttribute('class', 'present')
} else if (scheduleHour13 > currentHour) {
    input13.setAttribute('class', 'future')
} else {
    input13.setAttribute('class', 'past')
}

if (scheduleHour14 == currentHour) {
    input14.setAttribute('class', 'present')
} else if (scheduleHour14 > currentHour) {
    input14.setAttribute('class', 'future')
} else {
    input14.setAttribute('class', 'past')
}

if (scheduleHour15 == currentHour) {
    input15.setAttribute('class', 'present')
} else if (scheduleHour15 > currentHour) {
    input15.setAttribute('class', 'future')
} else {
    input15.setAttribute('class', 'past')
}

if (scheduleHour16 == currentHour) {
    input16.setAttribute('class', 'present')
} else if (scheduleHour16 > currentHour) {
    input16.setAttribute('class', 'future')
} else {
    input16.setAttribute('class', 'past')
}

if (scheduleHour17 == currentHour) {
    input17.setAttribute('class', 'present')
} else if (scheduleHour17 > currentHour) {
    input17.setAttribute('class', 'future')
} else {
    input17.setAttribute('class', 'past')
}

// function renderLastInput() {

    
//     console.log(scheduleText9)
// }

saveBtn9.onclick = saveFeature

function saveFeature(event) {
    event.preventDefault;
    text9 = input9.value
    localStorage.setItem('text9am', text9)
    input9.innerText = localStorage.getItem('text9am')
    
}

// console.log(inputBox)
// ELSE IF the time is now, make the input form red
// ELSE, the time is in the future, make the input box green

// Add a switch case for each option
// SET ATTRIBUTE of each input box based on the condition

// ON click, the save btn will store the DATASET to LOCAL STORAGE
