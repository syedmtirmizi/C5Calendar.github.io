console.log("check");
var textAreaEl = document.getElementsByClassName("textarea");

//add code to store data to local stoage//


function saveFunction(a) {
    console.log(a + ' [contenteditable]')
    var contenteditable = document.querySelector(a + ' [contenteditable]'),
        text = contenteditable.textContent;
        console.log(text);
    ;
    localStorage.setItem(a, text);
};


function refresh () {
    for (var i = 0; i < 24; i++) {
        var taskValueEl = localStorage.getItem('#hour-' + i + '');
        console.log(taskValueEl);
        if (taskValueEl != null) {
            textAreaEl[i].textContent = taskValueEl;
        };
    };

};


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

var hourEls = document.getElementsByClassName("hour");
for (var i = 0; i < hourEls.length; i++) {
    var hour = hourEls[i].innerText;
    var text = textAreaEl[i].classList;
    console.log("Hours: " + hour);
    console.log("texts: " + text);

    var convertedTime = moment(hour, hourFormat);
    console.log(convertedTime.diff(moment(), 'hours'));
    if(convertedTime.diff(moment().startOf('hour'), 'hours') > 0) {
        console.log("future");
        text.add('future');
    }else if(convertedTime.diff(moment().startOf('hour'), 'hours') < 0) {
        console.log("past");
        text.add('past');
    }else {
        console.log("present");
        text.add('present');
    };
};


