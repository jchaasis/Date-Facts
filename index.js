const moment = require('moment');
const chalk = require('chalk');
const fs = require('fs');
//1.
console.log('It is ' + chalk.blue(moment().format('dddd')) + " " + chalk.blue(moment().format('MMMM Do YYYY, h:mm:ss a')));
//2.
console.log("It is the " + chalk.magenta(moment().dayOfYear() + 'th ') + 'day of the year.');
//3.
let hours = (moment().format('H')*3600);
let minutes = (moment().format('m')*60);
let second = (moment().format('s')*1);
let seconds = hours + minutes + second;
console.log('It is ' + chalk.cyan(seconds) + " into the day.");

//4.
if (moment().isDST() === true){
  console.log(`It ${chalk.green('is')} daylight savings time.`);
} else {
  console.log(`It ${chalk.red('is not')} daylight savings time.`)
}

//5.
if (moment().isLeapYear() === false ){
  console.log(`It ${chalk.red('is not')} a leap year.`)
} else {
  console.log(`It ${chalk.green('is')} a leap year.`)
}
