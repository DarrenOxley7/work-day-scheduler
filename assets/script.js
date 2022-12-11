$(document).ready(function() {
    console.log("This is working");
});
    //Displays the current Day(text & number) Month and Year
    var now = moment().format("dddd Do MMMM YYYY");
    var displayDate = document.getElementById("current-day");
    displayDate.innerHTML = now;
    var currentHour = moment().format("HH");

    //checks to see if the each hour is the current hours or in the past and adds/removes class based on result
    $(".time").each(function() {
        var timeCheck = $(this).attr("id").split("-")[1];

        if (currentHour == timeCheck) {
                $(this).addClass("is-present");
                $(this).children(".description").addClass("is-present");
        } 
        else if (currentHour < timeCheck) {
            $(this).removeClass("is-present");
            $(this).addClass("is-future");
        } 
        else if (currentHour > timeCheck) {
            $(this).removeClass("is-future");
            $(this).addClass("is-past");
        }
    });

    //Saves data to local storage
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".time-text").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
    });

    //Getsdata from local storage 
    $("#hour-09 .time-text").val(localStorage.getItem("09"));
    $("#hour-10 .time-text").val(localStorage.getItem("10"));
    $("#hour-11 .time-text").val(localStorage.getItem("11"));
    $("#hour-12 .time-text").val(localStorage.getItem("12"));
    $("#hour-13 .time-text").val(localStorage.getItem("13"));
    $("#hour-14 .time-text").val(localStorage.getItem("14"));
    $("#hour-15 .time-text").val(localStorage.getItem("15"));
    $("#hour-16 .time-text").val(localStorage.getItem("16"));
    $("#hour-17 .time-text").val(localStorage.getItem("17"));

     
    //Clear All button to clear data from local storage
     $("#clearBtn").click(function(event) {
        event.preventDefault;
        $("textArea").val("");
        localStorage.clear();
    });