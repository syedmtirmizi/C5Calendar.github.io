console.log("check");

//create varaible to hour format//
var hourFormat = "hA";

// variable to get local date and time//

var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');

var localTime  = moment.utc(date).toDate();
var localDate  = moment.utc(date).toDate();

localTime = moment(localTime).format('hA');
localDate = moment(localDate).format('dddd, MMMM Do');

console.log("moment: " + localTime);
console.log("moment: " + localDate);


// add local date to HTML//
var currentDayEl = document.getElementById('currentDay');

currentDayEl.innerText = localDate;

// find which row has is greater than, equal to or less than local time//
var textAreaEl = document.getElementById("#textarea");

var hourEls = document.getElementsByClassName("hour");
for (var i = 0; i < hourEls.length; i++) {
    var hour = hourEls[i].innerText;
    console.log("Hours: " + hour);

    var convertedTime = moment(hour, hourFormat);
    console.log(convertedTime.diff(moment(), 'hours'));
    if(convertedTime.diff(moment().startOf('hour'), 'hours') > 0) {
        console.log("true");
    }else if(convertedTime.diff(moment().startOf('hour'), 'hours') < 0) {
        console.log("false");
    }else {
        console.log("same");
    };
};


