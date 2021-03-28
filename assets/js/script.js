console.log("check");

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


// function to change time textarea colour according to local time//
var textAreaEl = document.getElementById("#textarea");

var hourEls = document.getElementsByClassName("hour");
for (var i = 0; i < hourEls.length; i++) {
    var hour = hourEls[i].innerText;
    console.log("Hours: " + hour);
};

function textAreaColourChange() {
    console.log("text area colour change begining");
    if(hour <= localTime) {
        textAreaEl.classList.add('past');
    };


};

textAreaColourChange();

