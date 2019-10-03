const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');


console.log(getNotes());
console.log(validator.isURL('ww..mead.io'));


console.log(chalk.red.inverse('Success'));