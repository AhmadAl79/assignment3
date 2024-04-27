/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let numberOfDaysSelected = 0;

function updateCost() {
    let totalCost = costPerDay * numberOfDaysSelected
}

function selecteDay() {
    numberOfDaysSelected++;
    updateCost();

}

function deselectDay() {
    numberOfDaysSelected--;
    updateCost();

}

function resetSelection() {
    numberOfDaysSelected = 0;
    updateCost();

}

document.getElementById('day1').addEventListener('click', selecteDay);
document.getElementById('day2').addEventListener('click', selecteDay);


document.getElementById('clear-selection-button').addEventListener('click', resetSelection);



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


let clickedDays = []; 


function updateCost() {
    let totalCost = costPerDay * numberOfDaysSelected;

}


function selectDay(dayButton) {
    
    if (!dayButton.classList.contains('clicked')) {
        
        dayButton.classList.add('clicked');
    
        numberOfDaysSelected++;
        
        clickedDays.push(dayButton.dataset.day); 
        updateCost();
    }
}


function deselectDay(dayButton) {
    
    dayButton.classList.remove('clicked');
    
    numberOfDaysSelected--;
    
    const index = clickedDays.indexOf(dayButton.dataset.day);
    if (index !== -1) {
        clickedDays.splice(index, 1);
    }
    
    updateCost();
}


function resetSelection() {
    numberOfDaysSelected = 0;
    clickedDays = [];
    
    const dayButtons = document.querySelectorAll('.day-button');
    dayButtons.forEach(dayButton => {
        dayButton.classList.remove('clicked');
    });
    
    updateCost();
}


const dayButtons = document.querySelectorAll('.day-button');
dayButtons.forEach(dayButton => {
    dayButton.addEventListener('click', function() {
        if (dayButton.classList.contains('clicked')) {
            
            deselectDay(dayButton);
        } else {
            
            selectDay(dayButton);
        }
    });
});


document.getElementById('clear-selection-button').addEventListener('click', resetSelection);





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function updateCost() {
    let totalCost = costPerDay * numberOfDaysSelected;

}

function selectDay(dayButton) {
    
    if (!dayButton.classList.contains('clicked')) {
        
        dayButton.classList.add('clicked');
    
        numberOfDaysSelected++;
        
        clickedDays.push(dayButton.dataset.day); 
        updateCost();
    }
}


function deselectDay(dayButton) {

    dayButton.classList.remove('clicked');

    numberOfDaysSelected--;

    const index = clickedDays.indexOf(dayButton.dataset.day);
    if (index !== -1) {
        clickedDays.splice(index, 1);
    }
    updateCost();
}


function resetSelection() {
    
    const dayButtons = document.querySelectorAll('.day-button');
    dayButtons.forEach(dayButton => {
        dayButton.classList.remove('clicked');
    });
    
    numberOfDaysSelected = 0;
    clickedDays = [];

    updateCost();
}


dayButtons.forEach(dayButton => {
    dayButton.addEventListener('click', function() {
        if (dayButton.classList.contains('clicked')) {
            
            deselectDay(dayButton);
        } else {
            
            selectDay(dayButton);
        }
    });
});


document.getElementById('clear-selection-button').addEventListener('click', resetSelection);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


let isHalfDaySelected = false; 


function updateCost() {
    
    let dailyRate = isHalfDaySelected ? 20 : costPerDay;
    let totalCost = dailyRate * numberOfDaysSelected;
}


function selectDay(dayButton) {
    
    if (!dayButton.classList.contains('clicked')) {
        
        dayButton.classList.add('clicked');
        
        numberOfDaysSelected++;
        
        clickedDays.push(dayButton.dataset.day); 
        updateCost();
    }
}


function deselectDay(dayButton) {
    
    dayButton.classList.remove('clicked');

    numberOfDaysSelected--;
    
    const index = clickedDays.indexOf(dayButton.dataset.day);
    if (index !== -1) {
        clickedDays.splice(index, 1);
    }
    
    updateCost();
}


function selectHalfDay() {
    
    costPerDay = 20;
    
    document.getElementById('half').classList.add('clicked');
    
    document.getElementById('full').classList.remove('clicked');
    
    isHalfDaySelected = true;
    
    updateCost();
}


document.getElementById('half').addEventListener('click', selectHalfDay);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.



function updateCost() {
    
    let dailyRate = isHalfDaySelected ? 20 : 35; 
    let totalCost = dailyRate * numberOfDaysSelected;
    
}


function selectDay(dayButton) {

    if (!dayButton.classList.contains('clicked')) {
        
        dayButton.classList.add('clicked');
        
        numberOfDaysSelected++;
        
        clickedDays.push(dayButton.dataset.day); 
        updateCost();
    }
}


function deselectDay(dayButton) {
    dayButton.classList.remove('clicked');
    numberOfDaysSelected--;
    const index = clickedDays.indexOf(dayButton.dataset.day);
    if (index !== -1) {
        clickedDays.splice(index, 1);
    }
    updateCost();
}


function selectFullDay() {
    costPerDay = 35;
    document.getElementById('full').classList.add('clicked');
    document.getElementById('half').classList.remove('clicked');
    isHalfDaySelected = false;
    updateCost();
}

document.getElementById('full').addEventListener('click', selectFullDay);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function updateCost() {
    let dailyRate = isHalfDaySelected ? 20 : 35; 
    let totalCost = dailyRate * numberOfDaysSelected;
    document.getElementById('calculated-cost').innerHTML = totalCost.toFixed(2); 
}

