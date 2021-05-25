const inquirer = require("inquirer");
const questions = require("./utils/questions");
const questions = require("./utils/generateMarkdown");

function main () {
//prompt for questions 
inquirer
.prompt(questions)
//generate markdown from responses
.then(generateMarkdown)
//save file 
.then(console.log)
}

//start
main ();