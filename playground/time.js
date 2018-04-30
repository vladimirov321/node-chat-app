var moment = require('moment');

// var date = moment();
// date.add(1000, 'years').subtract(9, 'month');
// console.log(date.format('MMM Do YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
var date = moment();
console.log(date.format('hh:mm a'));