// let month = prompt("enter the month in format September");

 /* switch(month) {
    case "September":
    case "October":
    case "November":
        console.log("the season is Autumn");
    break;
    case "December":
    case "January":
    case "February":
        console.log("the season is Winter");
    break;
    case "March":
    case "April":
    case "May":
        console.log("the season is Spring");
    break;
    case "June":
    case "July":
    case "August":
        console.log("the season is Summer");
    break;  
} */

let username = prompt("What is the day of the week").toLowerCase();
switch(username) {
    case "saturday":
    case "sunday":
        alert("its the weekend");
    break;
    case "friday":
    case "thursday":
    case "wednesday":
    case "tuesday":
    case "monday":
        alert("its not the weekend");
    break;
    default:
        alert("please enter a correct date")
}
