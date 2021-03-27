console.log("check");

var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');

var localTime  = moment.utc(date).toDate();

localTime = moment(localTime).format('hA');

console.log("moment: " + localTime);