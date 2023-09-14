const date = document.getElementById("date");

const day = document.getElementById("day");

const month = document.getElementById("month");

const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November" ,"December"];

// console.log(today);

//all above is work in console in browser and below is the result in our page

// the condition below in get date to show me 01,02,03...etc i want to see zero
date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays [today.getDay()];
month.innerHTML = allMonths [today.getMonth()];
year.innerHTML = today.getFullYear();