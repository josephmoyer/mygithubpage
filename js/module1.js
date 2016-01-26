//Display Date and time.

// Create a variable to hold a new Date object (defaults to now)
var today = new Date();

var date = document.getElementById('date');
// Write the year into that element.
date.innerHTML = '<p>Today\'s date: ' + today + '</p>';

//Leap Year
var year = today.getFullYear();
var leap = document.getElementById('leap');


function leapyear(){
    if (year % 4 != 0) {
	leap.innerHTML = '<p> '+ year + ' is not a leap year.</p>';
    }
    else {
	if (year % 100 != 0){
	    leap.innerHTML = '<p> '+ year + ' is a leap year.</p>';
	}
	else {
	    if (year % 400 != 0){
		leap.innerHTML = '<p> '+ year + ' is not a leap year.</p>';
	    }
	    else {
		leap.innerHTML = '<p> '+ year + ' is a leap year.</p>';
	    }
	}
    }
}

leapyear();

//Celsius to Fahrenheit

function C2F(temp){
     return (temp * 1.8) + 32;
}

function F2C(temp){
    return (temp - 32) / 1.8;
}
var temperature = 75;

var pmet = document.getElementById('temp');
pmet.innerHTML = '<p>' + temperature + ' in Fahrenheit is ' + F2C(temperature) + ' in Celsius. ' + temperature + ' in Celsius is ' + C2F(temperature) + ' in Fahrenheit.</p>';
