//clock function
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
// ======== END =========

//1 - If the time has passed, make the to do form grey
// ELSE IF the time is now, make the input form red
// ELSE, the time is in the future, make the input box green

// Add a switch case for each option
// SET ATTRIBUTE of each input box based on the condition

// ON clock, the save btn will store the DATASET to LOCAL STORAGE
