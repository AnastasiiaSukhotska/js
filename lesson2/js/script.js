let numberSeconds = +prompt('How many seconds is it?');
let numberHours = parseInt(numberSeconds/3600);
let numberMinutes = parseInt(numberSeconds/60) - numberHours*60
if(numberHours==1 && numberMinutes==1){
	alert('It is ' + numberHours + ' hour and ' + numberMinutes + ' minute');
}
else if(numberHours!=1 && numberMinutes!=1){
	alert('It is ' + numberHours + ' hours and ' + numberMinutes + ' minutes');
}
else if(numberHours==1 && numberMinutes!=1){
	alert('It is ' + numberHours + ' hour and ' + numberMinutes + ' minutes');
}
else alert('It is ' + numberHours + ' hours and ' + numberMinutes + ' minute');

let roomWide = +prompt('Enter wide of room');
let roomLength = +prompt('Enter length of room');
let roomHeight = +prompt('Enter height of room');
let windowWide = +prompt('Enter wide of window');
let windowHeight = +prompt('Enter height of window');
let doorWide = +prompt('Enter wide of door');
let doorHeight = +prompt('Enter height of door');
let numberWindows = parseInt(+prompt('Enter number of windows'));


