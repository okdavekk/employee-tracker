const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator')

const mainQuestions = [
  {
    type: 'input',
    message: 'Team Managers Name?',
    name: 'managerName',
  },
  {
    type: 'input',
    message: 'What is your Employee ID',
    name: 'managerID',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'managerEmail',
  },
  {
    type: 'input',
    message: 'What is your office number',
    name: 'managerOfficeNumber',
  },
  {
    type: 'list',
    message: 'Add employee?',
    name: 'employeeAdd',
    choices: [
      "Engineer",
      "Intern",
      "Exit?",
    ]
  },
  {
    type: 'input',
    message: 'Enter Engineers Name',
    name: 'engineerName',
    when(answers) {
      return answers.employeeAdd === "Engineer"
    }
  },
  {
    type: 'input',
    message: 'Enter Engineers ID',
    name: 'engineerID',
    when(answers) {
      return answers.employeeAdd === "Engineer"
    }
  },
  {
    type: 'input',
    message: 'Enter Engineers Email',
    name: 'engineerEmail',
    when(answers) {
      return answers.employeeAdd === "Engineer"
    }
  },
  {
    type: 'input',
    message: 'Enter Engineers Github Username',
    name: 'engineerGitHub',
    when(answers) {
      return answers.employeeAdd === "Engineer"
    }
  },
  {
    type: 'input',
    message: 'Enter Interns Name',
    name: 'internName',
    when(answers) {
      return answers.employeeAdd === "Intern"
    }
  },
  {
    type: 'input',
    message: 'Enter Intern ID',
    name: 'internID',
    when(answers) {
      return answers.employeeAdd === "Intern"
    }
  },
  {
    type: 'input',
    message: 'Enter Intern Email',
    name: 'internEmail',
    when(answers) {
      return answers.employeeAdd === "Intern"
    }
  },
  {
    type: 'input',
    message: 'Enter Interns School',
    name: 'internSchool',
    when(answers) {
      return answers.employeeAdd === "Intern"
    }
  },

];


inquirer.prompt(mainQuestions).then((answers) => {
  console.log(answers);
  utils.generatePage(answers);

});
