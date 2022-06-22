const inquirer = require("inquirer")
// const fs = require("fs");
const {Employee, Manager, Engineer, Intern} = require("./lib/classes");
const employees = []

managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Who is the team manager? "
    }, 
    {
        type: "input",
        name: "id",
        message: "What is their employee id? "
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address? "
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is their office number? "
    }
]
const moreQuestions = [
    {
        type: "list",
        name: "addTeamMember",
        message: "Would you like to add a team member? ",
        choices: ["add engineer", "add intern", "I'm finished building the team"]
    }
]
const initialQuestions = managerQuestions.slice(1,3)
const engineerQuestion = [
    {
        type: "input",
        message: "What is your employee's name? ",
        name: "empName"
    },
    ...initialQuestions,
    {
        type: "input",
        name: "github",
        message: "What is their github username? "
    }
]
const internQuestions = [
    {
        type: "input",
        name: "intName",
        message: "What is the intern's name? "
    }, 
    ...initialQuestions,
    {
        type: "input",
        name: "school",
        message: "Which school is the intern attending? "
    }
]

function start() {

    inquirer.prompt(managerQuestions)
    .then(answers=>{
        const {managerName, id, email, officeNumber} = answers;
        const manager = new Manager(managerName, id, email, officeNumber)
        employees.push(manager)
        mainMenu()
    });
}

function mainMenu() {

    inquirer.prompt(moreQuestions)
    .then(answers=>{
        if (answers.addTeamMember === "add engineer"){
            engineerSetup() // will call the prompt with engineer questions
        } else if (answers.addTeamMember === "add intern"){
            internSetup() // call prompt with intern questions
        } else {
            createHtml();
        }
    })
}

function engineerSetup() {
    inquirer.prompt(engineerQuestion)
    .then(engineerAnswers => {
        const {name, id, email, github} = engineerAnswers;
        const newEngineer = new Engineer(name, id, email, github);
        employees.push(newEngineer)
        mainMenu()
    })
}

function internSetup(){
    prompt(internQuestions)
    .then(internAnswers=>{
        const {name, id, email, school} = internAnswers;
        const newIntern = new Intern(name, id, email, school);
        employees.push(newIntern);
        mainMenu();
    })
}

start()
// TODO: export variables to template-helper.js
// TODO: Create engineerSetup and InternSetup functions




// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated