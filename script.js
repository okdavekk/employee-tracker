const inquirer = require('inquirer');
// const utils = require('./utils/pageGenerator')

const startQuestions = [
  {
  type: 'list',
  message: 'Choose an option',
  name: 'startQuestions',
  choices: [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add an employee",
    "Update employee role",
  ]
  },
]

const addDepartmentQuestions = [
  {
    type: 'input',
    message: 'Add title of new department',
    name: 'newDepartmentTitle',
  },

]

const newRole = [
  {
    type: 'input',
    message: 'Enter name of new role',
    name: 'newRoleName',
  },
  {
    type: 'input',
    message: 'Enter salary of new role',
    name: 'newRoleSalary',
  },  {
    type: 'input',
    message: 'Enter department of new role',
    name: 'newRoleDepartment',
  },
]

const newEmployee = [
  {
    type: 'input',
    message: 'Enter first name of employee',
    name: 'newEmployeeFirstName',
  },
  {
    type: 'input',
    message: 'Enter last name of employee',
    name: 'newEmployeeLastName',
  },  
  {
    type: 'input',
    message: 'Enter employees role',
    name: 'newEmployeesRole',
  },
  {
    type: 'input',
    message: 'Enter employees manager',
    name: 'newEmployeeManager',
  },
]




//   {
//     type: 'input',
//     message: 'Enter Interns School',
//     name: 'internSchool',
//     when(answers) {
//       return answers.employeeAdd === "Intern"
//     }
//   },

// ];


inquirer.prompt(startQuestions).then((answers) => {
  console.log(answers);
  // utils.generatePage(answers);

});

inquirer.prompt(addDepartmentQuestions).then((answers) => {
  console.log(answers);
  // utils.generatePage(answers);

});

inquirer.prompt(newRole).then((answers) => {
  console.log(answers);
  // utils.generatePage(answers);

});

inquirer.prompt(newEmployee).then((answers) => {
  console.log(answers);
  // utils.generatePage(answers);

});
