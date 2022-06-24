const inquirer = require("inquirer")
const fs = require("fs");
const _ = require("lodash");
const {Employee, Manager, Engineer, Intern} = require("./lib/classes");
const {createHtmlTop, createCard, createHtmlBottom} = require("./src/template-helper");
const { setTimeout } = require("timers");
// employee objects will be stored here
const employees = []
// questions to create the manager object
managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Who is the team manager? "
    }, 
    {
        type: "input",
        name: "id",
        message: "What is their employee id? ",
        validate: value=>{
            const number = !isNaN(value);
            if (number && value){
                return true;
            } else {
                return "Must enter a number."
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address? ", 
        validate: value=>{
            // not perfect, but should ensure that it is in email format.
            const isEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.+[a-zA-Z0-9-]/.test(value);
            if (isEmail){
                return isEmail
            } else {
                return "Please enter a valid email address";
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is their office number? ",
        validate: value=>{ // will check to see if the user wrote a number
            const number = !isNaN(value);
            if (number && value){
                return true;
            } else {
                return "Must enter a number."
            }
        }
    }
]
// question presented after an object is created
const moreQuestions = [
    {
        type: "list",
        name: "addTeamMember",
        message: "Would you like to add a team member? ",
        choices: ["add engineer", "add intern", "I'm finished building the team"]
    }
]
// copy the id and email questions to avoid repetition 
const initialQuestions = managerQuestions.slice(1,3)
// questions for creating the Engeneer object
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
// questions for creating the Intern object
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
// deconstruct answers, use lodash to titlecase managerName, push to 
// employees array, call mainMenu
function start() {
    
    inquirer.prompt(managerQuestions)
    .then(answers=>{
        let managerNameCheck;
        const {managerName, id, email, officeNumber} = answers;
        managerNameCheck = _.startCase(managerName);
        const manager = new Manager(managerNameCheck, id, email, officeNumber)
        employees.push(manager)
        mainMenu()
        })
    }
// user chooses to add another card or create the html
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
// same layout as the start, but will create and push an Engineer object
// to the employees array
function engineerSetup() {
    inquirer.prompt(engineerQuestion)
    .then(engineerAnswers => {
        let engineerNameCheck;
        const {empName, id, email, github} = engineerAnswers;
        engineerNameCheck = _.startCase(empName);
        const newEngineer = new Engineer(engineerNameCheck, id, email, github);
        employees.push(newEngineer)
        mainMenu()
    })
}
// same layout as the start, but will create and push an Intern object
// to the employees array
function internSetup(){
    inquirer.prompt(internQuestions)
    .then(internAnswers=>{
        let internNameCheck;
        let schoolNameCheck;
        const {intName, id, email, school} = internAnswers;
        internNameCheck = _.startCase(intName);
        schoolNameCheck = _.startCase(school);
        const newIntern = new Intern(internNameCheck, id, email, schoolNameCheck);
        employees.push(newIntern);
        mainMenu();
    })
}
// will use the template-helper.js to create the html file
function createHtml(){
    const newFilePath = "./dist/team-directory.html"
    fs.writeFile(newFilePath, createHtmlTop(), (err)=>{
        if (err){
            console.log(err);
        }
    });
    employees.forEach(employee=>{
        fs.appendFile(newFilePath, createCard(employee), (err)=>{
            if (err){
                console.log(err);
            }
        });

    });
    // 😭😭😭😭😭😭😭😭😭😭😭
    setTimeout(()=>{
        fs.appendFile(newFilePath, createHtmlBottom(), (err)=>{
            if (err){
                console.log(err);
            }
        });
    }, 2000);
    
}
// start the command-line prompts
start()
