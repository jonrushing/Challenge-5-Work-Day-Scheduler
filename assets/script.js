//Get current date and formate it propperly to jumbotron class
const currentDay = document.getElementById("currentDay")
var today = moment().format("dddd, MMMM Do YYYY")
currentDay.innerHTML = today

//crating the time blocks with the hour and save button