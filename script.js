const inquirer = require('inquirer');
require('table');

//Dont need?
// const utils = require('./utils/pageGenerator')

const mysql = require('mysql2');
// const Connection = require('mysql2/typings/mysql/lib/Connection');

//Broke
// const { startMenu, viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addEmployee, updateEmployeeRole} = require('./helpers/indexHelper')

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
    type: 'rawlist',
    message: 'Choose an option',
    name: 'startQuestions',
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add an employee",
      "Update employee role",
      "Exit"
    ]
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
    if (answer.startQuestions === "Exit") {
      process.exit();
    }
  });
}

const viewAllDepartments = () => {
  db.query('SELECT dept_name AS Name FROM department', function (err, results) {
    if (err) throw err
    console.table(results);
    inquirer.prompt([
      {
        type: 'rawlist',
        message: 'Choose an option',
        name: 'mainMenuQuestion',
        choices: [
          "Main menu",
          "Exit"
        ]
      },
    ]).then(answer => {
      if (answer.mainMenuQuestion === "Main menu") {
        startMenu();
      }
      if (answer.mainMenuQuestion === "Exit") {
        process.exit();
      }
    })
  });
}

const viewAllRoles = () => {
  db.query('SELECT * FROM role', function (err, results) {
    if (err) throw err
    console.table(results);
    inquirer.prompt([
      {
        type: 'rawlist',
        message: 'Choose an option',
        name: 'viewAllRoles',
        choices: [
          "Main menu",
          "Exit"
        ]
      },
    ]).then(answer => {
      if (answer.viewAllRoles === "Main menu") {
        startMenu();
      }
      if (answer.viewAllRoles === "Exit") {
        process.exit();
      }
    })
  });
}

const viewAllEmployees = () => {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) throw err
    console.table(results);
    inquirer.prompt([
      {
        type: 'rawlist',
        message: 'Choose an option',
        name: 'viewAllEmployees',
        choices: [
          "Main menu",
          "Exit"
        ]
      },
    ]).then(answer => {
      if (answer.viewAllEmployees === "Main menu") {
        startMenu();
      }
      if (answer.viewAllEmployees === "Exit") {
        process.exit();
      }
    })
  });
}

//GET ME WORKING FIRST
const addDepartment = () => {
  db.connect(function (err) {
    if (err) throw err;
    inquirer.prompt([
      {
        type: 'input',
        message: 'Add the name of new department',
        name: 'newDepartmentName',
      },
      {
        type: 'input',
        message: 'Add ID of new department',
        name: 'newDepartmentID',
      },
      {
        type: 'rawlist',
        message: 'Choose an option',
        name: 'addDepartmentMainExit',
        choices: [
          "Main menu",
          "Exit"
        ]
      },
    ]).then(answer => {
      if (answer.addDepartmentMainExit === "Main menu") {
        startMenu();
      }
      //THIS IS A PROBLEM, DOES NOT ADD TO THE TABLE AND ALSO EXITS THE PROGRAM
      // if (answer.newDepartmentName != " ") {
      //   addNewDepartmentNameFunc();

      // }
      // //THIS IS A PROBLEM, DOES NOT ADD TO THE TABLE AND ALSO EXITS THE PROGRAM
      // if (answer.newDepartmentID != " ") {
      //   addNewDepartmentIDFunc();
      // }
      if (answer.addDepartmentMainExit === "Exit") {
        process.exit();
      }
    })
  });

}

//GET ME WORKING
const addEmployee = () => {
  db.connect(function (err) {
    if (err) throw err;
    inquirer.prompt([
      {
        type: 'input',
        message: 'Enter first name of employee',
        name: 'addNewEmployeeFirstName',
      },
      {
        type: 'input',
        message: 'Enter last name of employee',
        name: 'addNewEmployeeLastName',
      },
      {
        type: 'input',
        message: 'Enter employees role',
        name: 'addNewEmployeesRole',
      },
      {
        type: 'input',
        message: 'Enter employees manager',
        name: 'addNewEmployeeManager',
      },
      {
        type: 'rawlist',
        message: 'Choose an option',
        name: 'addNewEmployeeMainExit',
        choices: [
          "Main menu",
          "Exit"
        ]
      },
    ]).then(answer => {
      if (answer.addNewEmployeeMainExit === "Main menu") {
        startMenu();
      }
      if (answer.addNewEmployeeMainExit === "Exit") {
        process.exit();
      }
    })

    // var sql = `INSERT INTO department (dept_id, dept_name) VALUES (?, ?);`;
    // let ID = answer.newDepartmentID;
    // let deptName = answer.newDepartmentName;
    // db.query(sql, [ID, deptName], function (err, result) {
    //   if (err) throw err;
    //   console.log(result.affectedRows);
    // });
  });

}

//GET ME WORKING
const updateEmployeeRole = () => {
  db.connect(function (err) {
    if (err) throw err;
    inquirer.prompt([
      {
        type: 'rawlist',
        message: 'Choose an option',
        name: 'addNewEmployeeMainExit',
        choices: [
          "Main menu",
          "Exit"
        ]
      },
    ]).then(answer => {
      if (answer.addNewEmployeeMainExit === "Main menu") {
        startMenu();
      }
      if (answer.addNewEmployeeMainExit === "Exit") {
        process.exit();
      }
    })
  })
}

// INSERT INTO course_names SET name = 'Underwater Basket Weaving';

//FUNCTIONS for ADDING NEW DEPARTMENT DATA
const addNewDepartmentNameFunc = () => {
  // db.connect(function (err) {
  //   if (err) throw err;
    const stmt = `INSERT INTO department(dept_name, dept_id) VALUES ?, ?  `;
    var value = ['HQ', '46']
    console.log();
    db.query(stmt, [value], function (err, result, fields) {
      if (err) throw err
    console.log(result)
    console.log(fields)
    });
  // });
}
const addNewDepartmentIDFunc = () => {
  const stmt = `INSERT INTO department(dept_id) VALUES ?`;
  const value = ['46']
  db.query(stmt, value, function (err, results) {
    if (err) throw err
  }
  )
}

//FUNCTIONZ for ADDING EMPLOYEE TO COME WHEN ABOVE FUNCTIONS WORK


//FUNCTIONZ for EMPLOYEE ROLE TO COME WHEN ABOVE FUNCTIONS WORK


startMenu();