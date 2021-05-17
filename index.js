const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const path = require();

const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

function addManager() {
  inquirer.prompt([
    {
      message: "What is your manager's name?",
      name: "name",
    },
    {
      message: "What is your manager's email?",
      name: "email",
    },
    {
      message: "What is your manager's office number?",
      name: "officeNumber",
      type: "number",
    },
  ]);
}

function addOthers() {
  inquirer.prompt([
    {
      message: "Would you like to add more team members?",
      choices: [
        "Yes, add an engineer",
        "Yes, add an intern",
        "No, all team members have been added",
      ],
      name: "addTeamMembers",
      type: "list",
    },
  ]);
}

function addEngineer() {
  inquirer.prompt([
    {
      message: "What is the engineer's name?",
      name: "name",
    },
    {
      message: "What is the engineer's email?",
      name: "email",
    },
    {
      message: "What is the engineer's GitHub username?",
      name: "github",
    },
  ]);
}

function addIntern() {
  inquirer.prompt([
    {
      message: "What is the intern's name?",
      name: "name",
    },
    {
      message: "What is the intern's email?",
      name: "email",
    },
    {
      message: "What school does this intern attend?",
      name: "school",
    },
  ]);
}
