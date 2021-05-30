const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");
const saveMarkdown = require("./utils/saveMarkdown");
const open = require('open')

async function main() {
//prompt for questions 
const answers = await inquirer.prompt(questions)
//generate markdown from responses
const markDown = generateMarkdown(answers)
//save file 
const fileName = await saveMarkdown(markDown)
open(fileName)

}

//start
main();
