USE aggregate_db; 

INSERT INTO department (dept_id, dept_name)
VALUES ( 011, "Engineering"),
       ( 022, "Manufacturing"),
       ( 033, "R&D"),
       ( 044, "Operations"),
       ( 055, "Support")
;

INSERT INTO role (role_id, role_name, salary, dept_id)
VALUES ( 1000, "Engineer", "100000", 011),
       ( 2000, "Assembler", "50000", 022),
       ( 3000, "Technician", "60000", 033),
       ( 4000, "Pilot", "120000", 044),
       ( 5000, "IT", "130000", 055)
;

INSERT INTO employee (empl_id, first_name, last_name, role_id, manager_id)
VALUES ( 100, "Jimbo", "Jones", 1000, 6),
       ( 101, "Jimmy", "Justice", 2000, 6),
       ( 102, "James", "Jonash", 3000, 6),
       ( 103, "Geraldo", "Rivera", 4000, 1),
       ( 200, "Patty", "Creshaw", 5000, 1)
;
