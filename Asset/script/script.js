var saveBttn = $('.saveBtn')
var eightId =$('#hour8')
var nineId =$('#hour9')
var tenId =$('#hour10')
var eleven =$('#hour11')
var twelve =$('#hour12')
var one =$('#hour13')
var two =$('#hour14')
var three =$('#hour15')
var four =$('#hour16')
var five =$('#hour17')
var six =$('#hour18')
var textarea = $(".form-control")

//define array variable
var eight =$('#hr8')
var nine =$('#hr9')
var ten =$('#hr10')
var eleven =$('#hr11')
var twelve =$('#hr12')
var one =$('#hr13')
var two =$('#hr14')
var three =$('#hr15')
var four =$('#hr16')
var five =$('#hr17')
var six =$('#hr18')

var timeArray = [eight, nine, ten, eleven, twelve, one, two, three, four, five, six]

var text;
var hourSpan;
var HourNow = moment().hour()

//variable for current day
var currentDay = $('#currentDay')
//format date
function displayCurrentDay () {
    var timeInterval = setInterval(function () {
    var now = moment().format('dddd, MMMM Do, YYYY')
    currentDay.text(now)
      })
} 

displayCurrentDay ()

//set correct color to correct timeblock
//past times are blue
//current time is purple
//future times are red
function colors() {
    for (let i=0; i < timeArray.length; i++) {
        if (HourNow > timeArray[i].attr("data-time")){
            timeArray[i].attr("class", "past form-control col-10 text");

        } else if (HourNow == timeArray[i].attr("data-time")) {
            timeArray[i].attr("class", "present form-control col-10 text");

        } else {

            timeArray[i].attr("class", "future form-control col-10 text");
        }
        console.log (timeArray[i].attr("data-time"))
    }
}
      
//
function saveText (event){
    event.preventDefault()
    {
        var text = $(this).siblings(".text").val()
        var time = $(this).parent().attr("id");
        console.log(text)
        console.log(time)
        // Save text in local storage
            localStorage.setItem(time, text)
        }
    }
    //Save after button click
    saveBttn.on('click', saveText)
    
    // hold saved items after refresh
    function refresh () {
        console.log("Current Hour " + HourNow);
        //get items from local storage
        $("#hour9 .text").val(localStorage.getItem("hour9"));
        $("#hour10 .text").val(localStorage.getItem("hour10"));
        $("#hour11 .text").val(localStorage.getItem("hour11"));
        $("#hour12 .text").val(localStorage.getItem("hour12"));
        $("#hour13 .text").val(localStorage.getItem("hour13"));
        $("#hour14 .text").val(localStorage.getItem("hour14"));
        $("#hour15 .text").val(localStorage.getItem("hour15"));
        $("#hour16 .text").val(localStorage.getItem("hour16"));
        $("#hour17 .text").val(localStorage.getItem("hour17"));
        
    } 

$(document).ready (function (){
refresh()
colors ()
} )
