const inquirer = require('inquirer');
// const utils = require('./utils/pageGenerator')

const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aggregate_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

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
];

const addDepartmentQuestions = [
  {
    type: 'input',
    message: 'Add title of new department',
    name: 'newDepartmentTitle',
  },

];

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
  }, {
    type: 'input',
    message: 'Enter department of new role',
    name: 'newRoleDepartment',
  },
];

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
];


const startMenu = () => {
  inquirer.prompt(startQuestions).then((answer) => {
    if (answer.startQuestions === "View all departments") {
      viewAllDepartments();
    }
    if (answer.startQuestions === "View all roles") {
      viewAllRoles();
    }
    if (answer.startQuestions === "View all employees") {
      viewAllEmployees();
    }
    if (answer.startQuestions === "Add a department") {
      addDepartment();
    }
    if (answer.startQuestions === "Add an employee") {
      addEmployee();
    }
    if (answer.startQuestions === "Update employee role") {
      updateEmployeeRole();
    }
  });
}

const viewAllDepartments = () => {
  db.query('SELECT * FROM department', function (err, results) {
    if (err) throw err
    console.log(results);
    inquirer.prompt([
      {
        type: 'list',
        message: 'Choose an option',
        name: 'mainMenuQuestion',
        choices: [
          "Main menu",
          "Exit"
        ]
      },
    ])
      .then(answer => {
        if (answer.mainMenuQuestion === "Main menu") {
          startMenu();
        }
      })
  });
}

const viewAllRoles = () => {
  db.query('SELECT * FROM role', function (err, results) {
    if (err) throw err
    console.log(results);
    inquirer.prompt([
      {
        type: 'list',
        message: 'Choose an option',
        name: 'viewAllRoles',
        choices: [
          "Main menu",
          "Exit"
        ]
      },
    ])
      .then(answer => {
        if (answer.viewAllRoles === "Main menu") {
          startMenu();
        }
      })
  });
}

const viewAllEmployees = () => {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) throw err
    console.log(results);
    inquirer.prompt([
      {
        type: 'list',
        message: 'Choose an option',
        name: 'viewAllEmployees',
        choices: [
          "Main menu",
          "Exit"
        ]
      },
    ])
      .then(answer => {
        if (answer.viewAllEmployees === "Main menu") {
          startMenu();
        }
      })
  });
}



startMenu();