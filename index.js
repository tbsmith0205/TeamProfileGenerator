const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
// const path = require();

const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
// const manager = require("./lib/Manager");
const Manager = require("./lib/Manager.js");

const generateHTML = require("./src/page-template.js");

const teamArray = [];
landingPagePrompt();
function landingPagePrompt() {
  inquirer
    .prompt([
      {
        message:
          "Welcome to the Team Generator. Please supply the name of your team:",
        name: "teamName",
        type: "input",
      },
    ])
    .then(function (data) {
      const teamName = data.teamName;
      teamArray.push(teamName);
      addManager();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your manager's name?",
        name: "name",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your manager's ID number.",
      },
      {
        type: "input",
        message: "What is your manager's email?",
        name: "email",
      },
      {
        message: "What is your manager's office number?",
        name: "officeNumber",
        type: "input",
      },
    ])
    .then(function (data) {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const teamMember = new Manager(name, id, email, officeNumber);
      teamArray.push(teamMember);
      addOthers();
    });
}

function addOthers() {
  inquirer
    .prompt([
      {
        message: "Would you like to add more team members?",
        choices: [
          "Yes, I would like to add an engineer.",
          "Yes, I would like to add an intern.",
          "No, all team members have been added.",
        ],
        name: "addOthers",
        type: "list",
      },
    ])
    .then(function (data) {
      switch (data.addOthers) {
        case "Yes, I would like to add an engineer.":
          addEngineer();
          break;

        case "Yes, I would like to add an intern.":
          addIntern();
          break;

        case "No, all team members have been added.":
          console.log(teamArray);
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your engineer's ID number.",
      },
    ])
    .then(function (data) {
      const name = data.name;
      const github = data.github;
      const email = data.email;
      const id = data.id;

      const teamMember = new Engineer(name, id, email, github);
      teamArray.push(teamMember);
      addOthers();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What school does this intern attend?",
        name: "school",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your intern's ID number.",
      },
    ])
    .then(function (data) {
      const name = data.name;
      const school = data.school;
      const email = data.email;
      const id = data.id;

      const teamMember = new Intern(name, id, email, school);
      teamArray.push(teamMember);
      addOthers();
    });
}

function completeTeam() {
  console.log("All team members have been added, and your team is complete.");

  const htmlTeamArray = [];
  const htmlGeneration = ``;
}
