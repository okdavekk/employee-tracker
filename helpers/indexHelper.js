//broken

// const startMenu = () => {
//     inquirer.prompt(startQuestions).then((answer) => {
//       if (answer.startQuestions === "View all departments") {
//         viewAllDepartments();
//       }
//       if (answer.startQuestions === "View all roles") {
//         viewAllRoles();
//       }
//       if (answer.startQuestions === "View all employees") {
//         viewAllEmployees();
//       }
//       if (answer.startQuestions === "Add a department") {
//         addDepartment();
//       }
//       if (answer.startQuestions === "Add an employee") {
//         addEmployee();
//       }
//       if (answer.startQuestions === "Update employee role") {
//         updateEmployeeRole();
//       }
//     });
//   }
  
//   const viewAllDepartments = () => {
//     db.query('SELECT * FROM department', function (err, results) {
//       if (err) throw err
//       console.log(results);
//       inquirer.prompt([
//         {
//           type: 'list',
//           message: 'Choose an option',
//           name: 'mainMenuQuestion',
//           choices: [
//             "Main menu",
//             "Exit"
//           ]
//         },
//       ])
//         .then(answer => {
//           if (answer.mainMenuQuestion === "Main menu") {
//             startMenu();
//           }
//         })
//     });
//   }
  
//   const viewAllRoles = () => {
//     db.query('SELECT * FROM role', function (err, results) {
//       if (err) throw err
//       console.log(results);
//       inquirer.prompt([
//         {
//           type: 'list',
//           message: 'Choose an option',
//           name: 'viewAllRoles',
//           choices: [
//             "Main menu",
//             "Exit"
//           ]
//         },
//       ])
//         .then(answer => {
//           if (answer.viewAllRoles === "Main menu") {
//             startMenu();
//           }
//         })
//     });
//   }
  
//   const viewAllEmployees = () => {
//     db.query('SELECT * FROM employee', function (err, results) {
//       if (err) throw err
//       console.log(results);
//       inquirer.prompt([
//         {
//           type: 'list',
//           message: 'Choose an option',
//           name: 'viewAllEmployees',
//           choices: [
//             "Main menu",
//             "Exit"
//           ]
//         },
//       ])
//         .then(answer => {
//           if (answer.viewAllEmployees === "Main menu") {
//             startMenu();
//           }
//         })
//     });
//   }
  
//   const addDepartment = () => {
//     db.connect(function (err) {
//       if (err) throw err;
//       inquirer.prompt([
//         {
//           type: 'input',
//           message: 'Add the name of new department',
//           name: 'newDepartmentName',
//         },
//         {
//           type: 'input',
//           message: 'Add ID of new department',
//           name: 'newDepartmentID',
//         },
//         {
//           type: 'list',
//           message: 'Choose an option',
//           name: 'addDepartmentMainExit',
//           choices: [
//             "Main menu",
//             "Exit"
//           ]
//         },
//       ])
  
//         .then(answer => {
//           if (answer.addDepartmentMainExit === "Main menu") {
//             startMenu();
//           }
//         })
  
//       // var sql = `INSERT INTO department (dept_id, dept_name) VALUES (?, ?);`;
//       // let ID = answer.newDepartmentID;
//       // let deptName = answer.newDepartmentName;
//       // db.query(sql, [ID, deptName], function (err, result) {
//       //   if (err) throw err;
//       //   console.log(result.affectedRows);
//       // });
//     });
  
//   }
  
//   const addEmployee = () => {
//     db.connect(function (err) {
//       if (err) throw err;
//       inquirer.prompt([
//         {
//           type: 'input',
//           message: 'Enter first name of employee',
//           name: 'addNewEmployeeFirstName',
//         },
//         {
//           type: 'input',
//           message: 'Enter last name of employee',
//           name: 'addNewEmployeeLastName',
//         },
//         {
//           type: 'input',
//           message: 'Enter employees role',
//           name: 'addNewEmployeesRole',
//         },
//         {
//           type: 'input',
//           message: 'Enter employees manager',
//           name: 'addNewEmployeeManager',
//         },
//         {
//           type: 'list',
//           message: 'Choose an option',
//           name: 'addNewEmployeeMainExit',
//           choices: [
//             "Main menu",
//             "Exit"
//           ]
//         },
//       ])
  
//         .then(answer => {
//           if (answer.addNewEmployeeMainExit === "Main menu") {
//             startMenu();
//           }
//         })
  
//       // var sql = `INSERT INTO department (dept_id, dept_name) VALUES (?, ?);`;
//       // let ID = answer.newDepartmentID;
//       // let deptName = answer.newDepartmentName;
//       // db.query(sql, [ID, deptName], function (err, result) {
//       //   if (err) throw err;
//       //   console.log(result.affectedRows);
//       // });
//     });
  
//   }
  
//   const updateEmployeeRole = () => {
//     db.connect(function (err) {
//       if (err) throw err;
//       // inquirer.prompt(updateEmployeeRole)
  
  
//     })
//   }

//   module.exports = { startMenu, viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addEmployee, updateEmployeeRole};